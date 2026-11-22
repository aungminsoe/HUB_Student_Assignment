# Design System Checklist (HUBshop)

ပြီးတဲ့အရာတိုင်းကို `[x]` လို့ အမှန်ခြစ်ပါ။ အဆင့်ကို အစဉ်လိုက် လုပ်ပါ။

---

## 0. Setup
- [ ] `npm install` ပြီး `npm run dev` run ပါ (desktop, 1280px နဲ့အထက်)
- [ ] Screen ၁၇ ခုလုံးကို တစ်ခုချင်း ဖွင့်ကြည့်ပါ (Home, Products ×3, Collections ×2, Orders ×2, Customers ×2, Segments ×2, Growth ×3, Discounts, Settings)
- [ ] Branch အသစ်ဖွင့်ပါ (ဥပမာ `ds-yourname`)
- [ ] `docs/` folder ဖန်တီးပါ

## 1. Audit — inconsistency ရှာပါ
- [ ] Screen တိုင်းရဲ့ screenshot ယူပါ (`docs/screens/before/`)
- [ ] အောက်ပါအမျိုးအစားတိုင်းအတွက် ဘယ်နှစ်မျိုး ရှိနေလဲ ရေပြီး ဇယားလုပ်ပါ
  - [ ] Color (text, background, border, brand, status)
  - [ ] Typography (size, weight, line-height, letter-spacing)
  - [ ] Spacing (padding, gap, page width)
  - [ ] Radius
  - [ ] Shadow / border (card elevation)
  - [ ] Button (size, color, radius, variant)
  - [ ] Form control (input, select, checkbox, radio, toggle, textarea, focus/error state)
  - [ ] Badge / status
  - [ ] Table (header, row height, checkbox)
  - [ ] Tabs / filter
  - [ ] Stat card / chart
  - [ ] Icon (size, stroke)
  - [ ] Format (money, date, count, label wording)
  - [ ] Layout pattern (page header, breadcrumb, right rail)
- [ ] Accessibility ပြဿနာ ရှာပါ (contrast, touch/click target, label, focus ring, alt text)
- [ ] `docs/audit.md` ရေးပါ (category တစ်ခုချင်းစီ: ဘာတွေ့လဲ၊ ဘယ်နှစ်မျိုးလဲ၊ ဘယ်ဖိုင်တွေမှာလဲ)

## 2. Foundations — tokens
- [ ] Token စနစ် ရွေးပါ (Tailwind `@theme` ကို `app/globals.css` မှာ သို့မဟုတ် CSS variables)
- [ ] **Color:** neutral scale၊ brand၊ semantic (success, warning, critical, info, link)
- [ ] Color ကို role နဲ့ နာမည်ပေးပါ (`text-primary`, `surface`, `border-subtle`)
- [ ] **Typography:** scale ၅–၈ ဆင့်၊ weight၊ line-height
- [ ] **Spacing:** 4pt သို့မဟုတ် 8pt scale
- [ ] **Radius:** ၃–၄ မျိုးပဲ
- [ ] **Elevation:** ၂–၃ မျိုးပဲ
- [ ] **Icon:** size scale နဲ့ stroke width တစ်ခုတည်း
- [ ] ဘာကြောင့် အဲဒီတန်ဖိုးတွေ ရွေးလဲ၊ ဘာတွေ merge/ဖယ်လိုက်လဲ `docs/decisions.md` မှာ ရေးပါ

## 3. Components — `components/ui/`
- [ ] Audit ကနေ ဘယ် component လိုလဲ စာရင်းလုပ်ပါ
- [ ] Component တစ်ခုချင်းစီမှာ:
  - [ ] props နဲ့ variant/size ထိန်းလို့ရတယ်
  - [ ] TypeScript type ရှိတယ်
  - [ ] raw hex/px မသုံးဘဲ token သုံးတယ်
  - [ ] hover / focus-visible / disabled state ရှိတယ်
  - [ ] ဆီလျော်ရင် error / loading state ရှိတယ်
  - [ ] keyboard နဲ့ သုံးလို့ရတယ်၊ icon-only ဆိုရင် `aria-label` ရှိတယ်
