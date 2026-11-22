import Link from "next/link";
import { Icon } from "@/components/Icon";
import { orders, getCustomer } from "@/lib/data";

const payBadge: Record<string, string> = {
  paid: "bg-[#e3e3e3] text-[#303030]", pending: "bg-[#ffd6a4] text-[#5e3a00]",
  refunded: "bg-[#e3e3e3] text-[#303030]", authorized: "bg-[#ffd6a4] text-[#5e3a00]",
};
const fulBadge: Record<string, string> = { fulfilled: "bg-[#e3e3e3] text-[#303030]", unfulfilled: "bg-[#ffeb78] text-[#4f4700]", partial: "bg-[#ffeb78] text-[#4f4700]" };
const fmtDate = (d: string) => new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
const cap = (s: string) => s[0].toUpperCase() + s.slice(1);

export default function OrdersPage() {
  const gross = orders.reduce((s, o) => s + o.total, 0);
  return (
    <div className="mx-auto max-w-[1280px] px-5 pb-12 pt-5">
      <header className="mb-3 flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-[18px] font-bold text-[#303030]"><Icon name="orders" size={17} /> Orders</h1>
        <div className="flex gap-2"><button className="h-8 rounded-lg bg-[#e3e3e3] px-3 text-[13px] font-medium">Export</button><button className="h-8 rounded-lg bg-[#e3e3e3] px-3 text-[13px] font-medium">More actions ▾</button><button className="h-8 rounded-lg bg-[#303030] px-3 text-[13px] font-semibold text-white">Create order</button></div>
      </header>

      <div className="mb-3 grid grid-cols-6 divide-x divide-[#ebebeb] rounded-xl bg-white py-3 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]">
        {[["Orders", String(orders.length)], ["Items ordered", String(orders.reduce((s, o) => s + o.items.reduce((a, i) => a + i.qty, 0), 0))], ["Returns", "2"], ["Orders fulfilled", String(orders.filter((o) => o.fulfillment === "fulfilled").length)], ["Orders delivered", "17"], ["Gross sales", "$" + gross.toFixed(2)]].map(([l, v]) => (
          <div key={l} className="px-4"><p className="text-[12px] text-[#616161] underline decoration-dotted underline-offset-4">{l}</p><p className="mt-1 text-[16px] font-semibold text-[#303030]">{v}</p></div>
        ))}
      </div>

      <div className="rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-1 border-b border-[#ebebeb] px-3 py-2">
          {["All", "Unfulfilled", "Unpaid", "Open", "Closed"].map((t, i) => <span key={t} className={`rounded-lg px-3 py-[5px] text-[13px] font-medium ${i === 0 ? "bg-[#f1f1f1] text-[#303030]" : "text-[#616161]"}`}>{t}</span>)}
          <div className="ml-auto flex gap-1 text-[#616161]"><span className="flex h-7 items-center gap-1 rounded-lg bg-[#f1f1f1] px-2"><Icon name="search" size={13} /><Icon name="filter" size={13} /></span><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f1f1f1]"><Icon name="updown" size={13} /></span></div>
        </div>
        <table className="w-full text-left text-[13px]">
          <thead><tr className="bg-[#f7f7f7] text-[12px] font-medium text-[#616161]">
            <th className="w-10 px-4 py-2"><input type="checkbox" className="h-4 w-4" /></th><th>Order</th><th>Date</th><th>Customer</th><th>Channel</th><th className="text-right">Total</th><th className="pl-4">Payment status</th><th>Fulfillment status</th><th className="text-right">Items</th><th className="pl-4">Delivery method</th><th>Tags</th>
          </tr></thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-[#ebebeb] hover:bg-[#fafafa]">
                <td className="px-4"><input type="checkbox" className="h-4 w-4" /></td>
                <td className="py-[11px]"><Link href={`/orders/${o.id}`} className="font-semibold text-[#303030] hover:underline">#{o.number}</Link></td>
                <td className="text-[#616161]">{fmtDate(o.date)}</td>
                <td className="text-[#303030]">{getCustomer(o.customerId).name}</td>
                <td className="text-[#616161]">{o.channel}</td>
                <td className="text-right text-[#303030]">${o.total.toFixed(2)}</td>
                <td className="pl-4"><span className={`inline-flex items-center gap-1 rounded-full px-2 py-[2px] text-[12px] ${payBadge[o.payment]}`}><i className={`inline-block h-[7px] w-[7px] rounded-full ${o.payment === "paid" ? "bg-[#303030]" : "border border-[#5e3a00]"}`} />{cap(o.payment)}</span></td>
                <td><span className={`inline-flex items-center gap-1 rounded-full px-2 py-[2px] text-[12px] ${fulBadge[o.fulfillment]}`}><i className={`inline-block h-[7px] w-[7px] rounded-full ${o.fulfillment === "fulfilled" ? "bg-[#303030]" : "border border-[#4f4700]"}`} />{cap(o.fulfillment)}</span></td>
                <td className="text-right text-[#616161]">{o.items.reduce((a, i) => a + i.qty, 0)} items</td>
                <td className="pl-4 text-[#616161]">{o.delivery}</td>
                <td>{o.tags.map((t) => <span key={t} className="rounded-md bg-[#e3e3e3] px-2 py-[1px] text-[12px]">{t}</span>)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center gap-2 border-t border-[#ebebeb] py-3 text-[#616161]"><span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#d4d4d4]"><Icon name="back" size={13} /></span><span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#d4d4d4]"><Icon name="chevron" size={13} /></span></div>
      </div>
    </div>
  );
}
