import Link from "next/link";
import { Icon } from "@/components/Icon";
import { products } from "@/lib/data";

const badge: Record<string, string> = {
  active: "bg-[#cdfee1] text-[#0c5132]",
  draft: "bg-[#fff1c6] text-[#5e4200]",
  archived: "bg-[#e4e5e7] text-[#4a4a4a]",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 pb-12 pt-5">
      <header className="mb-3 flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-[18px] font-bold text-[#303030]"><Icon name="tag" size={18} /> Products</h1>
        <div className="flex gap-2">
          <button className="h-8 rounded-lg bg-[#e3e3e3] px-3 text-[13px] font-medium text-[#303030]">Export</button>
          <button className="h-8 rounded-lg bg-[#e3e3e3] px-3 text-[13px] font-medium text-[#303030]">Import</button>
          <Link href="/products/new" className="flex h-8 items-center rounded-lg bg-[#303030] px-3 text-[13px] font-semibold text-white">Add product</Link>
        </div>
      </header>

      <div className="rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-2 border-b border-[#ebebeb] px-3 py-2">
          {["All", "Active", "Draft", "Archived"].map((t, i) => (
            <span key={t} className={`rounded-lg px-3 py-[5px] text-[13px] font-medium ${i === 0 ? "bg-[#f1f1f1] text-[#303030]" : "text-[#616161]"}`}>{t}</span>
          ))}
          <span className="px-1 text-[#616161]"><Icon name="plus" size={15} /></span>
          <div className="ml-auto flex items-center gap-1 text-[#616161]">
            <span className="flex h-7 items-center gap-1 rounded-lg bg-[#f1f1f1] px-2 text-[12px]"><Icon name="search" size={13} /><Icon name="filter" size={13} /></span>
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f1f1f1]"><Icon name="updown" size={13} /></span>
          </div>
        </div>
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-[#f7f7f7] text-[12px] font-medium text-[#616161]">
              <th className="w-10 px-4 py-2"><input type="checkbox" className="h-4 w-4" /></th>
              <th className="w-16 py-2" /><th className="py-2">Product</th><th className="py-2">Status</th><th className="py-2">Inventory</th><th className="py-2">Category</th><th className="py-2">Channels</th><th className="px-4 py-2 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-[#ebebeb] hover:bg-[#fafafa]">
                <td className="px-4"><input type="checkbox" className="h-4 w-4" /></td>
                <td className="py-[9px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt="" className="h-10 w-10 rounded-lg border border-[#ebebeb] object-cover" />
                </td>
                <td className="max-w-[360px] pr-4"><Link href={`/products/${p.id}`} className="line-clamp-1 font-medium text-[#303030] hover:underline">{p.name}</Link></td>
                <td><span className={`rounded-full px-[10px] py-[2px] text-[12px] font-medium ${badge[p.status]}`}>{p.status[0].toUpperCase() + p.status.slice(1)}</span></td>
                <td className={p.stock === 0 ? "text-[#b42318]" : p.stock < 10 ? "text-[#b25e09]" : "text-[#616161]"}>{p.stock === 0 ? "0 in stock" : `${p.stock} in stock`}</td>
                <td className="text-[#616161]">{p.type}</td>
                <td className="text-[#616161]">{p.channels}</td>
                <td className="px-4 text-right text-[#303030]">${p.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-5 text-center text-[13px] font-medium text-[#303030]">Learn more about products</p>
    </div>
  );
}
