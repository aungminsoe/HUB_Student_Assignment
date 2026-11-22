import Link from "next/link";
import { Icon } from "@/components/Icon";
import { segments } from "@/lib/data";

export default function SegmentsPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 pb-12 pt-5">
      <header className="mb-3 flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-[18px] font-bold text-[#303030]"><Icon name="user" size={17} /> Segments</h1>
        <button className="h-[30px] rounded-lg bg-[#303030] px-3 text-[13px] font-semibold text-white">Create segment</button>
      </header>
      <div className="rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-2 border-b border-[#ebebeb] px-4 py-3 text-[13px] text-[#616161]"><Icon name="search" size={14} /> Search segments</div>
        <table className="w-full text-left text-[13px]">
          <thead><tr className="bg-[#f7f7f7] text-[12px] font-medium text-[#616161]"><th className="w-10 px-4 py-2"><input type="checkbox" className="h-4 w-4" /></th><th>Name</th><th className="text-right">% of customers</th><th className="pl-6">Last activity ⇅</th><th>Created by</th><th className="w-10" /></tr></thead>
          <tbody>
            {segments.map((s) => (
              <tr key={s.id} className="border-t border-[#ebebeb] hover:bg-[#fafafa]">
                <td className="px-4"><input type="checkbox" className="h-4 w-4" /></td>
                <td className="py-[14px]"><Link href={`/segments/${s.id}`} className="text-[#303030] hover:underline">{s.name}</Link></td>
                <td className="text-right text-[#303030]">{s.pct}%</td>
                <td className="pl-6 text-[#616161]">Created on {new Date(s.created + "T00:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</td>
                <td><span className="flex items-center gap-2 text-[#303030]"><span className="flex h-5 w-5 items-center justify-center rounded bg-[#2f9e5f] text-[10px] font-bold text-white">H</span>HUBshop</span></td>
                <td><Icon name="more" size={16} className="text-[#616161]" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-5 text-center text-[13px] font-medium">Learn more about segments</p>
    </div>
  );
}
