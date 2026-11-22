"use client";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { AreaChart } from "@/components/charts";
import { channelsList, salesSeries, campaigns } from "@/lib/data";

const money = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function GrowthPage() {
  const [range, setRange] = useState("Last 30 days");
  const total = channelsList.reduce((s, c) => s + c.sessions, 0);
  const attributed = channelsList.filter((c) => c.cost !== null).reduce((s, c) => s + c.sales, 0);
  return (
    <div className="mx-auto max-w-[1000px] px-5 pb-12 pt-5">
      <h1 className="mb-4 flex items-center gap-2 text-[18px] font-bold text-[#303030]"><Icon name="growth" size={17} /> Growth</h1>

      <section className="mb-6 flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#e6f0ff] to-[#f3e8ff] p-7">
        <div className="max-w-[520px]">
          <span className="rounded-md bg-[#b4dcff] px-2 py-[2px] text-[12px] font-medium text-[#003a5a]">Early access</span>
          <h2 className="mt-3 text-[26px] font-bold leading-tight text-[#303030]">Run your marketing on autopilot</h2>
          <p className="mt-2 text-[14px] leading-[22px] text-[#616161]">Campaign Autopilot promotes your products across top channels, and keeps refining the strategy while you stay in control.</p>
          <div className="mt-4 flex gap-2"><button className="h-8 rounded-lg bg-[#303030] px-3 text-[13px] font-semibold text-white">Join waitlist</button><button className="h-8 rounded-lg border border-[#c9c9c9] bg-white px-3 text-[13px] font-medium">Learn more</button><button className="h-8 px-3 text-[13px] font-medium">Not now</button></div>
        </div>
        <div className="rounded-xl bg-[#1d2a27] p-4 text-white shadow-lg"><p className="text-[11px] text-[#9fb5af]">Sales by channel</p><p className="text-[22px] font-semibold">1,045 <span className="text-[11px] text-[#4ade80]">↗ 32%</span></p><svg width="190" height="54" viewBox="0 0 190 54"><polyline fill="none" stroke="#4ade80" strokeWidth="2" points="0,44 25,38 50,41 75,26 100,30 125,16 150,20 190,6" /></svg></div>
      </section>

      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-[14px] font-semibold text-[#303030]">Performance</h2>
        <div className="flex items-center gap-3"><select value={range} onChange={(e) => setRange(e.target.value)} className="h-8 rounded-lg border border-[#d4d4d4] bg-white px-2 text-[13px]"><option>Last 7 days</option><option>Last 30 days</option><option>Last 90 days</option></select><Link href="/growth/attribution" className="text-[13px] font-medium">View details</Link></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <section className="rounded-2xl bg-white p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.1)]">
          <p className="text-[13px] font-medium underline decoration-dotted underline-offset-4">Sales attributed to marketing</p>
          <p className="mt-2 text-[22px] font-semibold">{money(attributed)} <span className="text-[13px] font-normal text-[#616161]">of <b>{money(17042.8)}</b> total store sales</span></p>
          <div className="mt-3"><AreaChart data={salesSeries.map((v) => v * 0.55)} color="#0ea5e9" height={130} labels={["Oct 24", "Nov 8", "Nov 22"]} /></div>
        </section>
        <section className="rounded-2xl bg-white p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.1)]">
          <p className="text-[13px] font-medium underline decoration-dotted underline-offset-4">Sessions by traffic type</p>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">{channelsList.map((c) => <span key={c.name} className="flex items-center gap-1 text-[12px] text-[#616161]"><i className="inline-block h-2 w-2 rounded-full" style={{ background: c.color }} />{c.name}<b className="ml-1 text-[#303030]">{c.sessions.toLocaleString()}</b></span>)}</div>
          <div className="mt-5 flex h-[84px] overflow-hidden rounded-md">{channelsList.map((c) => <div key={c.name} style={{ width: (c.sessions / total) * 100 + "%", background: c.color }} className="mr-[2px] last:mr-0" />)}</div>
          <p className="mt-3 text-[12px] text-[#616161]">{total.toLocaleString()} sessions · {range.toLowerCase()}</p>
        </section>
        {channelsList.slice(0, 4).map((c) => (
          <section key={c.name} className="flex flex-col justify-between rounded-2xl bg-white p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.1)]" style={{ minHeight: 140 }}>
            <div className="flex items-center justify-between"><span className="flex items-center gap-2 text-[14px] font-medium"><Icon name={c.icon} size={16} />{c.name}</span><span className="text-[13px] text-[#616161]">{c.sessions.toLocaleString()} sessions</span></div>
            <div className="flex items-end justify-between"><p className="text-[22px] font-semibold">{money(c.sales)}</p><p className="text-[12px] text-[#616161]">{c.orders} orders</p></div>
          </section>
        ))}
      </div>

      <h2 className="mb-2 mt-6 text-[14px] font-semibold">Campaign Autopilot</h2>
      <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-[13px] text-[#616161] shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">Campaign Autopilot is in early access, join waitlist and we&apos;ll notify you when you&apos;re in.<button className="h-8 rounded-lg border border-[#c9c9c9] px-3 font-medium text-[#303030]">Join waitlist</button></div>

      <h2 className="mb-2 mt-6 text-[14px] font-semibold">Recent campaigns</h2>
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
        {campaigns.slice(0, 3).map((c) => <Link key={c.id} href="/growth/campaigns" className="flex items-center gap-3 border-b border-[#ebebeb] px-5 py-3 text-[13px] last:border-0"><span className="flex-1 font-medium">{c.name}</span><span className="text-[#616161]">{c.channel}</span><span className="w-[90px] text-right">{money(c.sales)}</span></Link>)}
        <div className="flex items-center justify-between bg-[#fafafa] px-5 py-3 text-[13px] text-[#616161]">Create campaigns to evaluate how marketing initiatives drive business goals.<Link href="/growth/campaigns" className="flex h-8 items-center rounded-lg border border-[#c9c9c9] bg-white px-3 font-medium text-[#303030]">Create campaign</Link></div>
      </div>
    </div>
  );
}
