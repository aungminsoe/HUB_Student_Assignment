import Link from "next/link";
import { Icon } from "@/components/Icon";
import { collections } from "@/lib/data";

export default function CollectionsPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 pb-12 pt-5">
      <header className="mb-3 flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-[18px] font-bold text-[#303030]"><Icon name="tag" size={17} /> Collections</h1>
        <button className="h-8 rounded-lg bg-[#303030] px-3 text-[13px] font-semibold text-white">Add collection</button>
      </header>
      <div className="rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3 border-b border-[#ebebeb] px-4 py-[10px] text-[13px] text-[#616161]">
          <span className="font-medium text-[#303030]">All ⇅</span><Icon name="search" size={14} /> Search and filter
          <span className="ml-auto"><Icon name="columns" size={15} /></span>
        </div>
        <table className="w-full text-left text-[13px]">
          <thead><tr className="bg-[#f7f7f7] text-[12px] font-medium text-[#616161]"><th className="w-10 px-4 py-2"><input type="checkbox" className="h-4 w-4" /></th><th className="w-14" /><th>Title</th><th className="text-right">Products</th><th className="pl-8">Product conditions</th></tr></thead>
          <tbody>
            {collections.map((c) => (
              <tr key={c.id} className="border-t border-[#ebebeb] hover:bg-[#fafafa]">
                <td className="px-4"><input type="checkbox" className="h-4 w-4" /></td>
                <td className="py-3">{c.img ? /* eslint-disable-next-line @next/next/no-img-element */ <img src={c.img} alt="" className="h-10 w-10 rounded-lg border border-[#ebebeb] object-cover" /> : <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#ebebeb] text-[#8a8a8a]"><Icon name="image" size={16} /></span>}</td>
                <td><Link href={`/collections/${c.id}`} className="font-medium text-[#303030] hover:underline">{c.title}</Link></td>
                <td className="text-right text-[#303030]">{c.products.length}</td>
                <td className="pl-8 text-[#616161]">{c.conditions.map((x) => <div key={x}>{x}</div>)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-5 text-center text-[13px] font-medium text-[#303030]">Learn more about collections</p>
    </div>
  );
}
