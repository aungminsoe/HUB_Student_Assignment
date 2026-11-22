# Design System Assignment — Shop Admin

## ဖြစ်စဉ်

သင်တို့ဟာ desktop web admin app (HUBshop) တစ်ခုကို အမွေဆက်ခံလိုက်ပါပြီ။ App က အလုပ်လုပ်ပေမဲ့ UI ကို developer အမျိုးမျိုးက Design System မသုံးဘဲ ရေးခဲ့ကြတာမို့ screen တစ်ခုနဲ့တစ်ခု ပုံစံမတူပါဘူး။

သင်တို့ရဲ့ တာဝန်က **Design System တစ်ခု ဆောက်ပြီး app တစ်ခုလုံးကို consistent ဖြစ်အောင် ပြန်လုပ်ဖို့** ဖြစ်ပါတယ်။

## Scope

- Screen ၁၇ ခု: Home၊ Products (list, detail, new)၊ Collections (list, detail)၊ Orders (list, detail)၊ Customers (list, detail)၊ Segments (list, detail)၊ Growth (overview, attribution, campaigns)၊ New discount၊ Settings
- Product ပုံတွေက Unsplash URL မို့ internet လိုပါတယ်
- Stack: Next.js + Tailwind CSS (အသစ် library ထပ်မထည့်ပါနဲ့။ Storybook မလိုပါ)
- Run: `npm install && npm run dev` ပြီး desktop browser (1280px နဲ့အထက်) မှာ ဖွင့်ပါ

## အဆင့်များ

### 1. Audit
Screen အားလုံးကို လေ့လာပြီး inconsistency တွေကို **ကိုယ်တိုင်ရှာပါ**။
- Screenshot ယူပါ၊ category အလိုက် စုပါ
- တစ်မျိုးတည်းဖြစ်သင့်တာ ဘယ်နှစ်မျိုး ရှိနေလဲ ရေတွက်ပါ
- Accessibility ပြဿနာတွေကိုလည်း ထည့်စဉ်းစားပါ

Deliverable: `docs/audit.md`

### 2. Foundations (Tokens)
Raw value တွေကို token အဖြစ် ပြောင်းပါ (Tailwind `@theme` သို့မဟုတ် CSS variables)။
- Color (brand၊ neutral၊ semantic)
- Typography scale
- Spacing scale
- Radius၊ shadow၊ icon size

ဘာကြောင့် အဲဒီတန်ဖိုးတွေကို ရွေးလဲဆိုတာ `docs/decisions.md` မှာ ရေးပါ။

### 3. Components
`components/ui/` အောက်မှာ reusable component တွေ ဆောက်ပါ။ Variant နဲ့ size ကို props နဲ့ ထိန်းပါ၊ hover/focus/disabled/error state တွေ ပါရပါမယ်။
ဘယ် component တွေ လိုလဲဆိုတာ audit ကနေ ကိုယ်တိုင်ဆုံးဖြတ်ပါ။

### 4. Refactor
Screen ၁၇ ခုလုံးကို token နဲ့ component တွေသုံးပြီး ပြန်ရေးပါ။
- Page file တွေထဲမှာ raw color, `px` arbitrary value မကျန်သင့်ပါ
- Feature နဲ့ content (data, route, behavior) မပြောင်းရပါ
- Brand ကို ဆုံးဖြတ်ပြီး app တစ်ခုလုံးမှာ တူညီစေပါ

### 5. Documentation
`docs/README.md` မှာ token စာရင်း၊ component list၊ အသုံးပြုပုံ ဥပမာ ရေးပါ။ `/ds` route တစ်ခုထည့်ပြီး component တွေကို ပြလည်းရပါတယ်။

## Submit

- Repo (သို့) zip: code + `docs/`
- Before/after screenshot နှစ်ခု (အနည်းဆုံး screen ၅ ခု)
- ၁ မျက်နှာ reflection: ဘာကို အခက်ဆုံးတွေ့လဲ၊ ဘာကို ပြန်ဆုံးဖြတ်ခဲ့လဲ

## စည်းမျဉ်း

- Feature အသစ် မထည့်ပါနဲ့၊ visual consistency ကိုပဲ အာရုံစိုက်ပါ
- `components/Sidebar.tsx`၊ `components/Topbar.tsx`၊ `components/Icon.tsx`၊ `lib/data.ts` ကို ပြင်လို့ရပါတယ်
- AI tool သုံးရင် ဘယ်နေရာမှာ သုံးလဲ၊ ဘယ်လို စစ်ဆေးလဲ reflection မှာ ဖော်ပြပါ
