"use client";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "./Icon";
import type { Product } from "@/lib/data";

const card = "rounded-xl bg-white p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]";
const input = "h-8 w-full rounded-lg border border-[#8a8a8a] bg-white px-[10px] text-[13px] text-[#303030] outline-none focus:border-[#005bd3] focus:shadow-[0_0_0_2px_#005bd3]";

export function ProductForm({ product }: { product?: Product }) {
  const isNew = !product;
  const [title, setTitle] = useState(product?.name ?? "");
  const [price, setPrice] = useState(product ? product.price.toFixed(2) : "");
  const [track, setTrack] = useState(true);
  const [physical, setPhysical] = useState(true);
  const [dirty, setDirty] = useState(isNew);
  const [saved, setSaved] = useState(false);
  const touch = () => { setDirty(true); setSaved(false); };

  return (
    <div className="pb-12">
      {dirty && (
        <div className="sticky top-0 z-30 flex items-center justify-center bg-[#303030] py-2 text-[13px] text-white">
          <Icon name="info" size={15} /> <span className="ml-2 mr-10 font-medium">Unsaved {isNew ? "product" : "changes"}</span>
          <button onClick={() => setDirty(false)} className="mr-2 h-7 rounded-lg bg-[#4a4a4a] px-3 font-medium">Discard</button>
          <button onClick={() => { setDirty(false); setSaved(true); }} className="h-7 rounded-lg bg-white px-3 font-semibold text-[#303030]">Save</button>
        </div>
      )}
      <div className="mx-auto max-w-[1040px] px-4 pt-4">
        <header className="mb-3 flex items-center justify-between">
          <h1 className="flex items-center gap-2 text-[18px] font-bold text-[#303030]">
            <Link href="/products" className="text-[#616161]"><Icon name="tag" size={17} /></Link><Icon name="chevron" size={13} className="text-[#8a8a8a]" />
            {isNew ? "Add product" : (title.length > 48 ? title.slice(0, 48) + "…" : title)}
            {saved && <span className="ml-2 rounded-full bg-[#cdfee1] px-2 py-[1px] text-[11px] font-medium text-[#0c5132]">Saved</span>}
          </h1>
          {!isNew && <div className="flex gap-2">{["Duplicate", "View"].map((l) => <button key={l} className="h-8 rounded-lg bg-[#e3e3e3] px-3 text-[13px] font-medium text-[#303030]">{l}</button>)}<button className="flex h-8 items-center gap-1 rounded-lg bg-[#e3e3e3] px-3 text-[13px] font-medium text-[#303030]">More actions <Icon name="chevdown" size={13} /></button></div>}
        </header>

        <div className="grid grid-cols-[1fr_300px] gap-4">
          <div className="space-y-4">
            <section className={card}>
              <label className="text-[13px] font-medium text-[#303030]">Title</label>
              <input value={title} onChange={(e) => { setTitle(e.target.value); touch(); }} placeholder="Short sleeve t-shirt" className={`${input} mt-1`} />
              <label className="mt-4 block text-[13px] font-medium text-[#303030]">Description</label>
              <div className="mt-1 overflow-hidden rounded-lg border border-[#8a8a8a]">
                <div className="flex items-center gap-3 border-b border-[#ebebeb] bg-[#f7f7f7] px-3 py-[6px] text-[#303030]">
                  <Icon name="sparkle" size={14} /><span className="text-[12px]">Paragraph ▾</span>
                  <Icon name="bold" size={14} /><Icon name="italic" size={14} /><Icon name="link" size={14} /><Icon name="image" size={14} />
                  <span className="ml-auto"><Icon name="code" size={14} /></span>
                </div>
                <textarea defaultValue={product?.desc} onChange={touch} rows={6} className="w-full resize-none bg-white p-3 text-[13px] leading-[20px] text-[#303030] outline-none" placeholder="Describe your product…" />
              </div>
              <label className="mt-4 block text-[13px] font-medium text-[#303030]">Media</label>
              <div className="mt-1 flex gap-3">
                {product && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={product.img} alt="" className="h-[112px] w-[112px] rounded-lg border border-[#d4d4d4] object-cover" />
                )}
                <div className="flex h-[112px] w-[112px] items-center justify-center rounded-lg border border-dashed border-[#8a8a8a] text-[#616161]"><Icon name="plus" size={18} /></div>
              </div>
              <div className="mt-4 flex items-center justify-between"><label className="text-[13px] font-medium text-[#303030]">Category</label><span className="text-[12px] text-[#616161]">{product ? "1 autofilled" : ""}</span></div>
              <div className="mt-1 flex h-8 items-center justify-between rounded-lg border border-[#8a8a8a] px-[10px] text-[13px] text-[#303030]">
                <span><span className="text-[#5b3df5]">Herbs &amp; Spices</span> in Seasonings &amp; Spices</span><Icon name="updown" size={13} />
              </div>
              <p className="mt-1 text-[12px] text-[#616161]">Determines tax rates and adds metafields to improve search, filters, and cross-channel sales</p>
            </section>

            <section className={card}>
              <label className="text-[13px] font-medium text-[#303030]">Price</label>
              <div className="relative mt-1 w-[220px]"><span className="absolute left-[10px] top-[7px] text-[13px] text-[#616161]">$</span><input value={price} onChange={(e) => { setPrice(e.target.value); touch(); }} placeholder="0.00" className={`${input} pl-6`} /></div>
              <div className="mt-3 flex flex-wrap gap-2 border-t border-[#ebebeb] pt-3">
                {["Compare-at", "Unit price", "Charge tax  Yes", "Cost per item"].map((c) => <span key={c} className="rounded-lg bg-[#f1f1f1] px-3 py-[5px] text-[12px] font-medium text-[#616161]">{c}</span>)}
              </div>
            </section>

            <section className={card}>
              <div className="flex items-center justify-between"><h2 className="text-[13px] font-semibold text-[#303030]">Inventory</h2>
                <label className="flex items-center gap-2 text-[12px] text-[#616161]">Inventory tracked
                  <button type="button" onClick={() => setTrack(!track)} className={`h-5 w-9 rounded-full p-[2px] ${track ? "bg-[#303030]" : "bg-[#b5b5b5]"}`}><span className={`block h-4 w-4 rounded-full bg-white transition ${track ? "translate-x-4" : ""}`} /></button></label>
              </div>
              <div className="mt-3 overflow-hidden rounded-lg border border-[#ebebeb] text-[13px]">
                <div className="flex justify-between bg-[#f7f7f7] px-3 py-2 text-[12px] text-[#616161]"><span>Quantity</span><span>Quantity</span></div>
                <div className="flex items-center justify-between px-3 py-2"><span>Shop location</span><input defaultValue={product?.stock ?? 0} onChange={touch} className="h-8 w-[110px] rounded-lg border border-[#8a8a8a] px-2 text-[13px]" /></div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div><label className="text-[12px] font-medium text-[#303030]">SKU (Stock Keeping Unit)</label><input defaultValue={product?.sku} onChange={touch} className={`${input} mt-1`} /></div>
                <div><label className="text-[12px] font-medium text-[#303030]">Barcode (ISBN, UPC, GTIN, etc.)</label><input onChange={touch} className={`${input} mt-1`} /></div>
              </div>
              <label className="mt-3 flex items-center gap-2 text-[13px] text-[#303030]"><input type="checkbox" className="h-4 w-4" /> Continue selling when out of stock</label>
            </section>

            <section className={card}>
              <div className="flex items-center justify-between"><h2 className="text-[13px] font-semibold text-[#303030]">Shipping</h2>
                <label className="flex items-center gap-2 text-[12px] text-[#616161]">Physical product
                  <button type="button" onClick={() => setPhysical(!physical)} className={`h-5 w-9 rounded-full p-[2px] ${physical ? "bg-[#303030]" : "bg-[#b5b5b5]"}`}><span className={`block h-4 w-4 rounded-full bg-white transition ${physical ? "translate-x-4" : ""}`} /></button></label>
              </div>
              <div className="mt-3 grid grid-cols-[1fr_140px] gap-3">
                <div><label className="text-[12px] font-medium text-[#303030]">Package</label><div className="mt-1 flex h-8 items-center rounded-lg border border-[#8a8a8a] px-[10px] text-[12px] text-[#303030]">Store default • Sample box – 8.6 × 5.4 × 1.6 in</div></div>
                <div><label className="text-[12px] font-medium text-[#303030]">Product weight</label><div className="mt-1 flex gap-1"><input defaultValue="0.0" className="h-8 w-[80px] rounded-lg border border-[#8a8a8a] px-2 text-[13px]" /><span className="flex h-8 w-[52px] items-center justify-center rounded-lg border border-[#8a8a8a] text-[13px]">lb</span></div></div>
              </div>
            </section>

            <section className={card}>
              <h2 className="text-[13px] font-semibold text-[#303030]">Variants</h2>
              <p className="mt-3 flex items-center gap-2 text-[13px] text-[#303030]"><span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#303030]"><Icon name="plus" size={10} stroke={2.5} /></span> Add options like size or color</p>
            </section>
          </div>

          <div className="space-y-4">
            <section className={card}>
              <label className="text-[13px] font-medium text-[#303030]">Status</label>
              <div className="relative mt-1"><select defaultValue={product?.status ?? "active"} onChange={touch} className={`${input} appearance-none`}><option value="active">Active</option><option value="draft">Draft</option><option value="archived">Archived</option></select><Icon name="updown" size={13} className="pointer-events-none absolute right-2 top-[9px] text-[#616161]" /></div>
            </section>
            <section className={card}>
              <div className="flex items-center justify-between"><h2 className="text-[13px] font-semibold text-[#303030]">Publishing</h2><Icon name="filter" size={14} className="text-[#616161]" /></div>
              <p className="mt-3 flex items-center gap-2 text-[13px] text-[#303030]"><Icon name="store" size={14} /> All channels</p>
            </section>
            <section className={card}>
              <h2 className="flex items-center gap-1 text-[13px] font-semibold text-[#303030]">Product organization <Icon name="info" size={13} className="text-[#616161]" /></h2>
              {[["Type", product?.type ?? "Spices"], ["Vendor", product?.vendor ?? "None"]].map(([l, v]) => (
                <div key={l} className="mt-3"><label className="text-[12px] font-medium text-[#303030]">{l}</label><div className="mt-1 flex h-8 items-center justify-between rounded-lg border border-[#8a8a8a] px-[10px] text-[13px]">{v}<Icon name="updown" size={13} className="text-[#616161]" /></div></div>
              ))}
              <div className="mt-3"><label className="text-[12px] font-medium text-[#303030]">Collections</label><div className="mt-1 rounded-lg border border-[#8a8a8a] p-[6px]"><span className="inline-flex items-center gap-1 rounded-md bg-[#f1f1f1] px-2 py-[2px] text-[12px] text-[#616161]"><Icon name="plus" size={11} /> Add collections</span></div></div>
              <div className="mt-3"><label className="text-[12px] font-medium text-[#303030]">Tags</label><div className="mt-1 flex flex-wrap gap-1 rounded-lg border border-[#8a8a8a] p-[6px]">{product?.tags.map((t) => <span key={t} className="rounded-md bg-[#e3e3e3] px-2 py-[2px] text-[12px] text-[#303030]">{t}</span>)}<span className="inline-flex items-center gap-1 rounded-md bg-[#f1f1f1] px-2 py-[2px] text-[12px] text-[#616161]"><Icon name="plus" size={11} /> Add tags</span></div></div>
            </section>
            <section className={card}>
              <label className="text-[13px] font-medium text-[#303030]">Theme template</label>
              <div className="mt-1 flex h-8 items-center justify-between rounded-lg border border-[#8a8a8a] px-[10px] text-[13px]">Default product<Icon name="updown" size={13} className="text-[#616161]" /></div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
