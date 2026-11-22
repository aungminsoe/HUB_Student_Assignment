"use client";
import { useState } from "react";
import { Icon } from "@/components/Icon";

const nav = [["store", "General"], ["user", "Plan"], ["bank", "Billing"], ["bell", "Notifications"], ["globe", "Markets"], ["tag", "Taxes and duties"], ["orders", "Shipping and delivery"], ["gear", "Apps and sales channels"]];

export default function Settings() {
  const [push, setPush] = useState(true);
  const [sms, setSms] = useState(false);
  const [digest, setDigest] = useState(true);
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);
  const toggle = (v: boolean, f: (b: boolean) => void) => (
    <button onClick={() => f(!v)} className={`relative h-6 w-11 rounded-full ${v ? "bg-[#303030]" : "bg-[#c4c4c4]"}`}><span className={`absolute top-[2px] h-5 w-5 rounded-full bg-white shadow transition-all ${v ? "left-[22px]" : "left-[2px]"}`} /></button>
  );
  const card = "rounded-xl bg-white p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.1)]";
  return (
    <div className="mx-auto grid max-w-[1000px] grid-cols-[220px_1fr] gap-6 px-6 pb-12 pt-5">
      <aside>
        <h1 className="mb-3 flex items-center gap-2 text-[18px] font-bold text-[#303030]"><Icon name="gear" size={17} /> Settings</h1>
        <div className="space-y-[2px]">{nav.map(([i, l], k) => <span key={l} className={`flex items-center gap-3 rounded-lg px-3 py-[7px] text-[13px] font-medium ${k === 0 ? "bg-white shadow-sm" : "text-[#303030]"}`}><Icon name={i} size={16} />{l}</span>)}</div>
      </aside>
      <div className="space-y-4">
        <section className={card}>
          <h2 className="text-[14px] font-semibold">Store details</h2>
          <label className="mt-3 block text-[13px] font-medium">Store name</label>
          <input defaultValue="Saffron & Salt" className="mt-1 h-9 w-full rounded-lg border border-[#8a8a8a] px-3 text-[13px] outline-none focus:border-[#303030]" />
          <label className="mt-3 block text-[13px] font-medium">Store currency</label>
          <select className="mt-1 h-9 w-full rounded-lg border border-[#8a8a8a] bg-white px-2 text-[13px]"><option>US Dollar (USD $)</option><option>Euro (EUR €)</option></select>
          <button onClick={() => { setToast(true); setTimeout(() => setToast(false), 2000); }} className="mt-4 h-9 rounded-lg bg-[#303030] px-4 text-[13px] font-semibold text-white">Save</button>
        </section>
        <section className={card}>
          <h2 className="text-[14px] font-semibold">Notifications</h2>
          {[["Push notifications", push, setPush], ["SMS alerts", sms, setSms], ["Weekly sales digest", digest, setDigest]].map(([l, v, f], i) => (
            <div key={l as string} className={`flex items-center justify-between py-3 ${i ? "border-t border-[#ebebeb]" : ""}`}><span className="text-[13px]">{l as string}</span>{toggle(v as boolean, f as (b: boolean) => void)}</div>
          ))}
        </section>
        <section className={card}>
          <h2 className="text-[14px] font-semibold text-[#c5280c]">Danger zone</h2>
          <p className="mt-1 text-[13px] text-[#616161]">Deleting your store removes all products, orders and customers.</p>
          <button onClick={() => setModal(true)} className="mt-3 h-9 rounded-lg border border-[#e0b3b2] px-4 text-[13px] font-semibold text-[#c5280c]">Delete store</button>
        </section>
      </div>
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-[400px] rounded-2xl bg-white p-6">
            <h2 className="text-[16px] font-bold">Delete this store?</h2>
            <p className="mt-2 text-[13px] text-[#616161]">This action can&apos;t be undone. All products and orders will be removed.</p>
            <div className="mt-5 flex justify-end gap-2"><button onClick={() => setModal(false)} className="h-9 rounded-lg px-4 text-[13px]">Cancel</button><button onClick={() => setModal(false)} className="h-9 rounded-lg bg-[#c5280c] px-4 text-[13px] font-semibold text-white">Delete</button></div>
          </div>
        </div>
      )}
      {toast && <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#303030] px-4 py-2 text-[13px] text-white">Settings saved</div>}
    </div>
  );
}
