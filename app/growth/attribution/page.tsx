import { Icon } from "@/components/Icon";
import { AreaChart } from "@/components/charts";
import { channelsList, sessionsSeries } from "@/lib/data";

const money = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const dash = <span className="text-[#8a8a8a]">—</span>;

export default function Attribution() {
  const th = "whitespace-nowrap px-3 py-[9px] text-right font-medium";
  const td = "whitespace-nowrap px-3 py-[10px] text-right text-[#303030]";
  return (
    <div className="px-5 pb-12 pt-5">
      <header className="mb-3 flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-[18px] font-bold text-[#303030]"><Icon name="growth" size={17} /><Icon name="chevron" size={12} className="text-[#8a8a8a]" /> Attribution <span className="ml-1 flex h-7 items-center gap-1 rounded-lg bg-[#e3e3e3] px-2 text-[12px] font-medium">Campaign activities <Icon name="chevdown" size={12} /></span></h1>
        <div className="flex gap-2"><button className="h-7 rounded-lg bg-[#e3e3e3] px-3 text-[12px] font-medium">Print</button><button className="h-7 rounded-lg bg-[#e3e3e3] px-3 text-[12px] font-medium">Export</button></div>
      </header>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex gap-2"><span className="flex h-8 items-center gap-2 rounded-lg border border-[#d4d4d4] bg-white px-3 text-[13px] font-medium"><Icon name="calendar" size={14} /> Last 30 days</span><span className="flex h-8 items-center gap-2 rounded-lg border border-[#d4d4d4] bg-white px-3 text-[13px] font-medium">Daily <Icon name="chevdown" size={12} /></span></div>
        <span className="flex h-8 items-center gap-2 rounded-lg border border-[#d4d4d4] bg-white px-3 text-[13px] font-medium"><Icon name="chart" size={14} /> Last non-direct click <Icon name="chevdown" size={12} /></span>
      </div>

      <section className="mb-3 rounded-xl bg-white p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]">
        <p className="mb-3 flex items-center gap-1 text-[13px] font-medium">Sessions by top 5 channels over time <Icon name="chevdown" size={12} /></p>
        <div className="relative">
          {channelsList.slice(0, 5).map((c, i) => <div key={c.name} className={i ? "absolute inset-0" : ""} style={{ opacity: i ? 1 : 1 }}><AreaChart data={sessionsSeries.map((v, j) => Math.round(v * (1 - i * 0.17) + ((j * (i + 3)) % 9)))} color={c.color} height={210} labels={i === 0 ? ["Oct 24", "Oct 31", "Nov 7", "Nov 14", "Nov 22"] : undefined} /></div>)}
        </div>
        <div className="mt-2 flex gap-4 text-[12px] text-[#616161]">{channelsList.slice(0, 5).map((c) => <span key={c.name} className="flex items-center gap-1"><i className="inline-block h-2 w-2 rounded-full" style={{ background: c.color }} />{c.name}</span>)}</div>
      </section>

      <div className="mb-3 flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-[13px] shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b4dcff]"><Icon name="info" size={15} /></span>Cost, click, and impression metrics are now available for supported marketing apps. <u>Learn more</u><Icon name="x" size={15} className="ml-auto" /></div>

      <section className="overflow-x-auto rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]">
        <div className="flex justify-between border-b border-[#ebebeb] p-2"><span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#d4d4d4]"><Icon name="filter" size={14} /></span><span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#d4d4d4]"><Icon name="columns" size={14} /></span></div>
        <table className="w-full text-[13px]">
          <thead><tr className="bg-[#f7f7f7] text-[12px] text-[#616161]"><th className="px-3 py-[9px] text-left font-medium">Campaign activities</th><th className="px-3 text-left font-medium">Channel</th><th className="px-3 text-left font-medium">Type</th><th className={th}>Sessions ⇅</th><th className={th}>Sales</th><th className={th}>Orders</th><th className={th}>Conversion rate</th><th className={th}>Cost</th><th className={th}>ROAS</th><th className={th}>CPA</th><th className={th}>CTR</th><th className={th}>AOV</th></tr></thead>
          <tbody>
            {channelsList.map((c) => (
              <tr key={c.name} className="border-t border-[#ebebeb]">
                <td className="px-3 py-[10px] font-medium"><span className="mr-2 inline-flex align-middle"><Icon name={c.icon} size={15} /></span>{c.name}</td>
                <td className="px-3 text-[#303030]">{c.name === "Direct" ? "Direct" : c.name.split(" ")[0]}</td><td className="px-3 text-[#303030]">{c.type}</td>
                <td className={td}>{c.sessions.toLocaleString()}</td><td className={td}>{money(c.sales)}</td><td className={td}>{c.orders}</td><td className={td}>{((c.orders / c.sessions) * 100).toFixed(2)}%</td>
                <td className={td}>{c.cost ? money(c.cost) : dash}</td><td className={td}>{c.roas ? c.roas.toFixed(2) : dash}</td><td className={td}>{c.cpa ? money(c.cpa) : dash}</td><td className={td}>{c.ctr ? c.ctr + "%" : dash}</td><td className={td}>{money(c.sales / c.orders)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