- [ ] အနည်းဆုံး ပါသင့်တာတွေ စစ်ပါ:
  - [ ] Button, IconButton
  - [ ] TextField, Textarea, Select
  - [ ] Checkbox, Radio, Toggle
  - [ ] Badge (status system တစ်ခုတည်း)
  - [ ] Tabs / FilterTabs
  - [ ] Card
  - [ ] DataTable
  - [ ] StatStrip / StatCard
  - [ ] Banner
  - [ ] Modal, Toast
  - [ ] EmptyState
  - [ ] PageHeader (breadcrumb ပါ)
  - [ ] Avatar
  - [ ] Sidebar, Topbar
- [ ] Format helper တွေ (money, date, count) `lib/format.ts` ထဲ စုပါ

## 4. Refactor — screen ၁၇ ခုလုံး
- [ ] Screen တစ်ခုချင်းကို DS component/token နဲ့ ပြန်ရေးပါ
  - [ ] Home
  - [ ] Products list
  - [ ] Add product / Product detail
  - [ ] Collections list / detail
  - [ ] Orders list / detail
  - [ ] Customers list / detail
  - [ ] Segments list / detail
  - [ ] Growth / Attribution / Campaigns
  - [ ] New discount
  - [ ] Settings
- [ ] `app/` ထဲမှာ raw value မကျန်ဘူးဆိုတာ စစ်ပါ
  ```bash
  grep -rEn "\[#[0-9a-fA-F]{3,8}\]" app | wc -l
  grep -rEn "\[[0-9.]+px\]" app | wc -l
  ```
- [ ] Page layout pattern (header, container width, gutter) တစ်ခုတည်း ဖြစ်ပါပြီ
- [ ] Feature၊ content၊ route မပြောင်းရပါ (visual consistency ပဲ)
- [ ] `npm run build` အောင်ပါတယ်

## 5. QA
- [ ] Screen တိုင်းကို before/after နှိုင်းကြည့်ပါ
- [ ] တူရမယ့်ဟာတွေ တူလားစစ်ပါ (button, badge, table, form, header, format)
- [ ] Keyboard နဲ့ Tab ဖြတ်ကြည့်ပါ (focus ring မြင်ရတယ်)
- [ ] Contrast စစ်ပါ (text 4.5:1 အနည်းဆုံး)
- [ ] Icon-only button တွေမှာ `aria-label` ရှိတယ်
- [ ] Console error မရှိပါ

## 6. Documentation
- [ ] `docs/README.md` — token စာရင်း (နာမည်၊ တန်ဖိုး၊ ဘယ်အတွက်လဲ)
- [ ] Component စာရင်း — props၊ variant၊ ဥပမာ code
- [ ] `docs/audit.md`, `docs/decisions.md`
- [ ] (Optional) `/ds` route တွင် component အားလုံးကို ပြပါ

## 7. Submit
- [ ] Before/after screenshot (အနည်းဆုံး screen ၅ ခု)
- [ ] ၁ မျက်နှာ reflection: အခက်ဆုံးက ဘာလဲ၊ ဘာကို ပြန်ဆုံးဖြတ်ခဲ့လဲ၊ AI သုံးရင် ဘယ်နေရာမှာလဲ၊ ဘယ်လို စစ်ခဲ့လဲ
- [ ] Code ကို repo/zip နဲ့ တင်ပါ
- [ ] `node_modules`, `.next` မပါပါ

---

## Bonus (optional)
- [ ] Dark mode (semantic token နဲ့)
- [ ] `/ds` living style guide
- [ ] Raw color ရှာတဲ့ lint/script
- [ ] Tablet/mobile responsive
