import Link from "next/link";
import { Icon } from "@/components/Icon";
import { getCustomer, customers, orders, getProduct } from "@/lib/data";

export default async function CustomerDetail(props: PageProps<"/customers/[id]">) {
  const { id } = await props.params;
  const c = getCustomer(id);
  const theirs = orders.filter((o) => o.customerId === c.id).slice(0, 5);
  const card = "rounded-xl bg-white p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]";
  return (
    <div className="mx-auto max-w-[1000px] px-5 pb-12 pt-5">
      <header className="mb-4 flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-[18px] font-bold text-[#303030]"><Link href="/customers"><Icon name="user" size={17} /></Link><Icon name="chevron" size={12} className="text-[#8a8a8a]" /> {c.name}</h1>
        <div className="flex gap-2"><button className="h-8 rounded-lg bg-[#e3e3e3] px-3 text-[13px] font-medium">Create order</button><button className="h-8 rounded-lg bg-[#e3e3e3] px-3 text-[13px] font-medium">More actions ▾</button></div>
      </header>
      <div className="grid grid-cols-[1fr_300px] gap-4">
        <div className="space-y-4">
          <section className={`${card} grid grid-cols-4 divide-x divide-[#ebebeb]`}>
            {[["Amount spent", "$" + c.spent.toFixed(2)], ["Orders", String(c.orders)], ["Customer since", new Date(c.joined).toLocaleDateString("en-US", { month: "short", year: "numeric" })], ["RFM group", c.orders > 5 ? "Loyal" : "New"]].map(([l, v]) => <div key={l} className="px-3 first:pl-0"><p className="text-[12px] text-[#616161]">{l}</p><p className="mt-1 text-[14px] font-semibold text-[#303030]">{v}</p></div>)}
          </section>
          <section className={card}>
            <div className="flex items-center justify-between"><h2 className="text-[14px] font-semibold">Last order placed</h2><span className="text-[13px] text-[#005bd3]">View all orders</span></div>
            {theirs.length === 0 && <p className="mt-3 text-[13px] text-[#616161]">This customer hasn&apos;t placed any orders yet.</p>}
            {theirs.map((o) => (
              <Link key={o.id} href={`/orders/${o.id}`} className="mt-3 block rounded-lg border border-[#ebebeb] p-3">
                <div className="flex items-center gap-2 text-[13px]"><span className="font-semibold text-[#303030]">#{o.number}</span><span className="rounded-full bg-[#e3e3e3] px-2 py-[1px] text-[12px] capitalize">{o.payment}</span><span className="rounded-full bg-[#ffeb78] px-2 py-[1px] text-[12px] capitalize text-[#4f4700]">{o.fulfillment}</span><span className="ml-auto text-[#616161]">{o.date}</span><span className="font-medium">${o.total.toFixed(2)}</span></div>
                <div className="mt-2 flex gap-2">{o.items.map((it) => { const p = getProduct(it.productId); /* eslint-disable-next-line @next/next/no-img-element */ return <img key={p.id} src={p.img} alt="" title={p.name} className="h-9 w-9 rounded-md border border-[#ebebeb] object-cover" />; })}</div>
              </Link>
            ))}
          </section>
          <section className={card}>
            <h2 className="text-[14px] font-semibold">Timeline</h2>
            <div className="mt-3 flex items-center gap-2 rounded-lg border border-[#c9c9c9] p-2 text-[13px] text-[#8a8a8a]">Leave a comment…</div>
            {[["Customer was created on Online Store", c.joined], ["Subscribed to email marketing", c.joined]].map(([t, d]) => <div key={t} className="mt-3 flex gap-3 text-[13px]"><span className="mt-[6px] h-2 w-2 rounded-full bg-[#8a8a8a]" /><span className="flex-1">{t}</span><span className="text-[#616161]">{d}</span></div>)}
          </section>
        </div>
        <div className="space-y-4">
          <section className={card}>
            <div className="flex justify-between"><h2 className="text-[14px] font-semibold">Customer</h2><Icon name="more" size={15} /></div>
            <p className="mt-2 text-[13px] text-[#005bd3]">{c.email}</p><p className="text-[13px] text-[#616161]">{c.phone}</p>
            <span className={`mt-2 inline-block rounded-full px-[10px] py-[2px] text-[12px] ${c.subscribed ? "bg-[#cdfee1] text-[#0c5132]" : "bg-[#e3e3e3]"}`}>{c.subscribed ? "Email subscribed" : "Email not subscribed"}</span>
            <h3 className="mt-4 text-[13px] font-semibold">Default address</h3><p className="text-[13px] text-[#616161]">{c.name}<br />{c.city}<br />{c.country}</p>
          </section>
          <section className={card}><h2 className="text-[14px] font-semibold">Tags</h2><div className="mt-2 flex flex-wrap gap-1 rounded-lg border border-[#8a8a8a] p-[6px] min-h-8">{c.tags.map((t) => <span key={t} className="rounded-md bg-[#e3e3e3] px-2 py-[2px] text-[12px]">{t}</span>)}</div></section>
          <section className={card}><h2 className="text-[14px] font-semibold">Notes</h2><p className="mt-2 text-[13px] text-[#616161]">No notes about this customer</p></section>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() { return customers.map((c) => ({ id: c.id })); }
export const instant = false;
