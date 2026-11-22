"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

type Item = { href: string; label: string; icon: string; badge?: number; sub?: { href: string; label: string }[] };
const items: Item[] = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/orders", label: "Orders", icon: "orders", badge: 4 },
  { href: "/products", label: "Products", icon: "tag", sub: [{ href: "/collections", label: "Collections" }, { href: "/products#inventory", label: "Inventory" }, { href: "/products#po", label: "Purchase orders" }] },
  { href: "/customers", label: "Customers", icon: "user", sub: [{ href: "/segments", label: "Segments" }, { href: "/customers#companies", label: "Companies" }] },
  { href: "/growth", label: "Growth", icon: "growth", sub: [{ href: "/growth/attribution", label: "Attribution" }, { href: "/growth/campaigns", label: "Campaigns" }] },
  { href: "/discounts/new", label: "Discounts", icon: "percent" },
  { href: "/#content", label: "Content", icon: "content" },
  { href: "/#markets", label: "Markets", icon: "globe" },
  { href: "/#finance", label: "Finance", icon: "bank" },
  { href: "/#analytics", label: "Analytics", icon: "chart" },
];

export function Sidebar() {
  const path = usePathname();
  const isIn = (href: string) => (href === "/" ? path === "/" : path === href || path.startsWith(href + "/"));
  return (
    <aside className="fixed bottom-0 left-0 top-14 flex w-[260px] flex-col justify-between overflow-y-auto bg-[#ebebeb] px-3 pb-3 pt-2">
      <div>
        <nav className="space-y-[2px]">
          {items.map((it) => {
            const subActive = it.sub?.some((s) => !s.href.includes("#") && isIn(s.href));
            const active = isIn(it.href) && !subActive;
            const open = it.sub && (isIn(it.href) || subActive);
            return (
              <div key={it.label}>
                <Link href={it.href} className={`flex items-center gap-3 rounded-lg px-3 py-[7px] text-[13px] font-medium ${active ? "bg-white text-[#303030] shadow-[0_1px_1px_rgba(0,0,0,0.08)]" : "text-[#303030] hover:bg-[#f5f5f5]"}`}>
                  <Icon name={it.icon} size={17} stroke={active ? 2.2 : 1.8} />
                  <span className="flex-1">{it.label}</span>
                  {it.badge && <span className="rounded-md bg-[#d9d9d9] px-[6px] text-[11px] text-[#303030]">{it.badge}</span>}
                </Link>
                {open && (
                  <div className="ml-[22px] mt-[2px] space-y-[2px] border-l border-[#cfcfcf] pl-[10px]">
                    {it.sub!.map((s) => {
                      const a = !s.href.includes("#") && isIn(s.href);
                      return <Link key={s.label} href={s.href} className={`block rounded-lg px-3 py-[6px] text-[13px] ${a ? "bg-white font-medium text-[#303030] shadow-[0_1px_1px_rgba(0,0,0,0.08)]" : "text-[#616161] hover:bg-[#f5f5f5]"}`}>{s.label}</Link>;
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <p className="mt-5 flex items-center gap-1 px-3 text-[12px] font-medium text-[#616161]">Sales channels <Icon name="chevron" size={12} /></p>
        <div className="mt-1 space-y-[2px]">
          {[["Online Store", "store"], ["Point of Sale", "orders"]].map(([l, i]) => (
            <span key={l} className="flex items-center gap-3 rounded-lg px-3 py-[7px] text-[13px] font-medium text-[#303030]"><Icon name={i} size={17} stroke={1.8} />{l}</span>
          ))}
        </div>
        <p className="mt-5 flex items-center gap-1 px-3 text-[12px] font-medium text-[#616161]">Apps <Icon name="chevron" size={12} /></p>
      </div>
      <Link href="/settings" className={`flex items-center gap-3 rounded-lg px-3 py-[7px] text-[13px] font-medium ${path.startsWith("/settings") ? "bg-white shadow-[0_1px_1px_rgba(0,0,0,0.08)]" : ""} text-[#303030]`}>
        <Icon name="gear" size={17} stroke={1.8} /> Settings
      </Link>
    </aside>
  );
}
