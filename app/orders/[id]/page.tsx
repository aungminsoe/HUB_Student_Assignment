import Link from "next/link";
import { Icon } from "@/components/Icon";
import { getOrder, getCustomer, getProduct, orders } from "@/lib/data";

export default async function OrderDetail(props: PageProps<"/orders/[id]">) {
  const { id } = await props.params;
  const o = getOrder(id);
  const c = getCustomer(o.customerId);
  const lines = o.items.map((it) => ({ ...it, p: getProduct(it.productId) }));
  const sub = lines.reduce((s, l) => s + l.p.price * l.qty, 0);
  const ship = o.total - sub;
  const card = "rounded-[14px] bg-white p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]";
  const d = new Date(o.date + "T10:24:00Z");
  return (
    <div className="mx-auto max-w-[1040px] px-5 pb-12 pt-5">
      <header className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/orders" className="text-[#616161]"><Icon name="orders" size={17} /></Link><Icon name="chevron" size={12} className="text-[#8a8a8a]" />
          <h1 className="text-[18px] font-bold text-[#303030]">#{o.number}</h1>
          <span className="rounded-full bg-[#e3e3e3] px-2 py-[2px] text-[12px] font-medium">{o.payment === "paid" ? "Paid" : o.payment[0].toUpperCase() + o.payment.slice(1)}</span>
          <span className="rounded-full bg-[#ffeb78] px-2 py-[2px] text-[12px] font-medium text-[#4f4700]">{o.fulfillment[0].toUpperCase() + o.fulfillment.slice(1)}</span>
        </div>
        <div className="flex gap-2">{["Refund", "Return", "Edit", "Print ▾", "More actions ▾"].map((l) => <button key={l} className="h-8 rounded-lg bg-[#e3e3e3] px-3 text-[13px] font-medium">{l}</button>)}</div>
      </header>
      <p className="-mt-2 mb-4 text-[13px] text-[#616161]">{d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })} at 10:24 am from {o.channel}</p>

      <div className="grid grid-cols-[1fr_300px] gap-4">
        <div className="space-y-4">
          <section className={card}>
            <div className="mb-3 flex items-center gap-2"><span className="rounded-full bg-[#ffeb78] px-2 py-[2px] text-[12px] font-medium text-[#4f4700]">● {o.fulfillment[0].toUpperCase() + o.fulfillment.slice(1)}</span><span className="text-[12px] text-[#616161]">{o.delivery}</span></div>
            {lines.map((l) => (
              <div key={l.p.id} className="flex items-center gap-3 border-t border-[#ebebeb] py-3 first:border-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}<img src={l.p.img} alt="" className="h-12 w-12 rounded-lg border border-[#ebebeb] object-cover" />
                <div className="flex-1"><Link href={`/products/${l.p.id}`} className="text-[13px] font-medium text-[#005bd3]">{l.p.name.split(" – ")[0]}</Link><p className="text-[12px] text-[#616161]">SKU: {l.p.sku}</p></div>
                <p className="text-[13px] text-[#616161]">${l.p.price.toFixed(2)} × {l.qty}</p><p className="w-[70px] text-right text-[13px] text-[#303030]">${(l.p.price * l.qty).toFixed(2)}</p>
              </div>
            ))}
            <div className="mt-2 flex justify-end border-t border-[#ebebeb] pt-3"><button className="h-8 rounded-lg bg-[#303030] px-3 text-[13px] font-semibold text-white">Fulfill item</button></div>
          </section>
          <section className={card}>
            <span className="rounded-full bg-[#e3e3e3] px-2 py-[2px] text-[12px] font-medium">● {o.payment[0].toUpperCase() + o.payment.slice(1)}</span>
            <div className="mt-3 space-y-2 border border-[#ebebeb] rounded-lg p-3 text-[13px]">
              <div className="flex justify-between"><span>Subtotal</span><span className="text-[#616161]">{lines.length} items</span><span>${sub.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span className="text-[#616161]">{o.delivery}</span><span>${ship.toFixed(2)}</span></div>
              <div className="flex justify-between font-semibold"><span>Total</span><span /><span>${o.total.toFixed(2)}</span></div>
              <div className="flex justify-between border-t border-[#ebebeb] pt-2"><span>Paid</span><span /><span>${o.payment === "paid" ? o.total.toFixed(2) : "0.00"}</span></div>
            </div>
          </section>
          <section className={card}>
            <h2 className="text-[14px] font-semibold">Timeline</h2>
            <div className="mt-3 flex items-center gap-2 rounded-lg border border-[#c9c9c9] p-2 text-[13px] text-[#8a8a8a]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3ad1c4] text-[10px] font-bold text-black">SS</span> Leave a comment…</div>
            {[["Order confirmation email was sent to " + c.name, "10:24 am"], ["A $" + o.total.toFixed(2) + " USD payment was processed", "10:24 am"], [c.name + " placed this order on Online Store", "10:23 am"]].map(([t, tm]) => <div key={t} className="mt-3 flex gap-3 text-[13px]"><span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-[#8a8a8a]" /><span className="flex-1 text-[#303030]">{t}</span><span className="text-[#616161]">{tm}</span></div>)}
          </section>
        </div>
        <div className="space-y-4">
          <section className={card}><div className="flex justify-between"><h2 className="text-[14px] font-semibold">Notes</h2><Icon name="more" size={15} /></div><p className="mt-2 text-[13px] text-[#616161]">No notes from customer</p></section>
          <section className={card}>
            <h2 className="text-[14px] font-semibold">Customer</h2>
            <Link href={`/customers/${c.id}`} className="mt-2 block text-[13px] text-[#005bd3]">{c.name}</Link><p className="text-[13px] text-[#616161]">{c.orders} orders</p>
            <h3 className="mt-3 text-[13px] font-semibold">Contact information</h3><p className="text-[13px] text-[#005bd3]">{c.email}</p><p className="text-[13px] text-[#616161]">{c.phone}</p>
            <h3 className="mt-3 text-[13px] font-semibold">Shipping address</h3><p className="text-[13px] text-[#616161]">{c.name}<br />{c.city}<br />{c.country}</p>
          </section>
          <section className={card}><h2 className="text-[14px] font-semibold">Tags</h2><div className="mt-2 flex h-8 items-center rounded-lg border border-[#8a8a8a] px-[10px] text-[13px] text-[#8a8a8a]">{o.tags[0] ?? "Add tags"}</div></section>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() { return orders.map((o) => ({ id: o.id })); }
export const instant = false;
