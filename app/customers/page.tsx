import Link from "next/link";
import { Icon } from "@/components/Icon";
import { customers } from "@/lib/data";

export default function CustomersPage() {
  const total = customers.reduce((s, c) => s + c.spent, 0);
  return (
    <div className="mx-auto max-w-[1180px] px-6 pb-12 pt-5">
      <header className="mb-4 flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-[19px] font-bold text-[#1a1a1a]"><Icon name="user" size={18} /> Customers</h1>
        <div className="flex gap-2"><button className="h-9 rounded-[10px] bg-[#e3e3e3] px-4 text-[13px] font-medium">Export</button><button className="h-9 rounded-[10px] bg-[#e3e3e3] px-4 text-[13px] font-medium">Import customers</button><button className="h-9 rounded-[10px] bg-[#1a1a1a] px-4 text-[13px] font-semibold text-white">Add customer</button></div>
      </header>

      <div className="mb-4 grid grid-cols-4 gap-0 rounded-[14px] bg-white py-4 shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
        {[["Total customers", String(customers.length), "▲ 12%"], ["New customers", "6", "▲ 20%"], ["Returning customer rate", "62%", "▲ 4%"], ["Average order value", "$" + (total / customers.reduce((s, c) => s + c.orders, 0)).toFixed(2), "▼ 2%"]].map(([l, v, d], i) => (
          <div key={l} className={`px-5 ${i ? "border-l border-[#e5e5e5]" : ""}`}><p className="text-[12px] text-[#6b6b6b]">{l}</p><p className="mt-1 text-[20px] font-semibold text-[#1a1a1a]">{v} <span className={`text-[12px] font-medium ${d.startsWith("▲") ? "text-[#047b5d]" : "text-[#c5280c]"}`}>{d}</span></p></div>
        ))}
      </div>

      <div className="rounded-[14px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
        <div className="flex items-center gap-2 border-b border-[#e5e5e5] px-4 py-3">
          <div className="flex h-9 flex-1 items-center gap-2 rounded-[10px] bg-[#f1f1f1] px-3 text-[13px] text-[#6b6b6b]"><Icon name="search" size={14} /> Search customers</div>
          <button className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#f1f1f1]"><Icon name="columns" size={15} /></button>
        </div>
        <table className="w-full text-left text-[14px]">
          <thead><tr className="bg-[#fafafa] text-[12px] font-medium text-[#6b6b6b]"><th className="w-10 px-4 py-[10px]"><input type="checkbox" className="h-[18px] w-[18px]" /></th><th>Customer name</th><th>Email subscription</th><th>Location</th><th className="text-right">Orders</th><th className="px-5 text-right">Amount spent</th></tr></thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-t border-[#e5e5e5] hover:bg-[#fafafa]">
                <td className="px-4"><input type="checkbox" className="h-[18px] w-[18px]" /></td>
                <td className="py-[13px]"><Link href={`/customers/${c.id}`} className="font-medium text-[#1a1a1a] hover:underline">{c.name}</Link>{c.tags.includes("VIP") && <span className="ml-2 rounded-md bg-[#e0f0ff] px-[6px] py-[1px] text-[11px] font-medium text-[#0b4a7a]">VIP</span>}</td>
                <td><span className={`rounded-full px-[10px] py-[2px] text-[12px] ${c.subscribed ? "bg-[#b4fed2] text-[#014b40]" : "bg-[#ececec] text-[#5c5c5c]"}`}>{c.subscribed ? "Subscribed" : "Not subscribed"}</span></td>
                <td className="text-[#303030]">{c.city}, {c.country}</td>
                <td className="text-right text-[#303030]">{c.orders} {c.orders === 1 ? "order" : "orders"}</td>
                <td className="px-5 text-right text-[#303030]">${c.spent.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
