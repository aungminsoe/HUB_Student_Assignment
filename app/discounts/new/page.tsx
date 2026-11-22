"use client";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/Icon";

export default function NewDiscount() {
  const [type, setType] = useState("percent");
  const [code, setCode] = useState("WINTER15");
  const [value, setValue] = useState("15");
  const [once, setOnce] = useState(false);
  const [email, setEmail] = useState(true);
  const card = "rounded-[12px] bg-white p-[18px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]";
  return (
    <div className="mx-auto max-w-[960px] px-5 pb-12 pt-5">
      <header className="mb-3 flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-[17px] font-semibold text-[#303030]"><Link href="/growth"><Icon name="percent" size={17} /></Link><Icon name="chevron" size={12} className="text-[#8a8a8a]" /> Create discount code</h1>
        <div className="flex gap-2"><button className="h-9 px-3 text-[13px] font-medium text-[#616161]">Discard</button><button className="h-9 rounded-[8px] bg-[#303030] px-4 text-[13px] font-semibold text-white">Save discount</button></div>
      </header>
      <div className="mb-3 flex gap-2 rounded-[10px] bg-[#eaf4ff] p-3 text-[13px] text-[#00527c]"><Icon name="info" size={17} className="shrink-0" /><p>Discount codes can&apos;t be combined with automatic discounts at checkout.</p></div>
      <div className="grid grid-cols-[1fr_280px] gap-3">
        <div className="space-y-3">
          <section className={card}>
            <div className="flex items-center justify-between"><label className="text-[13px] font-semibold">Discount code</label><button onClick={() => setCode("SAVE" + Math.floor(Math.random() * 90 + 10))} className="text-[13px] text-[#005bd3]">Generate random code</button></div>
            <input value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} className="mt-2 h-9 w-full rounded-[8px] border border-[#8a8a8a] px-3 text-[14px] outline-none focus:border-[#005bd3] focus:shadow-[0_0_0_2px_#005bd3]" />
            <p className="mt-1 text-[12px] text-[#616161]">Customers must enter this code at checkout.</p>
          </section>
          <section className={card}>
            <p className="mb-3 text-[13px] font-semibold">Discount value</p>
            <div className="grid grid-cols-2 gap-2">{[["percent", "Percentage"], ["fixed", "Fixed amount"]].map(([k, l]) => (
              <button key={k} onClick={() => setType(k)} className={`rounded-[10px] border-2 p-3 text-left text-[14px] ${type === k ? "border-[#005bd3] bg-[#f0f7ff] text-[#005bd3]" : "border-[#e3e3e3]"}`}>
                <span className={`mb-2 flex h-4 w-4 items-center justify-center rounded-full border-2 ${type === k ? "border-[#005bd3]" : "border-[#8a8a8a]"}`}>{type === k && <span className="h-2 w-2 rounded-full bg-[#005bd3]" />}</span>{l}</button>))}</div>
            <div className="mt-3 flex h-9 items-center rounded-[8px] border border-[#8a8a8a] px-3"><input value={value} onChange={(e) => setValue(e.target.value)} className="w-full text-[14px] outline-none" /><span className="text-[#616161]">{type === "percent" ? "%" : "$"}</span></div>
          </section>
          <section className={card}>
            <p className="mb-3 text-[13px] font-semibold">Applies to</p>
            {["All products", "Specific collections", "Specific products"].map((l, i) => <label key={l} className="flex items-center gap-2 py-1 text-[13px]"><input type="radio" name="a" defaultChecked={!i} /> {l}</label>)}
          </section>
          <section className={card}>
            <p className="mb-3 text-[13px] font-semibold">Active dates</p>
            <div className="grid grid-cols-2 gap-2"><div><label className="text-[12px] text-[#616161]">Start date</label><input type="date" defaultValue="2026-11-24" className="mt-1 h-9 w-full rounded-[8px] border border-[#8a8a8a] px-2 text-[13px]" /></div><div><label className="text-[12px] text-[#616161]">End date</label><input type="date" className="mt-1 h-9 w-full rounded-[8px] border border-[#8a8a8a] px-2 text-[13px]" /></div></div>
          </section>
        </div>
        <div className="space-y-3">
          <section className={card}>
            <p className="text-[13px] font-semibold">Summary</p>
            <p className="mt-2 text-[14px] font-semibold">{code || "No code yet"}</p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-[13px] text-[#616161]"><li>{type === "percent" ? `${value || 0}% off` : `$${value || 0} off`} entire order</li><li>For Online Store</li><li>Active from Nov 24, 2026</li></ul>
          </section>
          <section className={card}>
            <p className="mb-2 text-[13px] font-semibold">Usage limits</p>
            <label className="flex items-center gap-2 py-1 text-[13px]"><input type="checkbox" checked={once} onChange={() => setOnce(!once)} className="h-[18px] w-[18px] accent-[#005bd3]" /> One use per customer</label>
            <label className="flex items-center gap-2 py-1 text-[13px]"><input type="checkbox" checked={email} onChange={() => setEmail(!email)} className="h-4 w-4 accent-[#303030]" /> Email to subscribers</label>
          </section>
        </div>
      </div>
    </div>
  );
}
