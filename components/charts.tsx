export function Sparkline({ data, color = "#303030", w = 44, h = 18 }: { data: number[]; color?: string; w?: number; h?: number }) {
  const max = Math.max(...data), min = Math.min(...data);
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / (max - min || 1)) * (h - 2) - 1}`).join(" ");
  return (
    <svg width={w} height={h} className="inline-block align-middle">
      <polyline points={pts} fill="none" stroke={color} strokeWidth={1.4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function AreaChart({ data, color = "#2c6ecb", height = 160, labels }: { data: number[]; color?: string; height?: number; labels?: string[] }) {
  const w = 800, pad = 6;
  const max = Math.max(...data) * 1.1, min = 0;
  const x = (i: number) => pad + (i / (data.length - 1)) * (w - pad * 2);
  const y = (v: number) => height - 18 - ((v - min) / (max - min)) * (height - 30);
  const line = data.map((v, i) => `${i ? "L" : "M"}${x(i)},${y(v)}`).join(" ");
  const area = `${line} L${x(data.length - 1)},${height - 18} L${x(0)},${height - 18} Z`;
  const id = `g${color.replace("#", "")}${height}`;
  return (
    <svg viewBox={`0 0 ${w} ${height}`} className="w-full" preserveAspectRatio="none" style={{ height }}>
      <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={color} stopOpacity=".22" /><stop offset="1" stopColor={color} stopOpacity="0" /></linearGradient></defs>
      {[0.25, 0.5, 0.75].map((t) => <line key={t} x1={0} x2={w} y1={y(max * t)} y2={y(max * t)} stroke="#ebebeb" strokeDasharray="3 4" />)}
      <path d={area} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      {labels && labels.map((l, i) => <text key={i} x={x(Math.round((i / (labels.length - 1)) * (data.length - 1)))} y={height - 3} fontSize={11} fill="#8a8a8a" textAnchor={i === 0 ? "start" : i === labels.length - 1 ? "end" : "middle"}>{l}</text>)}
    </svg>
  );
}
