import Link from "next/link";
import { Icon } from "@/components/Icon";
import { AreaChart, Sparkline } from "@/components/charts";
import { orders, products, getCustomer, salesSeries, sessionsSeries, ordersSeries } from "@/lib/data";

const money = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const top = [...products].sort((a, b) => b.sold - a.sold).slice(0, 5);

export default function Home() {
  return (
    <div>
      <div className="flex items-center gap-10 rounded-tl-[14px] bg-white px-6 py-3">
        <div>
          <p className="text-[12px] text-[#616161]">All channels</p>
          <p className="text-[14px] font-semibold text-[#303030]">Last 30 days</p>
        </div>
        <div className="ml-auto flex items-center gap-8">
          {[["Sessions", "9,064", sessionsSeries], ["Total sales", "$17,043", salesSeries], ["Orders", "311", ordersSeries]].map(([l, v, d]) => (
            <div key={l as string} className="text-right">
              <p className="text-[12px] text-[#616161]">{l as string}</p>
              <p className="text-[14px] font-semibold text-[#303030]">{v as string} <Sparkline data={d as number[]} color="#616161" /></p>
            </div>
          ))}
          <div className="text-right"><p className="text-[12px] text-[#616161]">Conversion rate</p><p className="text-[14px] font-semibold text-[#303030]">3.43% <span className="text-[#2f9e5f]">▲</span></p></div>
          <div className="text-right"><p className="text-[12px] text-[#616161]">Live visitors</p><p className="text-[14px] font-semibold text-[#303030]">27 <span className="inline-block h-2 w-2 rounded-full bg-[#2f9e5f]" /></p></div>
        </div>
      </div>

      <div className="mx-auto max-w-[1180px] px-6 pb-10">
        <div className="pb-6 pt-10 text-center">
          <h1 className="text-[28px] font-semibold leading-tight text-[#303030]">Good morning!<br />Let&apos;s continue growing your business.</h1>
          <div className="mx-auto mt-6 flex h-[52px] max-w-[640px] items-center gap-3 rounded-full bg-white px-5 shadow-[0_1px_4px_rgba(0,0,0,0.12)]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5b3df5] text-white"><Icon name="sparkle" size={13} /></span>
            <span className="flex-1 text-left text-[14px] text-[#8a8a8a]">Ask anything…</span>
            <Icon name="plus" size={16} />
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {[["Fulfill orders", 4], ["Capture payments", 1], ["Restock products", 3]].map(([l, n]) => (
              <span key={l as string} className="flex items-center gap-2 rounded-full bg-white px-4 py-[7px] text-[13px] font-medium text-[#303030] shadow-[0_1px_2px_rgba(0,0,0,0.12)]">{l}<span className="rounded-full bg-[#f1f1f1] px-[7px] text-[12px]">{n}</span></span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <section className="col-span-2 rounded-2xl bg-white p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[13px] font-medium text-[#303030] underline decoration-dotted underline-offset-4">Total sales</p>
                <p className="mt-2 text-[26px] font-semibold text-[#303030]">{money(17042.8)} <span className="ml-1 text-[13px] font-medium text-[#2f9e5f]">▲ 18%</span></p>
              </div>
              <span className="flex h-8 items-center gap-2 rounded-lg border border-[#d4d4d4] px-3 text-[13px] text-[#303030]"><Icon name="calendar" size={14} /> Last 30 days</span>
            </div>
            <div className="mt-3"><AreaChart data={salesSeries} color="#2c6ecb" height={190} labels={["Oct 24", "Nov 1", "Nov 8", "Nov 15", "Nov 22"]} /></div>
          </section>

          <section className="rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]">
            <h2 className="px-5 pb-2 pt-4 text-[14px] font-semibold text-[#303030]">Top products</h2>
            {top.map((p, i) => (
              <Link key={p.id} href={`/products/${p.id}`} className="flex items-center gap-3 border-t border-[#ebebeb] px-5 py-[10px]">
                <span className="w-3 text-[12px] text-[#8a8a8a]">{i + 1}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt="" className="h-9 w-9 rounded-lg border border-[#ebebeb] object-cover" />
                <span className="line-clamp-1 flex-1 text-[13px] text-[#303030]">{p.name.split(" – ")[0]}</span>
                <span className="text-[13px] font-medium text-[#303030]">{p.sold}</span>
              </Link>
            ))}
          </section>

          <section className="col-span-2 rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between px-5 pb-2 pt-4">
              <h2 className="text-[14px] font-semibold text-[#303030]">Recent orders</h2>
              <Link href="/orders" className="text-[13px] text-[#005bd3]">View all</Link>
            </div>
            {orders.slice(0, 6).map((o) => (
              <Link key={o.id} href={`/orders/${o.id}`} className="grid grid-cols-[80px_1fr_120px_100px] items-center border-t border-[#ebebeb] px-5 py-[11px] text-[13px]">
                <span className="font-medium text-[#303030]">#{o.number}</span>
                <span className="text-[#303030]">{getCustomer(o.customerId).name}</span>
                <span className="text-[#616161]">{o.fulfillment}</span>
                <span className="text-right font-medium text-[#303030]">{money(o.total)}</span>
              </Link>
            ))}
          </section>

          <section className="rounded-2xl bg-white p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]">
            <p className="text-[12px] text-[#616161]">1 of 2 tasks completed</p>
            <h2 className="mt-1 text-[17px] font-semibold leading-snug text-[#303030]">Publish your Winter gift sets</h2>
            <p className="mt-1 text-[13px] text-[#616161]">Next task: set a gift-set price and add photos.</p>
            <div className="mt-4 flex h-[86px] items-center justify-center rounded-xl bg-gradient-to-br from-[#fde9c9] to-[#f6b98a] text-[34px]">🎁</div>
            <Link href="/collections" className="mt-4 inline-flex h-8 items-center rounded-lg bg-[#303030] px-3 text-[13px] font-semibold text-white">Resume</Link>
          </section>
        </div>
      </div>
    </div>
  );
}
