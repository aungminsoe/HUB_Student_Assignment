import { Icon } from "./Icon";

export function Topbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-14 items-center bg-[#0a0a0a] px-4 text-white">
      <div className="flex w-[260px] items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2f9e5f] text-[15px] font-black italic">H</span>
        <span className="text-[17px] font-bold italic tracking-tight">HUBshop</span>
      </div>
      <div className="mx-auto flex h-9 w-full max-w-[640px] items-center gap-2 rounded-[10px] border border-[#2e2e2e] bg-[#1a1a1a] px-3 text-[13px] text-[#c8c8c8]">
        <Icon name="search" size={15} />
        <span className="flex-1">Search</span>
        <kbd className="rounded bg-[#2e2e2e] px-[6px] py-[1px] text-[11px]">⌘ K</kbd>
      </div>
      <div className="flex w-[260px] items-center justify-end gap-4">
        <Icon name="bell" size={18} stroke={1.5} />
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#3ad1c4] text-[11px] font-bold text-[#0a0a0a]">SS</span>
          <span className="text-[13px] font-medium">Saffron &amp; Salt</span>
        </div>
      </div>
    </header>
  );
}
