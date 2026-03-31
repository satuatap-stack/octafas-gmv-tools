# Octafas GMV tools

Premium static web app untuk simulasi GMV, profit, ROAS, break-even ROAS, projected LTV, nCAC, efficiency score, dan optimal scale zone.

## Yang saya tarik dari workbook Excel
- Logika dasar economics dari `Simulator_Shopee` dan `Simulator_TikTokShop`
- Kamus istilah dari `Kamus_Metrik`
- Referensi sumber dari `Sumber`
- Nuansa finance-first: fokus ke profit, break-even, dan batas scale yang sehat

## Bentuk aplikasi
- Static app, tanpa build step wajib
- Cocok untuk deploy cepat ke Vercel
- Semua interaksi berjalan client-side
- Share state via URL params
- Export snapshot ke file JSON
- Responsive desktop + mobile

## Struktur file
- `index.html` → shell layout aplikasi
- `styles.css` → premium dark SaaS styling
- `app.js` → simulator logic, chart rendering, UI state
- `data/reference-data.json` → seed/reference data turunan workbook
- `supabase/schema.sql` → schema Supabase opsional
- `vercel.json` → config sederhana untuk deploy static

## Deploy ke Vercel
1. Upload folder ini ke repo GitHub, atau drag-and-drop langsung ke Vercel.
2. Set project sebagai static deployment.
3. Tidak perlu environment variable untuk versi default ini.
4. Bila ingin menyimpan skenario ke database, aktifkan Supabase lalu sambungkan `schema.sql`.

## Catatan model
Versi web ini sengaja dibuat lebih premium dan cepat daripada spreadsheet. 
Detail fee workbook diterjemahkan menjadi profile bias per channel supaya dashboard tetap ringan, 
sementara formula inti yang diminta tetap dipertahankan:

- Profit = GMV × margin - ad spend
- ROAS = GMV / budget
- Break-even ROAS = 100 / margin
- Orders = GMV / AOV

Di atas formula inti tersebut, saya tambahkan:
- diminishing return curve
- market cap pressure
- optimal budget search
- projected LTV
- nCAC
- efficiency score
- zone classification

## Supabase opsional
Schema Supabase disediakan untuk:
- menyimpan channel defaults
- menyimpan segment presets
- menyimpan source references
- menyimpan saved scenarios

Versi default app belum mewajibkan database.
