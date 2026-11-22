const paths: Record<string, string> = {
  home: "M3 11l9-8 9 8M5 10v10h14V10",
  orders: "M6 3h12l2 4v13H4V7l2-4zM4 7h16M9 11h6",
  products: "M21 8l-9-5-9 5v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v8",
  customers: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8",
  growth: "M3 17l6-6 4 4 8-8M15 7h6v6",
  search: "M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3",
  plus: "M12 5v14M5 12h14",
  back: "M15 18l-6-6 6-6",
  chevron: "M9 18l6-6-6-6",
  filter: "M3 5h18M6 12h12M10 19h4",
  bell: "M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0",
  more: "M5 12h.01M12 12h.01M19 12h.01",
  tag: "M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L2 12V2h10l8.6 8.6a2 2 0 010 2.8zM7 7h.01",
  mail: "M4 4h16v16H4zM4 6l8 7 8-7",
  phone: "M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z",
  truck: "M1 3h15v13H1zM16 8h4l3 3v5h-7M5.5 21a2 2 0 100-4 2 2 0 000 4zM18.5 21a2 2 0 100-4 2 2 0 000 4z",
  check: "M20 6L9 17l-5-5",
  x: "M18 6L6 18M6 6l12 12",
  image: "M3 3h18v18H3zM8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM21 15l-5-5L5 21",
  star: "M12 2l3 7h7l-5.5 4.5L18.5 21 12 17l-6.5 4 2-7.5L2 9h7z",
  megaphone: "M3 11v2a1 1 0 001 1h3l8 4V6L7 10H4a1 1 0 00-1 1zM19 9a4 4 0 010 6",
  gear: "M12 15a3 3 0 100-6 3 3 0 000 6zM19 12a7 7 0 00-.1-1.2l2-1.5-2-3.5-2.3.9a7 7 0 00-2-1.2L14 3h-4l-.6 2.5a7 7 0 00-2 1.2l-2.3-.9-2 3.5 2 1.5A7 7 0 005 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.5 2.3-.9c.6.5 1.3.9 2 1.2L10 21h4l.6-2.5c.7-.3 1.4-.7 2-1.2l2.3.9 2-3.5-2-1.5c.1-.4.1-.8.1-1.2z",
  calendar: "M3 5h18v16H3zM3 10h18M8 3v4M16 3v4",
  trash: "M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15M10 11v6M14 11v6",
  columns: "M3 4h18v16H3zM9 4v16M15 4v16",
  chevdown: "M6 9l6 6 6-6",
  updown: "M8 9l4-4 4 4M8 15l4 4 4-4",
  download: "M12 3v12M7 10l5 5 5-5M4 21h16",
  percent: "M19 5L5 19M7 9a2 2 0 100-4 2 2 0 000 4zM17 19a2 2 0 100-4 2 2 0 000 4z",
  content: "M3 4h18v12H3zM8 21h8M12 16v5",
  globe: "M12 22a10 10 0 100-20 10 10 0 000 20zM2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20",
  bank: "M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18",
  chart: "M5 21V10M12 21V4M19 21v-8",
  user: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z",
  store: "M3 9l2-5h14l2 5M3 9v11h18V9M3 9h18M9 20v-6h6v6",
  sparkle: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z",
  bold: "M7 5h6a3.5 3.5 0 010 7H7zM7 12h7a3.5 3.5 0 010 7H7z",
  italic: "M10 4h8M6 20h8M15 4L9 20",
  link: "M10 14a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 10a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1",
  code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  external: "M14 4h6v6M20 4l-9 9M18 14v6H4V6h6",
  info: "M12 22a10 10 0 100-20 10 10 0 000 20zM12 16v-4M12 8h.01",
  alert: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01",
};

export function Icon({
  name,
  size = 20,
  stroke = 2,
  className,
}: {
  name: keyof typeof paths | string;
  size?: number;
  stroke?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={paths[name] ?? paths.info} />
    </svg>
  );
}
