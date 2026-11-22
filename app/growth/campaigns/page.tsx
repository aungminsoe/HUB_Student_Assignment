import { Icon } from "@/components/Icon";
import { campaigns } from "@/lib/data";

const chip: Record<string, string> = { Active: "bg-[#cdfee1] text-[#0c5132]", Scheduled: "bg-[#d3e8ff] text-[#00406b]", Ended: "bg-[#e3e3e3] text-[#303030]" };
const money = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Campaigns() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 pb-12 pt-5">
      <h1 className="mb-3 flex items-center gap-2 text-[18px] font-bold text-[#303030]"><Icon name="megaphone" size={17} /> Campaigns</h1>
      <section className="overflow-hidden rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between border-b border-[#ebebeb] px-3 py-2"><span className="rounded-lg bg-[#f1f1f1] px-3 py-[5px] text-[13px] font-medium">All</span><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f1f1f1]"><Icon name="updown" size={13} /></span></div>
        <div className="flex items-center justify-between px-[84px] py-8">
          <div className="max-w-[560px]">
            <h2 className="text-[15px] font-semibold text-[#303030]">Centralize your campaign tracking</h2>
            <p className="mt-1 text-[13px] leading-5 text-[#303030]">Create campaigns to evaluate how marketing initiatives drive business goals. Capture online and offline touchpoints, add campaign activities from multiple marketing channels, and monitor results.</p>
            <div className="mt-4 flex gap-2"><button className="h-8 rounded-lg bg-[#303030] px-3 text-[13px] font-semibold text-white">Create campaign</button><button className="h-8 rounded-lg border border-[#c9c9c9] px-3 text-[13px] font-medium">Learn more</button></div>
          </div>
          <div className="relative h-[110px] w-[150px]"><div className="absolute bottom-0 right-0 flex h-[84px] w-[120px] items-center justify-center rounded-lg bg-[#2563eb] shadow-lg"><svg width="52" height="52" viewBox="0 0 52 52"><circle cx="26" cy="26" r="18" fill="none" stroke="#fbbf24" strokeWidth="8" strokeDasharray="60 120" /><circle cx="26" cy="26" r="18" fill="none" stroke="#1e3a8a" strokeWidth="8" strokeDasharray="70 120" strokeDashoffset="-60" /></svg></div></div>
        </div>
        <table className="w-full border-t border-[#ebebeb] text-left text-[13px]">
          <thead><tr className="bg-[#f7f7f7] text-[12px] font-medium text-[#616161]"><th className="w-10 px-4 py-2"><input type="checkbox" className="h-4 w-4" /></th><th>Campaign</th><th>Channel</th><th>Status</th><th className="text-right">Sessions</th><th className="text-right">Orders</th><th className="text-right">Sales</th><th className="px-4 text-right">Spend</th></tr></thead>
          <tbody>{campaigns.map((c) => (
            <tr key={c.id} className="border-t border-[#ebebeb] hover:bg-[#fafafa]">
              <td className="px-4"><input type="checkbox" className="h-4 w-4" /></td><td className="py-[12px] font-medium">{c.name}</td><td className="text-[#616161]">{c.channel}</td>
              <td><span className={`rounded-full px-2 py-[2px] text-[12px] ${chip[c.status]}`}>{c.status}</span></td>
              <td className="text-right">{c.sessions.toLocaleString()}</td><td className="text-right">{c.orders}</td><td className="text-right">{money(c.sales)}</td><td className="px-4 text-right">{c.spend ? money(c.spend) : "—"}</td>
            </tr>))}</tbody>
        </table>
        <div className="bg-[#f7f7f7] px-[84px] py-6"><h2 className="text-[14px] font-semibold">Generate traffic with marketing apps</h2><p className="mt-1 max-w-[520px] text-[13px] text-[#303030]">Grow your audience on social platforms, capture new leads with newsletter sign-ups, increase conversion with chat, and more.</p><button className="mt-3 h-8 rounded-lg border border-[#c9c9c9] bg-white px-3 text-[13px] font-medium">Browse marketing apps</button></div>
      </section>
    </div>
  );
}
