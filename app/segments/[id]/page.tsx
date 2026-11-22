import Link from "next/link";
import { Icon } from "@/components/Icon";
import { getSegment, segments, customers } from "@/lib/data";

export default async function SegmentDetail(props: PageProps<"/segments/[id]">) {
  const { id } = await props.params;
  const s = getSegment(id);
  const members = customers.filter((c) => (s.id === "s2" ? c.subscribed : s.id === "s3" ? c.orders > 1 : s.id === "s5" ? c.spent > 400 : s.id === "s4" ? c.orders === 1 : s.id === "s6" ? false : c.orders >= 1)).slice(0, 12);
  return (
    <div className="mx-auto max-w-[1180px] px-5 pb-12 pt-5">
      <header className="mb-3 flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-[18px] font-bold text-[#303030]"><Link href="/segments"><Icon name="user" size={17} /></Link><Icon name="chevron" size={12} className="text-[#8a8a8a]" /> {s.name}</h1>
        <div className="flex gap-2"><button className="h-8 rounded-lg bg-[#e3e3e3] px-3 text-[13px] font-medium">Duplicate</button><button className="h-8 rounded-lg bg-[#e3e3e3] px-3 text-[13px] font-medium">More actions ▾</button><button className="h-8 rounded-lg bg-[#303030] px-3 text-[13px] font-semibold text-white">Use segment ▾</button></div>
      </header>
      <section className="rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4 px-4 py-3 text-[13px]"><span className="h-2 w-2 rounded-full bg-[#2f9e5f]" /><span className="font-medium">{members.length} customers</span><span className="border-l border-[#ebebeb] pl-4 font-medium">{s.pct}% of your customer base</span></div>
        <pre className="px-4 pb-3 font-mono text-[12px] leading-6 text-[#8a8a8a]">{s.query.split("\n").map((l, i) => <div key={i}><span className="mr-3 text-[#303030]">{i + 1}</span>{l}</div>)}</pre>
        <div className="flex items-center gap-2 border-t border-[#ebebeb] px-4 py-3 text-[13px] text-[#616161]"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5b3df5] text-white"><Icon name="sparkle" size={11} /></span> Refine your segment</div>
      </section>
      <section className="mt-4 rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-2 p-3"><div className="flex h-8 flex-1 items-center gap-2 rounded-lg bg-[#f1f1f1] px-3 text-[13px] text-[#616161]"><Icon name="search" size={14} /> Search customers</div><Icon name="columns" size={15} /></div>
        <table className="w-full text-left text-[13px]">
          <thead><tr className="bg-[#f7f7f7] text-[12px] font-medium text-[#616161]"><th className="w-10 px-4 py-2"><input type="checkbox" className="h-4 w-4" /></th><th>Customer name</th><th>Email subscription</th><th>Location</th><th className="text-right">Orders</th><th className="px-4 text-right">Amount spent</th></tr></thead>
          <tbody>
            {members.map((c) => (
              <tr key={c.id} className="border-t border-[#ebebeb]">
                <td className="px-4"><input type="checkbox" className="h-4 w-4" /></td>
                <td className="py-[11px]"><Link href={`/customers/${c.id}`} className="hover:underline">{c.name}</Link></td>
                <td><span className={`rounded-md px-2 py-[2px] text-[12px] ${c.subscribed ? "bg-[#b4fed2] text-[#014b40]" : "bg-[#f1f1f1] text-[#616161]"}`}>{c.subscribed ? "Subscribed" : "Not subscribed"}</span></td>
                <td>{c.city}, {c.country}</td><td className="text-right">{c.orders}</td><td className="px-4 text-right">${c.spent.toFixed(2)}</td>
              </tr>
            ))}
            {members.length === 0 && <tr><td colSpan={6} className="py-10 text-center text-[#616161]">No customers match this segment</td></tr>}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export function generateStaticParams() { return segments.map((s) => ({ id: s.id })); }
export const instant = false;
