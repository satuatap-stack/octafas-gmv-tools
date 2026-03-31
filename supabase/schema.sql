create extension if not exists pgcrypto;

create table if not exists public.octafas_channels (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  label text not null,
  workbook_sheet text,
  assumptions jsonb not null default '{}'::jsonb,
  defaults_json jsonb not null default '{}'::jsonb,
  baseline_outputs_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.octafas_segments (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  label text not null,
  config_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.octafas_source_references (
  id uuid primary key default gen_random_uuid(),
  platform text not null,
  topic text not null,
  source_url text not null,
  note text,
  created_at timestamptz not null default now()
);

create table if not exists public.octafas_saved_scenarios (
  id uuid primary key default gen_random_uuid(),
  scenario_name text not null,
  channel_slug text not null,
  segment_slug text not null,
  seasonality_slug text not null,
  inputs_json jsonb not null,
  outputs_json jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

insert into public.octafas_channels (slug, label, workbook_sheet, assumptions, defaults_json, baseline_outputs_json)
values
  (
    'shopee',
    'Shopee',
    'Simulator_Shopee',
    '["Rumus fleksibel karena biaya Shopee berubah menurut kategori produk, status seller, program promo/XTRA, dan tanggal kebijakan. Isi tarif sesuai Seller Center Anda.", "Referensi publik yang dipakai meliputi update biaya admin Shopee, rumus fee setelah diskon seller, serta biaya proses pesanan Rp1.250 per transaksi.", "Asumsi inti workbook: diskon platform tidak ditanggung seller; seller revenue basis = gross list sales - diskon seller.", "Arah logika: Harga → diskon → GMV → fee → settlement → biaya langsung → non-ad marketing → iklan → laba.", "Peringatan: Settlement positif tidak otomatis berarti order untung. Profit riil baru terlihat setelah HPP, packing, creator, affiliate, dan ads dimasukkan."]'::jsonb,
    '{"listPrice": 100000, "qty": 1, "sellerDiscount": 10000, "platformDiscount": 5000, "buyerShippingPaid": 10000, "salesTaxIncluded": 0, "refundDeduction": 0, "otherBalanceDeduction": 0, "cogsPerUnit": 50000, "packagingCost": 3000, "warehouseCost": 2000, "shippingSubsidy": 0, "otherDirectCost": 0, "adminFeePct": 0.08, "serviceFeePct": 0.03, "paymentFeePct": 0, "preOrderFeePct": 0, "processingFee": 1250, "affiliatePct": 0, "adSpendAllocated": 15000, "creatorFee": 0, "otherMarketingCost": 0, "impressions": 5000, "clicks": 150, "pdpViews": 120, "addsToCart": 25, "checkouts": 10, "purchases": 3}'::jsonb,
    '{"grossListSales": 100000, "sellerRevenueBasis": 90000, "customerProductPayment": 85000, "customerCheckoutTotal": 95000, "gmvStyleExclTax": 95000, "adsGrossRevenueProxy": 100000, "feeBase": 90000, "totalMarketplaceFees": 11150, "marketplaceSettlement": 78850, "directOperatingCost": 55000, "nonAdMarketingCost": 0, "operatingProfitBeforeAds": 23850, "netProfitAfterAds": 8850, "netMargin": 0.09833333333333333, "takeRate": 0.1238888888888889, "payoutRate": 0.8761111111111111, "averageOrderValue": 30000, "ctr": 0.03, "cpc": 100, "cpm": 3000, "pdpRate": 0.8, "atcRate": 0.20833333333333334, "checkoutRate": 0.4, "cvrClickToPurchase": 0.02, "cvrPdpToPurchase": 0.025, "cpa": 5000, "roasSellerRevenue": 6, "roasAdsGrossRevenue": 6.666666666666667, "acos": 0.16666666666666666, "mer": 6, "breakEvenAcos": 0.265, "breakEvenRoas": 3.7735849056603774, "maxCpa": 7950, "maxCpc": 159}'::jsonb
  ),
  (
    'tiktok',
    'TikTok Ads',
    'Simulator_TikTokShop',
    '["Rumus fleksibel karena biaya TikTok Shop / Tokopedia & TikTok Shop berubah menurut kategori, status akun, program, dan integrasi seller center. Isi tarif final dari Seller Center Anda.", "Workbook menonjolkan nuansa resmi TikTok: GMV Seller Center berbasis customer payment, sedangkan gross revenue Shop Ads dapat menambahkan platform discount dan mengurangi sales tax.", "Official newsroom menyebut biaya pre-order 3% hanya berlaku untuk produk pre-order yang dibeli lewat TikTok Shop, bukan Tokopedia; ada juga payout express 3 hari dengan syarat tertentu.", "Arah logika: Harga → diskon → GMV → fee → settlement → biaya langsung → non-ad marketing → iklan → laba.", "Peringatan: Settlement positif tidak otomatis berarti order untung. Profit riil baru terlihat setelah HPP, packing, creator, affiliate, dan ads dimasukkan."]'::jsonb,
    '{"listPrice": 100000, "qty": 1, "sellerDiscount": 10000, "platformDiscount": 5000, "buyerShippingPaid": 10000, "salesTaxIncluded": 0, "refundDeduction": 0, "otherBalanceDeduction": 0, "cogsPerUnit": 50000, "packagingCost": 3000, "warehouseCost": 2000, "shippingSubsidy": 0, "otherDirectCost": 0, "adminFeePct": 0.06, "serviceFeePct": 0, "paymentFeePct": 0, "preOrderFeePct": 0, "processingFee": 1250, "affiliatePct": 0, "adSpendAllocated": 15000, "creatorFee": 0, "otherMarketingCost": 0, "impressions": 5000, "clicks": 150, "pdpViews": 120, "addsToCart": 25, "checkouts": 10, "purchases": 3}'::jsonb,
    '{"grossListSales": 100000, "sellerRevenueBasis": 90000, "customerProductPayment": 85000, "customerCheckoutTotal": 95000, "gmvStyleExclTax": 95000, "adsGrossRevenueProxy": 100000, "feeBase": 90000, "totalMarketplaceFees": 6650, "marketplaceSettlement": 83350, "directOperatingCost": 55000, "nonAdMarketingCost": 0, "operatingProfitBeforeAds": 28350, "netProfitAfterAds": 13350, "netMargin": 0.14833333333333334, "takeRate": 0.07388888888888889, "payoutRate": 0.9261111111111111, "averageOrderValue": 30000, "ctr": 0.03, "cpc": 100, "cpm": 3000, "pdpRate": 0.8, "atcRate": 0.20833333333333334, "checkoutRate": 0.4, "cvrClickToPurchase": 0.02, "cvrPdpToPurchase": 0.025, "cpa": 5000, "roasSellerRevenue": 6, "roasAdsGrossRevenue": 6.666666666666667, "acos": 0.16666666666666666, "mer": 6, "breakEvenAcos": 0.315, "breakEvenRoas": 3.1746031746031744, "maxCpa": 9450, "maxCpc": 189}'::jsonb
  )
on conflict (slug) do update
set
  label = excluded.label,
  workbook_sheet = excluded.workbook_sheet,
  assumptions = excluded.assumptions,
  defaults_json = excluded.defaults_json,
  baseline_outputs_json = excluded.baseline_outputs_json;

insert into public.octafas_segments (slug, label, config_json)
values
  ('beauty', 'Beauty & Personal Care', '{"demand":1.12,"repeatBias":1.18,"marketShare":0.92}'),
  ('fashion', 'Fashion & Lifestyle', '{"demand":1.06,"repeatBias":0.94,"marketShare":1.0}'),
  ('fmcg', 'FMCG / Consumables', '{"demand":1.18,"repeatBias":1.30,"marketShare":1.08}'),
  ('home', 'Home Living', '{"demand":0.94,"repeatBias":0.80,"marketShare":0.85}'),
  ('electronics', 'Electronics', '{"demand":0.82,"repeatBias":0.62,"marketShare":0.78}')
on conflict (slug) do update
set
  label = excluded.label,
  config_json = excluded.config_json;

insert into public.octafas_source_references (platform, topic, source_url, note)
values
  ('TikTok Shop Ads', 'Gross revenue, ROAS, GMV', 'https://ads.tiktok.com/help/article/about-gross-revenue-for-tiktok-shop-ads?lang=id', 'Definisi resmi gross revenue, GMV, dan ROAS Shop Ads.'),
  ('TikTok Ads', 'Glossary CPC/CPM/conversion', 'https://ads.tiktok.com/help/article/tiktok-ads-manager-glossary-terms?lang=en', 'Definisi dasar istilah iklan.'),
  ('TikTok Ads', 'Shop Ads metrics (Spark Ads/VSA)', 'https://ads.tiktok.com/help/article/key-reporting-metrics-spark-ads-video-shopping-ads?lang=en', 'Definisi clicks, purchases, CPC, CTR, ROAS (Shop).'),
  ('TikTok Ads', 'LIVE Shopping Ads metrics', 'https://ads.tiktok.com/help/article/key-reporting-metrics-for-live-shopping-ads?lang=en', 'Definisi product clicks, checkout, purchases, ROAS LIVE.'),
  ('TikTok Ads', 'GMV Max', 'https://ads.tiktok.com/help/article/about-product-gmv-max?lang=id', 'Menjelaskan GMV Max sebagai solusi otomatis untuk TikTok Shop Ads.'),
  ('TikTok/Tokopedia', 'Seller Center resmi', 'https://newsroom.tiktok.com/tokopedia-dan-tiktok-shop-seller-center-resmi-diluncurkan?lang=id-ID', 'Peluncuran seller center terintegrasi di Indonesia.'),
  ('TikTok/Tokopedia', 'Pre-order fee & payout express', 'https://newsroom.tiktok.com/memahami-tokopedia-tiktok-shop-seller-center-mitos-vs-fakta?from_seo_redirect=1&lang=id-ID', 'Biaya 3% khusus pre-order TikTok Shop dan payout express 3 hari (bersyarat).'),
  ('Shopee', 'Update biaya admin 1 Sep 2024', 'https://money.kompas.com/read/2024/07/31/193537726/mulai-1-september-2024-shopee-terapkan-biaya-admin-baru-untuk-seller', 'Kompas mengutip pembaruan kebijakan biaya admin Shopee.'),
  ('Shopee', 'Biaya proses pesanan Rp1.250', 'https://www.suara.com/tekno/2025/07/02/212808/shopee-umumkan-biaya-proses-pesanan-ke-penjual-rp-1250-per-transaksi-berlaku-20-juli', 'Suara mengutip pengumuman resmi biaya proses pesanan.'),
  ('Shopee', 'Biaya proses pesanan per transaksi', 'https://katadata.co.id/digital/e-commerce/687dc73f0685d/shopee-resmi-kenakan-biaya-proses-pesanan-rp-1250-ke-pedagang', 'Menjelaskan Rp1.250 per pesanan, bukan per item.'),
  ('Shopee', 'Rumus admin fee & cek transaksi', 'https://www.idntimes.com/business/economy/biaya-admin-shopee-2025-per-kategori-untuk-penjual-q9t03-00-qftxr-g725qy', 'Merangkum rumus biaya admin dari Pusat Edukasi Penjual Shopee.')
on conflict do nothing;
