import Link from "next/link";
import { Icon } from "@/components/Icon";
import { getCollection, collections, getProduct } from "@/lib/data";

export default async function CollectionDetail(props: PageProps<"/collections/[id]">) {
  const { id } = await props.params;
  const c = getCollection(id);
  const card = "rounded-xl bg-white p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]";
  return (
    <div className="mx-auto max-w-[1000px] px-5 pb-12 pt-5">
      <header className="mb-3 flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-[18px] font-bold text-[#303030]"><Link href="/collections"><Icon name="tag" size={17} /></Link><Icon name="chevron" size={12} className="text-[#8a8a8a]" /> {c.title}</h1>
        <div className="flex gap-2">{["Duplicate", "View"].map((l) => <button key={l} className="h-8 rounded-lg bg-[#e3e3e3] px-3 text-[13px] font-medium">{l}</button>)}<button className="h-8 rounded-lg bg-[#e3e3e3] px-3 text-[13px] font-medium">More actions ▾</button></div>
      </header>
      <div className="grid grid-cols-[1fr_300px] gap-4">
        <div className="space-y-4">
          <section className={card}>
            <label className="text-[13px] font-medium">Title</label>
            <input defaultValue={c.title} className="mt-1 h-8 w-full rounded-lg border border-[#8a8a8a] px-[10px] text-[13px]" />
            <label className="mt-4 block text-[13px] font-medium">Description</label>
            <textarea rows={5} defaultValue={`Discover our most-loved ${c.title.toLowerCase()}, trusted by home cooks and professional chefs alike. Premium-quality products carefully selected for rich aroma, bold flavor, and exceptional freshness.`} className="mt-1 w-full rounded-lg border border-[#8a8a8a] p-3 text-[13px] leading-5" />
          </section>
          <section className={card}>
            <h2 className="text-[13px] font-semibold">Conditions</h2>
            {c.conditions.length ? (<>
              <p className="mt-3 flex items-center gap-4 text-[13px]">Products must match: <label className="flex items-center gap-1"><input type="radio" defaultChecked name="m" /> all conditions</label><label className="flex items-center gap-1"><input type="radio" name="m" /> any condition</label></p>
              {c.conditions.map((x) => <div key={x} className="mt-3 grid grid-cols-[1fr_1fr_1fr_32px] gap-2 text-[13px]">{["Tag", "is equal to", x.split("equal to ")[1]].map((v) => <div key={v} className="flex h-8 items-center rounded-lg border border-[#8a8a8a] px-[10px]">{v}</div>)}<span className="flex h-8 items-center justify-center rounded-lg border border-[#8a8a8a]"><Icon name="trash" size={14} /></span></div>)}
              <button className="mt-3 flex h-8 items-center gap-1 rounded-lg border border-[#c9c9c9] px-3 text-[13px] font-medium"><Icon name="plus" size={13} /> Add another condition</button>
            </>) : <p className="mt-2 text-[13px] text-[#616161]">Manual collection. Add products yourself.</p>}
          </section>
          <section className="overflow-hidden rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]">
            <h2 className="px-4 pb-2 pt-4 text-[13px] font-semibold">Products</h2>
            <div className="px-4 pb-3"><div className="flex h-8 items-center justify-between rounded-lg border border-[#8a8a8a] px-[10px] text-[13px]">Sort: Most relevant <Icon name="updown" size={13} /></div></div>
            {c.products.map((pid, i) => { const p = getProduct(pid); return (
              <Link key={pid} href={`/products/${pid}`} className="flex items-center gap-3 border-t border-[#ebebeb] px-4 py-[10px] text-[13px]">
                <span className="w-4 text-[#616161]">{i + 1}.</span>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={p.img} alt="" className="h-9 w-9 rounded-md border border-[#ebebeb] object-cover" />
                <span className="flex-1 text-[#303030]">{p.name}</span><span className="rounded-full bg-[#cdfee1] px-[10px] py-[2px] text-[12px] font-medium text-[#0c5132]">Active</span>
              </Link>); })}
          </section>
        </div>
        <div className="space-y-4">
          <section className={card}>
            <div className="flex justify-between"><h2 className="text-[13px] font-semibold">Publishing</h2><span className="text-[13px] text-[#005bd3]">Manage</span></div>
            <p className="mt-3 text-[13px] font-medium">Sales channels</p>
            {["Online Store", "Point of Sale and Shop"].map((s) => <p key={s} className="mt-2 flex items-center gap-2 text-[13px]"><span className="h-2 w-2 rounded-full bg-[#2f9e5f]" />{s}</p>)}
          </section>
          <section className={card}>
            <div className="flex justify-between"><h2 className="text-[13px] font-semibold">Image</h2><span className="text-[13px] text-[#005bd3]">Edit ▾</span></div>
            {c.img ? /* eslint-disable-next-line @next/next/no-img-element */ <img src={c.img} alt="" className="mt-3 aspect-square w-full rounded-lg object-cover" /> : <div className="mt-3 flex aspect-square items-center justify-center rounded-lg border border-dashed border-[#8a8a8a] text-[#616161]">Add image</div>}
          </section>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() { return collections.map((c) => ({ id: c.id })); }
export const instant = false;
