const REFERENCE_DATA = {
  "workbookName": "Marketplace_Finance_Master_Shopee_TikTokShop.xlsx",
  "readmeHighlights": [
    "Isi input di simulator, baca output profit, settlement, take rate, ROAS, ACOS, dan break-even.",
    "Tarif fee berubah menurut kategori, status toko, program, dan tanggal kebijakan.",
    "Gunakan Seller Center sebagai sumber final sebelum mengambil keputusan harga.",
    "Fokus scale pada contribution before ads, break-even ACOS, break-even ROAS, dan max CPC."
  ],
  "channels": {
    "shopee": {
      "sheet": "Simulator_Shopee",
      "defaults": {
        "listPrice": 100000,
        "qty": 1,
        "sellerDiscount": 10000,
        "platformDiscount": 5000,
        "buyerShippingPaid": 10000,
        "salesTaxIncluded": 0,
        "refundDeduction": 0,
        "otherBalanceDeduction": 0,
        "cogsPerUnit": 50000,
        "packagingCost": 3000,
        "warehouseCost": 2000,
        "shippingSubsidy": 0,
        "otherDirectCost": 0,
        "adminFeePct": 0.08,
        "serviceFeePct": 0.03,
        "paymentFeePct": 0,
        "preOrderFeePct": 0,
        "processingFee": 1250,
        "affiliatePct": 0,
        "adSpendAllocated": 15000,
        "creatorFee": 0,
        "otherMarketingCost": 0,
        "impressions": 5000,
        "clicks": 150,
        "pdpViews": 120,
        "addsToCart": 25,
        "checkouts": 10,
        "purchases": 3
      },
      "baselineOutputs": {
        "grossListSales": 100000,
        "sellerRevenueBasis": 90000,
        "customerProductPayment": 85000,
        "customerCheckoutTotal": 95000,
        "gmvStyleExclTax": 95000,
        "adsGrossRevenueProxy": 100000,
        "feeBase": 90000,
        "totalMarketplaceFees": 11150,
        "marketplaceSettlement": 78850,
        "directOperatingCost": 55000,
        "nonAdMarketingCost": 0,
        "operatingProfitBeforeAds": 23850,
        "netProfitAfterAds": 8850,
        "netMargin": 0.09833333333333333,
        "takeRate": 0.1238888888888889,
        "payoutRate": 0.8761111111111111,
        "averageOrderValue": 30000,
        "ctr": 0.03,
        "cpc": 100,
        "cpm": 3000,
        "pdpRate": 0.8,
        "atcRate": 0.20833333333333334,
        "checkoutRate": 0.4,
        "cvrClickToPurchase": 0.02,
        "cvrPdpToPurchase": 0.025,
        "cpa": 5000,
        "roasSellerRevenue": 6,
        "roasAdsGrossRevenue": 6.666666666666667,
        "acos": 0.16666666666666666,
        "mer": 6,
        "breakEvenAcos": 0.265,
        "breakEvenRoas": 3.7735849056603774,
        "maxCpa": 7950,
        "maxCpc": 159
      },
      "assumptions": [
        "Rumus fleksibel karena biaya Shopee berubah menurut kategori produk, status seller, program promo/XTRA, dan tanggal kebijakan. Isi tarif sesuai Seller Center Anda.",
        "Referensi publik yang dipakai meliputi update biaya admin Shopee, rumus fee setelah diskon seller, serta biaya proses pesanan Rp1.250 per transaksi.",
        "Asumsi inti workbook: diskon platform tidak ditanggung seller; seller revenue basis = gross list sales - diskon seller.",
        "Arah logika: Harga → diskon → GMV → fee → settlement → biaya langsung → non-ad marketing → iklan → laba.",
        "Peringatan: Settlement positif tidak otomatis berarti order untung. Profit riil baru terlihat setelah HPP, packing, creator, affiliate, dan ads dimasukkan."
      ]
    },
    "tiktokAds": {
      "sheet": "Simulator_TikTokShop",
      "defaults": {
        "listPrice": 100000,
        "qty": 1,
        "sellerDiscount": 10000,
        "platformDiscount": 5000,
        "buyerShippingPaid": 10000,
        "salesTaxIncluded": 0,
        "refundDeduction": 0,
        "otherBalanceDeduction": 0,
        "cogsPerUnit": 50000,
        "packagingCost": 3000,
        "warehouseCost": 2000,
        "shippingSubsidy": 0,
        "otherDirectCost": 0,
        "adminFeePct": 0.06,
        "serviceFeePct": 0,
        "paymentFeePct": 0,
        "preOrderFeePct": 0,
        "processingFee": 1250,
        "affiliatePct": 0,
        "adSpendAllocated": 15000,
        "creatorFee": 0,
        "otherMarketingCost": 0,
        "impressions": 5000,
        "clicks": 150,
        "pdpViews": 120,
        "addsToCart": 25,
        "checkouts": 10,
        "purchases": 3
      },
      "baselineOutputs": {
        "grossListSales": 100000,
        "sellerRevenueBasis": 90000,
        "customerProductPayment": 85000,
        "customerCheckoutTotal": 95000,
        "gmvStyleExclTax": 95000,
        "adsGrossRevenueProxy": 100000,
        "feeBase": 90000,
        "totalMarketplaceFees": 6650,
        "marketplaceSettlement": 83350,
        "directOperatingCost": 55000,
        "nonAdMarketingCost": 0,
        "operatingProfitBeforeAds": 28350,
        "netProfitAfterAds": 13350,
        "netMargin": 0.14833333333333334,
        "takeRate": 0.07388888888888889,
        "payoutRate": 0.9261111111111111,
        "averageOrderValue": 30000,
        "ctr": 0.03,
        "cpc": 100,
        "cpm": 3000,
        "pdpRate": 0.8,
        "atcRate": 0.20833333333333334,
        "checkoutRate": 0.4,
        "cvrClickToPurchase": 0.02,
        "cvrPdpToPurchase": 0.025,
        "cpa": 5000,
        "roasSellerRevenue": 6,
        "roasAdsGrossRevenue": 6.666666666666667,
        "acos": 0.16666666666666666,
        "mer": 6,
        "breakEvenAcos": 0.315,
        "breakEvenRoas": 3.1746031746031744,
        "maxCpa": 9450,
        "maxCpc": 189
      },
      "assumptions": [
        "Rumus fleksibel karena biaya TikTok Shop / Tokopedia & TikTok Shop berubah menurut kategori, status akun, program, dan integrasi seller center. Isi tarif final dari Seller Center Anda.",
        "Workbook menonjolkan nuansa resmi TikTok: GMV Seller Center berbasis customer payment, sedangkan gross revenue Shop Ads dapat menambahkan platform discount dan mengurangi sales tax.",
        "Official newsroom menyebut biaya pre-order 3% hanya berlaku untuk produk pre-order yang dibeli lewat TikTok Shop, bukan Tokopedia; ada juga payout express 3 hari dengan syarat tertentu.",
        "Arah logika: Harga → diskon → GMV → fee → settlement → biaya langsung → non-ad marketing → iklan → laba.",
        "Peringatan: Settlement positif tidak otomatis berarti order untung. Profit riil baru terlihat setelah HPP, packing, creator, affiliate, dan ads dimasukkan."
      ]
    }
  },
  "glossary": [
    {
      "group": "Penjualan",
      "term": "Harga asli / list price",
      "meaning": "Harga produk sebelum diskon apa pun.",
      "formula": "Harga per unit sebelum voucher/diskon.",
      "whyItMatters": "Menjadi anchor untuk pricing dan persepsi value."
    },
    {
      "group": "Penjualan",
      "term": "Qty",
      "meaning": "Jumlah unit terjual.",
      "formula": "Unit per order / per periode.",
      "whyItMatters": "Mengalikan omzet, HPP, dan fee per unit."
    },
    {
      "group": "Penjualan",
      "term": "Diskon seller",
      "meaning": "Potongan yang ditanggung penjual sendiri.",
      "formula": "Harga asli - diskon seller = seller revenue basis.",
      "whyItMatters": "Langsung menekan margin; banyak fee dihitung setelah diskon seller."
    },
    {
      "group": "Penjualan",
      "term": "Diskon platform",
      "meaning": "Potongan yang dibiayai marketplace/platform.",
      "formula": "Customer payment turun, tetapi seller bisa tetap menerima lebih tinggi dari customer payment.",
      "whyItMatters": "Penting untuk memahami beda GMV, customer payment, dan pendapatan seller."
    },
    {
      "group": "Penjualan",
      "term": "Customer payment",
      "meaning": "Total yang dibayar pembeli untuk produk (dan kadang ongkir/fee tertentu).",
      "formula": "Harga asli - diskon seller - diskon platform + komponen checkout lain.",
      "whyItMatters": "Ini memengaruhi GMV dan persepsi harga final di mata pembeli."
    },
    {
      "group": "Penjualan",
      "term": "GMV",
      "meaning": "Gross Merchandise Value; nilai bruto transaksi di platform.",
      "formula": "Umumnya berbasis pembayaran pelanggan sebelum dikurangi banyak biaya seller.",
      "whyItMatters": "Naik belum tentu laba naik; GMV harus dibaca bersama margin."
    },
    {
      "group": "Penjualan",
      "term": "Omzet",
      "meaning": "Istilah praktis untuk total penjualan kotor.",
      "formula": "Sering dipakai sebagai shorthand untuk penjualan/GMV.",
      "whyItMatters": "Bagus untuk growth, tapi tidak cukup untuk ukur profit."
    },
    {
      "group": "Penjualan",
      "term": "AOV",
      "meaning": "Average Order Value; rata-rata nilai pesanan.",
      "formula": "Penjualan ÷ jumlah order.",
      "whyItMatters": "AOV tinggi biasanya membuat fee tetap per order lebih ringan secara persentase."
    },
    {
      "group": "Settlement",
      "term": "Saldo diterima / settlement",
      "meaning": "Estimasi dana yang dilepas marketplace ke saldo seller setelah potongan platform.",
      "formula": "Seller revenue basis - fee marketplace - refund/deduction.",
      "whyItMatters": "Ini angka kas yang paling dekat dengan dana masuk dari platform."
    },
    {
      "group": "Settlement",
      "term": "Payout rate",
      "meaning": "Persentase revenue yang benar-benar cair ke saldo seller.",
      "formula": "Settlement ÷ seller revenue basis.",
      "whyItMatters": "Membantu menilai seberapa besar potongan platform secara kas."
    },
    {
      "group": "Biaya platform",
      "term": "Biaya administrasi",
      "meaning": "Potongan platform yang umum dipakai Shopee.",
      "formula": "(Basis fee) × tarif admin.",
      "whyItMatters": "Potongan inti yang paling sering menekan margin seller Shopee."
    },
    {
      "group": "Biaya platform",
      "term": "Platform commission fee",
      "meaning": "Potongan komisi platform; istilah yang umum dipakai TikTok Shop.",
      "formula": "(Basis fee) × tarif komisi.",
      "whyItMatters": "Potongan inti platform di TikTok Shop/Tokopedia & TikTok Shop."
    },
    {
      "group": "Biaya platform",
      "term": "Biaya layanan / promo fee",
      "meaning": "Potongan untuk program promo, gratis ongkir, live, XTRA, dan sejenisnya.",
      "formula": "(Basis fee) × tarif program.",
      "whyItMatters": "Program bisa menaikkan traffic, tapi menurunkan margin jika tidak dikontrol."
    },
    {
      "group": "Biaya platform",
      "term": "Payment / buyer service fee impact",
      "meaning": "Biaya terkait layanan pembayaran/teknologi yang pada praktiknya bisa memengaruhi saldo seller.",
      "formula": "Biasanya % dari basis fee atau potongan fixed tertentu.",
      "whyItMatters": "Sering kecil per order, tetapi besar bila volume tinggi."
    },
    {
      "group": "Biaya platform",
      "term": "Order processing fee",
      "meaning": "Biaya tetap per pesanan.",
      "formula": "Tarif tetap × jumlah order.",
      "whyItMatters": "Sangat terasa pada produk murah/AOV kecil."
    },
    {
      "group": "Biaya platform",
      "term": "Pre-order fee",
      "meaning": "Biaya tambahan untuk produk pre-order.",
      "formula": "(Basis fee) × tarif pre-order.",
      "whyItMatters": "Harus dimasukkan agar produk PO tidak terlihat palsu lebih untung."
    },
    {
      "group": "Biaya platform",
      "term": "Take rate",
      "meaning": "Persentase potongan marketplace terhadap revenue basis.",
      "formula": "Total fee marketplace ÷ seller revenue basis.",
      "whyItMatters": "Ringkasan cepat apakah potongan platform sudah terlalu berat."
    },
    {
      "group": "Biaya platform",
      "term": "Refund / return deduction",
      "meaning": "Potongan karena retur/pengembalian/refund.",
      "formula": "Nominal retur yang mengurangi settlement atau profit.",
      "whyItMatters": "Seller sering profit tipis jadi retur kecil pun sangat berpengaruh."
    },
    {
      "group": "Biaya langsung",
      "term": "HPP / COGS",
      "meaning": "Harga pokok penjualan barang.",
      "formula": "Biaya modal per unit × qty.",
      "whyItMatters": "Komponen terbesar untuk hitung gross profit riil."
    },
    {
      "group": "Biaya langsung",
      "term": "Packing cost",
      "meaning": "Biaya kemasan per order.",
      "formula": "Biaya bubble wrap, dus, polymailer, dll.",
      "whyItMatters": "Sering terlupa padahal langsung menggerus margin."
    },
    {
      "group": "Biaya langsung",
      "term": "Pick-pack / warehouse",
      "meaning": "Biaya operasional pemrosesan pesanan.",
      "formula": "Biaya per order untuk picking, packing, gudang.",
      "whyItMatters": "Penting untuk seller dengan volume besar atau outsource gudang."
    },
    {
      "group": "Biaya langsung",
      "term": "Shipping subsidy seller",
      "meaning": "Bagian ongkir yang ditanggung seller.",
      "formula": "Nominal per order atau per unit.",
      "whyItMatters": "Kalau tak dihitung, banyak produk terlihat untung padahal rugi."
    },
    {
      "group": "Profit",
      "term": "Gross profit",
      "meaning": "Laba setelah biaya barang dan biaya langsung utama.",
      "formula": "Revenue - HPP - biaya langsung.",
      "whyItMatters": "Mengukur kesehatan dasar produk sebelum marketing."
    },
    {
      "group": "Profit",
      "term": "Contribution before ads",
      "meaning": "Sisa margin yang tersedia untuk menutup iklan.",
      "formula": "Settlement - biaya langsung - non-ad marketing.",
      "whyItMatters": "Ini inti untuk menentukan max CPC, max CPA, dan break-even ROAS."
    },
    {
      "group": "Profit",
      "term": "Net profit",
      "meaning": "Laba bersih setelah semua fee platform, biaya langsung, dan marketing.",
      "formula": "Revenue - semua biaya.",
      "whyItMatters": "Target utama; bukan GMV, bukan omzet."
    },
    {
      "group": "Profit",
      "term": "Net margin",
      "meaning": "Persentase laba bersih terhadap revenue basis.",
      "formula": "Net profit ÷ seller revenue basis.",
      "whyItMatters": "Memudahkan banding lintas produk/platform."
    },
    {
      "group": "Marketing",
      "term": "Impressions",
      "meaning": "Jumlah tayangan iklan.",
      "formula": "Berapa kali iklan tampil.",
      "whyItMatters": "Awal funnel; besar tapi tanpa klik/conversion belum berarti."
    },
    {
      "group": "Marketing",
      "term": "Clicks",
      "meaning": "Jumlah klik iklan.",
      "formula": "Klik ke PDP/live/destination.",
      "whyItMatters": "Menjadi basis CPC dan CVR."
    },
    {
      "group": "Marketing",
      "term": "CTR",
      "meaning": "Click-through rate; rasio klik terhadap tayangan.",
      "formula": "Clicks ÷ impressions.",
      "whyItMatters": "Mengukur daya tarik iklan/thumbnail/offer."
    },
    {
      "group": "Marketing",
      "term": "CPC",
      "meaning": "Cost per click; biaya per klik.",
      "formula": "Ad spend ÷ clicks.",
      "whyItMatters": "Semakin tinggi CPC, semakin mahal traffic Anda."
    },
    {
      "group": "Marketing",
      "term": "CPM",
      "meaning": "Cost per mille; biaya per 1.000 tayangan.",
      "formula": "(Ad spend ÷ impressions) × 1.000.",
      "whyItMatters": "Membantu membaca biaya reach dan kompetisi auction."
    },
    {
      "group": "Marketing",
      "term": "PDP views",
      "meaning": "Kunjungan ke halaman detail produk.",
      "formula": "Jumlah view PDP yang diatribusikan.",
      "whyItMatters": "Membantu bedakan masalah iklan vs masalah halaman produk."
    },
    {
      "group": "Marketing",
      "term": "ATC / add to cart",
      "meaning": "Jumlah tambah ke keranjang.",
      "formula": "Event add-to-cart.",
      "whyItMatters": "Menunjukkan ketertarikan setelah melihat PDP."
    },
    {
      "group": "Marketing",
      "term": "ATC rate",
      "meaning": "Rasio add-to-cart.",
      "formula": "ATC ÷ PDP views.",
      "whyItMatters": "Berguna mengukur kekuatan listing, harga, dan trust."
    },
    {
      "group": "Marketing",
      "term": "Checkout initiated",
      "meaning": "Jumlah mulai checkout.",
      "formula": "Event checkout initiated.",
      "whyItMatters": "Step tengah funnel sebelum pembelian."
    },
    {
      "group": "Marketing",
      "term": "Checkout rate",
      "meaning": "Rasio checkout dari ATC.",
      "formula": "Checkout initiated ÷ ATC.",
      "whyItMatters": "Membantu mendeteksi friksi saat checkout."
    },
    {
      "group": "Marketing",
      "term": "Purchases",
      "meaning": "Pembelian yang diatribusikan ke iklan.",
      "formula": "Event purchase.",
      "whyItMatters": "Basis CPA, CVR, dan ROAS."
    },
    {
      "group": "Marketing",
      "term": "CVR",
      "meaning": "Conversion rate; rasio pembelian.",
      "formula": "Purchases ÷ clicks atau purchases ÷ PDP views.",
      "whyItMatters": "Jika rendah, biasanya problem di listing, harga, rating, atau trust."
    },
    {
      "group": "Marketing",
      "term": "CPA / CPO",
      "meaning": "Biaya per akuisisi/order.",
      "formula": "Ad spend ÷ purchases.",
      "whyItMatters": "Harus di bawah contribution per order agar iklan aman."
    },
    {
      "group": "Marketing",
      "term": "ROAS",
      "meaning": "Return on ad spend.",
      "formula": "Revenue atau gross revenue ÷ ad spend.",
      "whyItMatters": "Ukuran utama efisiensi iklan dari sisi revenue."
    },
    {
      "group": "Marketing",
      "term": "ACOS",
      "meaning": "Advertising cost of sales.",
      "formula": "Ad spend ÷ revenue.",
      "whyItMatters": "Kebalikan ROAS; makin rendah umumnya makin baik."
    },
    {
      "group": "Marketing",
      "term": "MER",
      "meaning": "Marketing efficiency ratio.",
      "formula": "Total revenue ÷ total marketing spend.",
      "whyItMatters": "Lebih luas dari ROAS karena melihat semua marketing spend."
    },
    {
      "group": "Marketing",
      "term": "Break-even ACOS",
      "meaning": "Batas maksimum ACOS sebelum profit nol.",
      "formula": "Contribution before ads ÷ revenue.",
      "whyItMatters": "Kalau ACOS aktual di atas angka ini, kampanye rugi."
    },
    {
      "group": "Marketing",
      "term": "Break-even ROAS",
      "meaning": "ROAS minimum agar impas.",
      "formula": "Revenue ÷ contribution before ads = 1 ÷ break-even ACOS.",
      "whyItMatters": "Target aman saat scale budget."
    },
    {
      "group": "Marketing",
      "term": "Max CPA",
      "meaning": "Biaya order maksimum agar masih impas.",
      "formula": "Contribution before ads ÷ purchases.",
      "whyItMatters": "Membantu set target bid/goal."
    },
    {
      "group": "Marketing",
      "term": "Max CPC",
      "meaning": "Biaya klik maksimum agar masih impas.",
      "formula": "Contribution before ads ÷ clicks.",
      "whyItMatters": "Sangat praktis untuk kontrol bidding."
    },
    {
      "group": "Marketing",
      "term": "Affiliate commission",
      "meaning": "Komisi untuk creator/afiliasi.",
      "formula": "Revenue basis × komisi affiliate.",
      "whyItMatters": "Harus dipisah dari iklan supaya evaluasi channel lebih jernih."
    },
    {
      "group": "Marketing",
      "term": "Live host / creator fee",
      "meaning": "Biaya host live, talent, atau konten creator.",
      "formula": "Nominal per sesi/order/periode.",
      "whyItMatters": "Sering tersembunyi tapi penting untuk profit live selling."
    }
  ],
  "sources": [
    {
      "no": 1,
      "platform": "TikTok Shop Ads",
      "topic": "Gross revenue, ROAS, GMV",
      "url": "https://ads.tiktok.com/help/article/about-gross-revenue-for-tiktok-shop-ads?lang=id",
      "notes": "Definisi resmi gross revenue, GMV, dan ROAS Shop Ads."
    },
    {
      "no": 2,
      "platform": "TikTok Ads",
      "topic": "Glossary CPC/CPM/conversion",
      "url": "https://ads.tiktok.com/help/article/tiktok-ads-manager-glossary-terms?lang=en",
      "notes": "Definisi dasar istilah iklan."
    },
    {
      "no": 3,
      "platform": "TikTok Ads",
      "topic": "Shop Ads metrics (Spark Ads/VSA)",
      "url": "https://ads.tiktok.com/help/article/key-reporting-metrics-spark-ads-video-shopping-ads?lang=en",
      "notes": "Definisi clicks, purchases, CPC, CTR, ROAS (Shop)."
    },
    {
      "no": 4,
      "platform": "TikTok Ads",
      "topic": "LIVE Shopping Ads metrics",
      "url": "https://ads.tiktok.com/help/article/key-reporting-metrics-for-live-shopping-ads?lang=en",
      "notes": "Definisi product clicks, checkout, purchases, ROAS LIVE."
    },
    {
      "no": 5,
      "platform": "TikTok Ads",
      "topic": "GMV Max",
      "url": "https://ads.tiktok.com/help/article/about-product-gmv-max?lang=id",
      "notes": "Menjelaskan GMV Max sebagai solusi otomatis untuk TikTok Shop Ads."
    },
    {
      "no": 6,
      "platform": "TikTok/Tokopedia",
      "topic": "Seller Center resmi",
      "url": "https://newsroom.tiktok.com/tokopedia-dan-tiktok-shop-seller-center-resmi-diluncurkan?lang=id-ID",
      "notes": "Peluncuran seller center terintegrasi di Indonesia."
    },
    {
      "no": 7,
      "platform": "TikTok/Tokopedia",
      "topic": "Pre-order fee & payout express",
      "url": "https://newsroom.tiktok.com/memahami-tokopedia-tiktok-shop-seller-center-mitos-vs-fakta?from_seo_redirect=1&lang=id-ID",
      "notes": "Biaya 3% khusus pre-order TikTok Shop dan payout express 3 hari (bersyarat)."
    },
    {
      "no": 8,
      "platform": "Shopee",
      "topic": "Update biaya admin 1 Sep 2024",
      "url": "https://money.kompas.com/read/2024/07/31/193537726/mulai-1-september-2024-shopee-terapkan-biaya-admin-baru-untuk-seller",
      "notes": "Kompas mengutip pembaruan kebijakan biaya admin Shopee."
    },
    {
      "no": 9,
      "platform": "Shopee",
      "topic": "Biaya proses pesanan Rp1.250",
      "url": "https://www.suara.com/tekno/2025/07/02/212808/shopee-umumkan-biaya-proses-pesanan-ke-penjual-rp-1250-per-transaksi-berlaku-20-juli",
      "notes": "Suara mengutip pengumuman resmi biaya proses pesanan."
    },
    {
      "no": 10,
      "platform": "Shopee",
      "topic": "Biaya proses pesanan per transaksi",
      "url": "https://katadata.co.id/digital/e-commerce/687dc73f0685d/shopee-resmi-kenakan-biaya-proses-pesanan-rp-1250-ke-pedagang",
      "notes": "Menjelaskan Rp1.250 per pesanan, bukan per item."
    },
    {
      "no": 11,
      "platform": "Shopee",
      "topic": "Rumus admin fee & cek transaksi",
      "url": "https://www.idntimes.com/business/economy/biaya-admin-shopee-2025-per-kategori-untuk-penjual-q9t03-00-qftxr-g725qy",
      "notes": "Merangkum rumus biaya admin dari Pusat Edukasi Penjual Shopee."
    }
  ]
};

const CHANNELS = {
  shopee: {
    slug: "shopee",
    label: "Shopee",
    subtitle: "Bottom-funnel, high-intent traffic",
    baseRoas: 5.7,
    referenceCvr: 0.032,
    referenceBudget: 25000000,
    marketCapture: 0.28,
    demand: 1.02,
    liftBias: 0.92,
    decay: 0.17,
    newCustomerBias: 0.92,
    workbookFeeBlend: 0.11,
    workbookDefaults: {
      adminFee: 0.08,
      serviceFee: 0.03,
      processingFee: 1250,
    },
  },
  tiktok: {
    slug: "tiktok",
    label: "TikTok Ads",
    subtitle: "Discovery-led growth + halo effect",
    baseRoas: 3.6,
    referenceCvr: 0.026,
    referenceBudget: 30000000,
    marketCapture: 0.36,
    demand: 1.08,
    liftBias: 1.12,
    decay: 0.2,
    newCustomerBias: 1.08,
    workbookFeeBlend: 0.08,
    workbookDefaults: {
      adminFee: 0.06,
      serviceFee: 0.0,
      processingFee: 1250,
    },
  },
};

const SEGMENTS = {
  beauty: { label: "Beauty & Personal Care", demand: 1.12, repeatBias: 1.18, marketShare: 0.92, budgetBias: 0.95, decay: 0.96 },
  fashion: { label: "Fashion & Lifestyle", demand: 1.06, repeatBias: 0.94, marketShare: 1.0, budgetBias: 1.0, decay: 1.0 },
  fmcg: { label: "FMCG / Consumables", demand: 1.18, repeatBias: 1.30, marketShare: 1.08, budgetBias: 0.90, decay: 0.93 },
  home: { label: "Home Living", demand: 0.94, repeatBias: 0.80, marketShare: 0.85, budgetBias: 1.08, decay: 1.04 },
  electronics: { label: "Electronics", demand: 0.82, repeatBias: 0.62, marketShare: 0.78, budgetBias: 1.15, decay: 1.08 },
};

const SEASONALITY = {
  low: { label: "Low season", demand: 0.88, cost: 1.06, liftBias: 0.90 },
  normal: { label: "Normal", demand: 1.0, cost: 1.0, liftBias: 1.0 },
  peak: { label: "Peak season", demand: 1.16, cost: 1.08, liftBias: 1.08 },
  mega: { label: "Mega campaign", demand: 1.28, cost: 1.18, liftBias: 1.15 },
};

const SLIDER_CONFIG = [
  {
    key: "budget",
    label: "Ad Budget",
    min: 1000000,
    max: 150000000,
    step: 500000,
    unit: "currency",
    note: "Budget aktif yang dipakai sebagai input utama simulasi.",
  },
  {
    key: "aov",
    label: "AOV",
    min: 30000,
    max: 1500000,
    step: 5000,
    unit: "currency",
    note: "Rata-rata nilai pesanan. Makin tinggi, order yang dibutuhkan makin sedikit.",
  },
  {
    key: "grossMargin",
    label: "Gross Margin",
    min: 12,
    max: 85,
    step: 1,
    unit: "percent",
    note: "Diposisikan sebagai margin contribution yang siap dipakai untuk akuisisi.",
  },
  {
    key: "conversionRate",
    label: "Conversion Rate",
    min: 0.6,
    max: 8.0,
    step: 0.1,
    unit: "percent",
    note: "CVR akhir yang diterjemahkan ke engine ROAS dasar.",
  },
  {
    key: "repeatPurchaseRate",
    label: "Repeat Purchase Rate",
    min: 0,
    max: 70,
    step: 1,
    unit: "percent",
    note: "Dipakai untuk mengangkat projected LTV dan menekan nCAC efektif.",
  },
  {
    key: "blendedLift",
    label: "Blended Lift",
    min: 0,
    max: 40,
    step: 1,
    unit: "percent",
    note: "Efek halo lintas channel, organic spillover, dan assisted conversion.",
  },
  {
    key: "cacEfficiency",
    label: "CAC Efficiency",
    min: 70,
    max: 140,
    step: 1,
    unit: "percent",
    note: "100% = baseline. Semakin tinggi, semakin efisien akuisisi per Rupiah.",
  },
];

const DEFAULT_STATE = {
  channel: "shopee",
  segment: "beauty",
  seasonality: "normal",
  budget: 15000000,
  aov: 145000,
  grossMargin: 38,
  conversionRate: 3.2,
  repeatPurchaseRate: 28,
  blendedLift: 16,
  cacEfficiency: 100,
  marketCap: 850000000,
  darkGlassMode: false,
  activeTab: "insights",
};

const TABS = [
  { key: "insights", label: "Insights" },
  { key: "strategy", label: "Strategy" },
  { key: "formula", label: "Formula" },
  { key: "roadmap", label: "Roadmap" },
];

const state = loadState();

const supabaseClient =
  window.supabase &&
  window.OCTAFAS_SUPABASE_URL &&
  window.OCTAFAS_SUPABASE_ANON_KEY
    ? window.supabase.createClient(
        window.OCTAFAS_SUPABASE_URL,
        window.OCTAFAS_SUPABASE_ANON_KEY
      )
    : null;

const els = {
  saveDbButton: document.getElementById("saveDbButton"),
  channelSelector: document.getElementById("channelSelector"),
  segmentSelect: document.getElementById("segmentSelect"),
  seasonalitySelect: document.getElementById("seasonalitySelect"),
  sliderStack: document.getElementById("sliderStack"),
  marketCapInput: document.getElementById("marketCapInput"),
  glassToggle: document.getElementById("glassToggle"),
  referenceHighlights: document.getElementById("referenceHighlights"),
  kpiGrid: document.getElementById("kpiGrid"),
  gmvCurveChart: document.getElementById("gmvCurveChart"),
  roasProfitChart: document.getElementById("roasProfitChart"),
  scenarioChart: document.getElementById("scenarioChart"),
  scenarioSummary: document.getElementById("scenarioSummary"),
  snapshotGrid: document.getElementById("snapshotGrid"),
  snapshotFooter: document.getElementById("snapshotFooter"),
  snapshotZone: document.getElementById("snapshotZone"),
  snapshotEfficiency: document.getElementById("snapshotEfficiency"),
  tabBar: document.getElementById("tabBar"),
  tabContent: document.getElementById("tabContent"),
  shareButton: document.getElementById("shareButton"),
  exportButton: document.getElementById("exportButton"),
  resetButton: document.getElementById("resetButton"),
};

renderStaticControls();
function bindGlobalActions() {
  els.shareButton.addEventListener("click", shareScenario);
  els.exportButton.addEventListener("click", exportScenario);

  if (els.saveDbButton) {
    els.saveDbButton.addEventListener("click", saveScenarioToDatabase);
  }

  els.resetButton.addEventListener("click", () => {
    Object.assign(state, JSON.parse(JSON.stringify(DEFAULT_STATE)));
    render();
  });
};
render();

function loadState() {
  const params = new URLSearchParams(window.location.search);
  const next = { ...DEFAULT_STATE };
  for (const [key, value] of params.entries()) {
    if (!(key in next)) continue;
    if (key === "darkGlassMode") {
      next[key] = value === "1" || value === "true";
      continue;
    }
    if (key === "channel" || key === "segment" || key === "seasonality" || key === "activeTab") {
      next[key] = value;
      continue;
    }
    const numeric = Number(value);
    next[key] = Number.isFinite(numeric) ? numeric : next[key];
  }
  const saved = window.localStorage.getItem("octafas-gmv-tools-state");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      Object.assign(next, parsed);
    } catch (_error) {
      // ignore corrupt local state
    }
  }
  return next;
}

function persistState() {
  window.localStorage.setItem("octafas-gmv-tools-state", JSON.stringify(state));
  const params = new URLSearchParams();
  Object.entries(state).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    if (typeof value === "boolean") {
      params.set(key, value ? "1" : "0");
      return;
    }
    params.set(key, String(value));
  });
  const nextUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, "", nextUrl);
}

function renderStaticControls() {
  renderChannelSelector();
  renderSelectOptions();
  renderSliders();
  renderTabs();
  renderReferenceHighlights();

  els.marketCapInput.value = state.marketCap;
  els.marketCapInput.addEventListener("input", (event) => {
    const numeric = Number(event.target.value);
    if (Number.isFinite(numeric) && numeric > 0) {
      state.marketCap = numeric;
      render();
    }
  });

  els.glassToggle.addEventListener("click", () => {
    state.darkGlassMode = !state.darkGlassMode;
    render();
  });
}

function renderChannelSelector() {
  els.channelSelector.innerHTML = "";
  Object.values(CHANNELS).forEach((channel) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = state.channel === channel.slug ? "active" : "";
    button.innerHTML = `
      <span class="segment-title">${channel.label}</span>
      <span class="segment-subtitle">${channel.subtitle}</span>
    `;
    button.addEventListener("click", () => {
      state.channel = channel.slug;
      render();
    });
    els.channelSelector.appendChild(button);
  });
}

function renderSelectOptions() {
  els.segmentSelect.innerHTML = Object.entries(SEGMENTS)
    .map(([key, segment]) => `<option value="${key}">${segment.label}</option>`)
    .join("");
  els.seasonalitySelect.innerHTML = Object.entries(SEASONALITY)
    .map(([key, season]) => `<option value="${key}">${season.label}</option>`)
    .join("");

  els.segmentSelect.value = state.segment;
  els.seasonalitySelect.value = state.seasonality;

  els.segmentSelect.addEventListener("change", (event) => {
    state.segment = event.target.value;
    render();
  });

  els.seasonalitySelect.addEventListener("change", (event) => {
    state.seasonality = event.target.value;
    render();
  });
}

function renderSliders() {
  els.sliderStack.innerHTML = "";
  SLIDER_CONFIG.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "slider-card";

    const valueText = formatSliderValue(item.key, state[item.key], item.unit);
    wrapper.innerHTML = `
      <div class="slider-head">
        <div>
          <div class="slider-title">${item.label}</div>
          <div class="slider-note">${item.note}</div>
        </div>
        <div class="slider-value" id="value-${item.key}">${valueText}</div>
      </div>
      <input
        type="range"
        min="${item.min}"
        max="${item.max}"
        step="${item.step}"
        value="${state[item.key]}"
        id="slider-${item.key}"
      />
      <div class="slider-footer">
        <span class="mini-label">${formatSliderValue(item.key, item.min, item.unit)}</span>
        <span class="mini-label">${formatSliderValue(item.key, item.max, item.unit)}</span>
      </div>
    `;

    const input = wrapper.querySelector("input");
    input.addEventListener("input", (event) => {
      const numeric = Number(event.target.value);
      state[item.key] = numeric;
      render();
    });

    els.sliderStack.appendChild(wrapper);
  });
}

function renderReferenceHighlights() {
  const points = [
    ...REFERENCE_DATA.readmeHighlights.slice(0, 2),
    "Shopee default workbook blend: admin 8% + service 3% + processing Rp1.250.",
    "TikTok default workbook blend: admin 6% + processing Rp1.250 + halo growth bias.",
  ];
  els.referenceHighlights.innerHTML = points.map((item) => `<li>${item}</li>`).join("");
}

function renderTabs() {
  els.tabBar.innerHTML = "";
  TABS.forEach((tab) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tab-button ${state.activeTab === tab.key ? "active" : ""}`;
    button.textContent = tab.label;
    button.addEventListener("click", () => {
      state.activeTab = tab.key;
      render();
    });
    els.tabBar.appendChild(button);
  });
}

function bindGlobalActions() {
  els.shareButton.addEventListener("click", shareScenario);
  els.exportButton.addEventListener("click", exportScenario);
  els.resetButton.addEventListener("click", () => {
    Object.assign(state, JSON.parse(JSON.stringify(DEFAULT_STATE)));
    render();
  });
}

function render() {
  const model = simulate(state);

  renderChannelSelector();
  renderTabs();
  els.segmentSelect.value = state.segment;
  els.seasonalitySelect.value = state.seasonality;
  els.marketCapInput.value = state.marketCap;
  els.glassToggle.setAttribute("aria-pressed", state.darkGlassMode ? "true" : "false");
  document.body.classList.toggle("glass-mode", Boolean(state.darkGlassMode));

  renderKpis(model);
  renderSnapshot(model);
  renderGmvCurveChart(model);
  renderRoasProfitChart(model);
  renderScenarioChart(model);
  renderTabContent(model);

  persistState();
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function rupiah(value, options = { compact: false, digits: 0 }) {
  if (!Number.isFinite(value)) return "Rp0";
  if (options.compact) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      notation: "compact",
      maximumFractionDigits: options.digits ?? 1,
    }).format(value);
  }
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: options.digits ?? 0,
  }).format(value);
}

function numberCompact(value, digits = 1) {
  if (!Number.isFinite(value)) return "0";
  return new Intl.NumberFormat("id-ID", {
    notation: "compact",
    maximumFractionDigits: digits,
  }).format(value);
}

function percent(value, digits = 1) {
  return `${Number(value).toFixed(digits)}%`;
}

function xValue(value, digits = 2) {
  return `${Number(value).toFixed(digits)}x`;
}

function formatSliderValue(key, value, unit) {
  if (unit === "currency") return rupiah(value, { compact: true, digits: 1 });
  if (unit === "percent") {
    const digits = key === "conversionRate" ? 1 : 0;
    return percent(value, digits);
  }
  return String(value);
}

function simulate(input) {
  const channel = CHANNELS[input.channel];
  const segment = SEGMENTS[input.segment];
  const season = SEASONALITY[input.seasonality];

  const margin = input.grossMargin / 100;
  const conversionRate = input.conversionRate / 100;
  const repeatRate = input.repeatPurchaseRate / 100;
  const blendedLift = input.blendedLift / 100;
  const cacEfficiency = input.cacEfficiency / 100;

  const current = simulateAtBudget(input.budget, {
    channel,
    segment,
    season,
    margin,
    conversionRate,
    repeatRate,
    blendedLift,
    cacEfficiency,
    marketCap: input.marketCap,
    aov: input.aov,
  });

  const maxBudget = Math.max(
    input.budget * 2.4,
    current.referenceBudget * 2.25,
    input.marketCap * 0.22
  );

  const points = [];
  for (let index = 1; index <= 110; index += 1) {
    const budget = (maxBudget / 110) * index;
    points.push(
      simulateAtBudget(budget, {
        channel,
        segment,
        season,
        margin,
        conversionRate,
        repeatRate,
        blendedLift,
        cacEfficiency,
        marketCap: input.marketCap,
        aov: input.aov,
      })
    );
  }

  const optimal = points.reduce((best, point) => (point.profit > best.profit ? point : best), points[0]);
  const scenarioBudgets = [
    { key: "current", label: "Current", budget: input.budget },
    { key: "plus15", label: "+15%", budget: input.budget * 1.15 },
    { key: "plus30", label: "+30%", budget: input.budget * 1.30 },
    { key: "optimal", label: "Optimal", budget: optimal.budget },
  ];

  const scenarios = scenarioBudgets.map((scenario) => {
    const metrics = simulateAtBudget(scenario.budget, {
      channel,
      segment,
      season,
      margin,
      conversionRate,
      repeatRate,
      blendedLift,
      cacEfficiency,
      marketCap: input.marketCap,
      aov: input.aov,
    });
    return { ...scenario, ...metrics };
  });

  const saturationRatio = current.budget / Math.max(optimal.budget, 1);
  const roasHealth = current.roas / Math.max(current.breakEvenRoas, 0.0001);
  const ltvToNcac = current.projectedLtv / Math.max(current.ncac, 1);
  const headroom = clamp(1 - saturationRatio * 0.72, 0, 1);

  const efficiencyScore = Math.round(
    clamp(
      ((roasHealth - 0.8) * 38)
        + Math.min(24, Math.max(0, (ltvToNcac - 1) * 10))
        + Math.min(18, Math.max(0, (current.profit / Math.max(current.budget, 1)) * 11))
        + headroom * 13
        + Math.min(10, Math.max(0, (cacEfficiency - 0.75) * 20)),
      4,
      100
    )
  );

  let zone = "Approaching Saturation";
  if (current.profit < 0 || current.roas < current.breakEvenRoas * 0.95) {
    zone = "Over Scale";
  } else if (Math.abs(current.budget - optimal.budget) / Math.max(optimal.budget, 1) <= 0.12) {
    zone = "Optimal Scale Zone";
  } else if (current.budget < optimal.budget * 0.9 && current.roas > current.breakEvenRoas * 1.18) {
    zone = "Healthy Scale";
  }

  return {
    input,
    channel,
    segment,
    season,
    current,
    points,
    optimal,
    scenarios,
    saturationRatio,
    roasHealth,
    ltvToNcac,
    efficiencyScore,
    zone,
    summary: buildSummary({
      current,
      optimal,
      zone,
      efficiencyScore,
      channel,
      segment,
      season,
      saturationRatio,
      ltvToNcac,
      roasHealth,
    }),
  };
}

function simulateAtBudget(budget, context) {
  const {
    channel,
    segment,
    season,
    margin,
    conversionRate,
    repeatRate,
    blendedLift,
    cacEfficiency,
    marketCap,
    aov,
  } = context;

  const cvrFactor = clamp(conversionRate / channel.referenceCvr, 0.58, 1.9);
  const repeatFactor = 1 + repeatRate * 0.95 * segment.repeatBias;
  const liftFactor = 1 + blendedLift * 0.7 * channel.liftBias * season.liftBias;
  const efficiencyFactor = clamp(cacEfficiency, 0.7, 1.35);
  const demandFactor = channel.demand * segment.demand * season.demand;
  const marginQuality = 0.76 + margin * 0.72;
  const baseRoas = channel.baseRoas * cvrFactor * repeatFactor * liftFactor * efficiencyFactor * demandFactor * marginQuality;

  const referenceBudget = channel.referenceBudget * segment.budgetBias * season.cost;
  const roasDecay = Math.pow(Math.max(budget, 1) / referenceBudget, -channel.decay * segment.decay);
  const potentialGmv = marketCap * channel.marketCapture * segment.marketShare * season.demand * (0.92 + blendedLift * 0.55);
  const marketPressure = 1 / (1 + Math.pow((budget * baseRoas) / Math.max(potentialGmv, 1), 1.24));

  const roas = Math.max(0.55, baseRoas * roasDecay * marketPressure);
  const projectedGmv = budget * roas;
  const projectedProfit = projectedGmv * margin - budget;
  const orders = projectedGmv / Math.max(aov, 1);
  const breakEvenRoas = 1 / Math.max(margin, 0.01);

  const repeatCycles = 1 + repeatRate * 3.1 * segment.repeatBias + blendedLift * 0.7;
  const projectedLtv = aov * margin * repeatCycles;

  const newCustomerShare = clamp((1 - repeatRate * 0.55) * channel.newCustomerBias, 0.32, 0.96);
  const newCustomers = Math.max(orders * newCustomerShare, 0.0001);
  const ncac = budget / newCustomers;

  return {
    budget,
    baseRoas,
    roas,
    projectedGmv,
    profit: projectedProfit,
    orders,
    breakEvenRoas,
    projectedLtv,
    ncac,
    newCustomers,
    referenceBudget,
    potentialGmv,
    margin,
  };
}

function buildSummary(payload) {
  const {
    current,
    optimal,
    zone,
    efficiencyScore,
    channel,
    segment,
    season,
    saturationRatio,
    ltvToNcac,
    roasHealth,
  } = payload;

  const headroomPct = Math.max(0, (1 - saturationRatio) * 100);
  const summaryLine =
    zone === "Healthy Scale"
      ? `Masih ada headroom scale sekitar ${Math.round(headroomPct)}% sebelum mendekati titik optimal.`
      : zone === "Optimal Scale Zone"
        ? "Budget Anda sudah dekat dengan titik profit maksimum. Fokus ke kualitas creative dan retention."
        : zone === "Over Scale"
          ? "Budget terlihat terlalu agresif untuk economics saat ini. Kencangkan CAC dan margin terlebih dahulu."
          : "Masih profit, tetapi mulai mendekati area saturation. Scale bertahap lebih aman daripada agresif.";

  const actionLine =
    roasHealth >= 1.25
      ? "ROAS masih di atas break-even dengan buffer yang sehat."
      : roasHealth >= 1.05
        ? "ROAS masih lolos threshold, tetapi buffer mulai menipis."
        : "ROAS hampir menyentuh atau menembus break-even threshold.";

  const retentionLine =
    ltvToNcac >= 3
      ? "LTV terhadap nCAC sangat kuat untuk dipakai sebagai cerita growth premium."
      : ltvToNcac >= 2
        ? "LTV terhadap nCAC masih sehat, tetapi penguatan repeat purchase akan sangat membantu."
        : "LTV terhadap nCAC masih tipis; fokus pada repeat, bundling, dan post-purchase funnel.";

  return {
    title: `${channel.label} • ${segment.label} • ${season.label}`,
    summaryLine,
    actionLine,
    retentionLine,
    optimalBudgetLine: `Budget optimal terestimasi di sekitar ${rupiah(optimal.budget, { compact: true, digits: 1 })}.`,
    efficiencyLine: `Efficiency score saat ini ${efficiencyScore}/100.`,
    detailLine: `ROAS ${xValue(current.roas)} vs break-even ${xValue(current.breakEvenRoas)}.`,
  };
}

function renderKpis(model) {
  const cards = [
    {
      label: "Projected GMV",
      value: rupiah(model.current.projectedGmv, { compact: true, digits: 1 }),
      trend: model.current.roas >= model.current.breakEvenRoas * 1.15 ? "good" : model.current.roas >= model.current.breakEvenRoas ? "warn" : "bad",
      trendText: `ROAS ${xValue(model.current.roas)}`,
      foot: `Potential cap: ${rupiah(model.current.potentialGmv, { compact: true, digits: 1 })}`,
    },
    {
      label: "Projected Profit",
      value: rupiah(model.current.profit, { compact: true, digits: 1 }),
      trend: model.current.profit >= 0 ? "good" : "bad",
      trendText: model.current.profit >= 0 ? "Positive spread" : "Below zero",
      foot: `Margin engine: ${percent(model.current.margin * 100, 1)}`,
    },
    {
      label: "Orders",
      value: numberCompact(model.current.orders, 1),
      trend: "good",
      trendText: `${numberCompact(model.current.newCustomers, 1)} new customers`,
      foot: `AOV ${rupiah(model.input.aov, { compact: true, digits: 1 })}`,
    },
    {
      label: "Efficiency Score",
      value: `${model.efficiencyScore}/100`,
      trend: model.efficiencyScore >= 75 ? "good" : model.efficiencyScore >= 50 ? "warn" : "bad",
      trendText: model.efficiencyScore >= 75 ? "Premium zone" : model.efficiencyScore >= 50 ? "Needs tuning" : "Rebuild economics",
      foot: `ROAS health ${xValue(model.roasHealth)}`,
    },
    {
      label: "Break-even ROAS",
      value: xValue(model.current.breakEvenRoas),
      trend: model.current.roas >= model.current.breakEvenRoas ? "good" : "bad",
      trendText: `Gross margin ${percent(model.input.grossMargin, 0)}`,
      foot: "Formula: 100 / margin (%)",
    },
    {
      label: "Projected LTV",
      value: rupiah(model.current.projectedLtv, { compact: true, digits: 1 }),
      trend: model.ltvToNcac >= 3 ? "good" : model.ltvToNcac >= 2 ? "warn" : "bad",
      trendText: `LTV:nCAC ${xValue(model.ltvToNcac)}`,
      foot: `Repeat rate ${percent(model.input.repeatPurchaseRate, 0)}`,
    },
    {
      label: "nCAC",
      value: rupiah(model.current.ncac, { compact: true, digits: 1 }),
      trend: model.ltvToNcac >= 2 ? "good" : "warn",
      trendText: `${numberCompact(model.current.newCustomers, 1)} est. new customers`,
      foot: "Budget per estimated new customer",
    },
    {
      label: "Optimal Scale Zone",
      value: model.zone,
      trend: model.zone === "Healthy Scale" || model.zone === "Optimal Scale Zone" ? "good" : model.zone === "Approaching Saturation" ? "warn" : "bad",
      trendText: `Optimal budget ${rupiah(model.optimal.budget, { compact: true, digits: 1 })}`,
      foot: `Saturation ratio ${percent(model.saturationRatio * 100, 0)}`,
    },
  ];

  els.kpiGrid.innerHTML = cards
    .map(
      (card) => `
        <article class="kpi-card">
          <div class="card-label">${card.label}</div>
          <div class="kpi-value">${card.value}</div>
          <div class="kpi-trend ${card.trend}">${card.trendText}</div>
          <div class="kpi-foot">${card.foot}</div>
        </article>
      `
    )
    .join("");
}

function renderSnapshot(model) {
  els.snapshotZone.textContent = model.zone;
  els.snapshotEfficiency.textContent = model.efficiencyScore;

  const items = [
    { label: "Current budget", value: rupiah(model.input.budget, { compact: true, digits: 1 }) },
    { label: "Optimal budget", value: rupiah(model.optimal.budget, { compact: true, digits: 1 }) },
    { label: "Projected GMV", value: rupiah(model.current.projectedGmv, { compact: true, digits: 1 }) },
    { label: "Profit spread", value: rupiah(model.current.profit, { compact: true, digits: 1 }) },
  ];

  els.snapshotGrid.innerHTML = items
    .map(
      (item) => `
        <div class="snapshot-stat">
          <span class="mini-label">${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `
    )
    .join("");

  els.snapshotFooter.innerHTML = `
    <div>
      <div class="mini-label">Live recommendation</div>
      <div>${model.summary.summaryLine}</div>
    </div>
    <div>
      <div class="mini-label">Scale read</div>
      <div>${model.summary.detailLine}</div>
    </div>
  `;
}

function renderGmvCurveChart(model) {
  els.gmvCurveChart.innerHTML = buildLineAreaChart({
    points: model.points.map((point) => ({
      x: point.budget,
      y: point.projectedGmv,
    })),
    currentPoint: { x: model.current.budget, y: model.current.projectedGmv },
    optimalPoint: { x: model.optimal.budget, y: model.optimal.projectedGmv },
    width: 860,
    height: 320,
    yLabel: "Projected GMV",
    xLabel: "Budget",
    formatX: (value) => rupiah(value, { compact: true, digits: 1 }),
    formatY: (value) => rupiah(value, { compact: true, digits: 1 }),
    lineColor: "#7fe7ff",
    fillColor: "rgba(127,231,255,0.16)",
  });
}

function renderRoasProfitChart(model) {
  els.roasProfitChart.innerHTML = buildDualAxisChart({
    points: model.points.map((point) => ({
      x: point.budget,
      roas: point.roas,
      profit: point.profit,
    })),
    currentPoint: { x: model.current.budget, roas: model.current.roas, profit: model.current.profit },
    optimalPoint: { x: model.optimal.budget, roas: model.optimal.roas, profit: model.optimal.profit },
    width: 860,
    height: 320,
  });
}

function renderScenarioChart(model) {
  els.scenarioChart.innerHTML = buildScenarioChart(model.scenarios);
  els.scenarioSummary.innerHTML = model.scenarios
    .map(
      (scenario) => `
        <div class="scenario-pill">
          <span class="mini-label">${scenario.label}</span>
          <strong>${rupiah(scenario.projectedGmv, { compact: true, digits: 1 })}</strong>
          <div class="chart-note">Profit ${rupiah(scenario.profit, { compact: true, digits: 1 })}</div>
        </div>
      `
    )
    .join("");
}

function renderTabContent(model) {
  const channelDefaults = model.channel.workbookDefaults;
  const breakEvenMath = 100 / model.input.grossMargin;
  const sourceRows = REFERENCE_DATA.sources.slice(0, 5)
    .map(
      (source) => `
        <tr>
          <td>${source.platform}</td>
          <td><a href="${source.url}" target="_blank" rel="noreferrer">${source.topic}</a></td>
        </tr>
      `
    )
    .join("");

  const insightContent = `
    <div class="tab-grid">
      <article class="info-card">
        <span class="mini-label">Scale signal</span>
        <h4>${model.zone}</h4>
        <ul class="insight-list">
          <li>${model.summary.summaryLine}</li>
          <li>${model.summary.actionLine}</li>
          <li>${model.summary.optimalBudgetLine}</li>
        </ul>
      </article>

      <article class="info-card">
        <span class="mini-label">Performance stack</span>
        <h4>Current health indicators</h4>
        <div class="metric-stack">
          ${buildMetricRow("ROAS health", model.roasHealth / 2, xValue(model.roasHealth))}
          ${buildMetricRow("LTV:nCAC", model.ltvToNcac / 4, xValue(model.ltvToNcac))}
          ${buildMetricRow("Efficiency", model.efficiencyScore / 100, `${model.efficiencyScore}/100`)}
          ${buildMetricRow("Saturation", model.saturationRatio / 1.6, percent(model.saturationRatio * 100, 0))}
        </div>
      </article>

      <article class="info-card">
        <span class="mini-label">Retention angle</span>
        <h4>Projected LTV thesis</h4>
        <ul class="insight-list">
          <li>${model.summary.retentionLine}</li>
          <li>Projected LTV saat ini sekitar <strong>${rupiah(model.current.projectedLtv, { compact: true, digits: 1 })}</strong>.</li>
          <li>nCAC saat ini sekitar <strong>${rupiah(model.current.ncac, { compact: true, digits: 1 })}</strong>.</li>
        </ul>
      </article>

      <article class="info-card">
        <span class="mini-label">Workbook anchor</span>
        <h4>Reference defaults</h4>
        <ul class="insight-list">
          <li>Channel aktif: <strong>${model.channel.label}</strong>.</li>
          <li>Default workbook fee blend: admin <strong>${percent(channelDefaults.adminFee * 100, 0)}</strong>, service <strong>${percent(channelDefaults.serviceFee * 100, 0)}</strong>, processing <strong>${rupiah(channelDefaults.processingFee)}</strong>.</li>
          <li>Logika finance workbook tetap dijaga sebagai referensi layer, sementara simulator memprioritaskan speed dan interaktivitas.</li>
        </ul>
      </article>
    </div>
  `;

  const strategyContent = `
    <div class="tab-grid">
      <article class="info-card">
        <span class="mini-label">Action plan</span>
        <h4>Apa yang paling masuk akal dilakukan sekarang</h4>
        <ul class="strategy-list">
          <li>${model.zone === "Healthy Scale" ? "Scale bertahap 10%–15% sambil jaga CVR dan creative freshness." : model.zone === "Optimal Scale Zone" ? "Tahan budget mendekati level sekarang, lalu dorong AOV, repeat, dan blended lift." : model.zone === "Over Scale" ? "Turunkan spend, rapikan economics, lalu bangun ulang sebelum scale lagi." : "Scale pelan, validasi incremental profit, dan jangan loncat terlalu jauh."}</li>
          <li>${model.channel.slug === "tiktok" ? "Perkuat hook, creator angle, dan hybrid content agar blended lift naik." : "Dorong search intent, keyword coverage, dan conversion hygiene listing untuk menjaga ROAS."}</li>
          <li>${model.input.repeatPurchaseRate < 20 ? "Repeat purchase masih rendah. Tambah CRM, bundling, dan program reorder." : "Retention sudah cukup baik. Gunakan LTV untuk memberi ruang scale lebih besar."}</li>
          <li>${model.input.grossMargin < 30 ? "Margin tipis. Uji bundling, upsell, atau negosiasi COGS agar break-even ROAS turun." : "Margin cukup sehat untuk eksperimen scale yang terukur."}</li>
        </ul>
      </article>

      <article class="info-card">
        <span class="mini-label">Campaign focus</span>
        <h4>Growth direction by channel</h4>
        <ul class="strategy-list">
          <li><strong>Shopee:</strong> cocok untuk demand capture, keyword intent, dan listing-led conversion.</li>
          <li><strong>TikTok Ads:</strong> cocok untuk discovery, creator amplification, live commerce, dan halo lift.</li>
          <li>Pilih winning angle berdasarkan <strong>ROAS vs profit</strong>, bukan GMV semata.</li>
          <li>Ideal untuk dipakai sebagai tool konsultasi, lead magnet, atau internal growth dashboard.</li>
        </ul>
      </article>

      <article class="info-card">
        <span class="mini-label">Scenario read</span>
        <h4>Current vs next scale step</h4>
        <table>
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Budget</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            ${model.scenarios
              .map(
                (scenario) => `
                  <tr>
                    <td>${scenario.label}</td>
                    <td>${rupiah(scenario.budget, { compact: true, digits: 1 })}</td>
                    <td>${rupiah(scenario.profit, { compact: true, digits: 1 })}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </article>

      <article class="info-card">
        <span class="mini-label">Executive note</span>
        <h4>Yang perlu dikomunikasikan ke client / team</h4>
        <ul class="strategy-list">
          <li>Target utama: <strong>profitable GMV</strong>, bukan sekadar volume.</li>
          <li>Budget optimal saat ini diperkirakan di <strong>${rupiah(model.optimal.budget, { compact: true, digits: 1 })}</strong>.</li>
          <li>ROAS saat ini <strong>${xValue(model.current.roas)}</strong>, sedangkan break-even sekitar <strong>${xValue(model.current.breakEvenRoas)}</strong>.</li>
          <li>Efficiency score <strong>${model.efficiencyScore}/100</strong> memberi ringkasan cepat untuk presentasi.</li>
        </ul>
      </article>
    </div>
  `;

  const formulaContent = `
    <div class="tab-grid">
      <article class="info-card">
        <span class="mini-label">Core formulas</span>
        <h4>Growth engine</h4>
        <ul class="formula-list">
          <li><strong>Projected GMV</strong> = Budget × effective ROAS.</li>
          <li><strong>Profit</strong> = GMV × margin − ad spend.</li>
          <li><strong>ROAS</strong> = GMV ÷ budget.</li>
          <li><strong>Break-even ROAS</strong> = 100 ÷ margin (%) ≈ <strong>${breakEvenMath.toFixed(2)}x</strong>.</li>
          <li><strong>Orders</strong> = GMV ÷ AOV.</li>
          <li><strong>Projected LTV</strong> dipengaruhi AOV, margin, repeat rate, dan blended lift.</li>
          <li><strong>nCAC</strong> = budget ÷ estimated new customers.</li>
        </ul>
      </article>

      <article class="info-card">
        <span class="mini-label">Workbook translation</span>
        <h4>Dari Excel ke web app</h4>
        <ul class="formula-list">
          <li>Sheet simulator workbook dipakai sebagai layer referensi biaya channel dan cara baca economics.</li>
          <li>Asumsi inti workbook tetap dijaga: fokus pada settlement, margin contribution, break-even, dan max acquisition cost.</li>
          <li>Versi web ini menambahkan <strong>diminishing return</strong>, <strong>optimal budget search</strong>, <strong>LTV</strong>, dan <strong>efficiency scoring</strong>.</li>
          <li>Fee detail dari workbook diterjemahkan menjadi profile bias per channel agar dashboard tetap ringan, cepat, dan presentable.</li>
        </ul>
      </article>

      <article class="info-card">
        <span class="mini-label">Channel defaults</span>
        <h4>Baseline workbook assumptions</h4>
        <table>
          <thead>
            <tr>
              <th>Channel</th>
              <th>Admin fee</th>
              <th>Service fee</th>
              <th>Processing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shopee</td>
              <td>${percent(REFERENCE_DATA.channels.shopee.defaults.adminFeePct * 100, 0)}</td>
              <td>${percent(REFERENCE_DATA.channels.shopee.defaults.serviceFeePct * 100, 0)}</td>
              <td>${rupiah(REFERENCE_DATA.channels.shopee.defaults.processingFee)}</td>
            </tr>
            <tr>
              <td>TikTok Shop</td>
              <td>${percent(REFERENCE_DATA.channels.tiktokAds.defaults.adminFeePct * 100, 0)}</td>
              <td>${percent(REFERENCE_DATA.channels.tiktokAds.defaults.serviceFeePct * 100, 0)}</td>
              <td>${rupiah(REFERENCE_DATA.channels.tiktokAds.defaults.processingFee)}</td>
            </tr>
          </tbody>
        </table>
      </article>

      <article class="info-card">
        <span class="mini-label">Reference links</span>
        <h4>Workbook source sheet</h4>
        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Topik</th>
            </tr>
          </thead>
          <tbody>
            ${sourceRows}
          </tbody>
        </table>
      </article>
    </div>
  `;

  const roadmapContent = `
    <div class="tab-grid">
      <article class="info-card">
        <span class="mini-label">Phase 1</span>
        <h4>Deploy as premium lead magnet</h4>
        <ul class="roadmap-list">
          <li>Upload project ini ke GitHub atau langsung drag-and-drop ke Vercel.</li>
          <li>Pakai sebagai sales tool, pitch support, atau discovery session asset.</li>
          <li>Gunakan tombol Share untuk mengirim skenario ke client / internal team.</li>
        </ul>
      </article>

      <article class="info-card">
        <span class="mini-label">Phase 2</span>
        <h4>Optional Supabase layer</h4>
        <ul class="roadmap-list">
          <li>Simpan preset skenario, benchmark channel, dan histori input.</li>
          <li>Kelola channel defaults dan workbook-derived references secara terpusat.</li>
          <li>Schema awal sudah disiapkan di folder <strong>supabase/schema.sql</strong>.</li>
        </ul>
      </article>

      <article class="info-card">
        <span class="mini-label">Phase 3</span>
        <h4>Internal growth dashboard</h4>
        <ul class="roadmap-list">
          <li>Tambah login, saved scenarios, export PDF, dan notes per client.</li>
          <li>Masukkan benchmark creative, channel mix, dan weekly target tracking.</li>
          <li>Tambahkan ingestion data real dari seller center bila nanti dibutuhkan.</li>
        </ul>
      </article>

      <article class="info-card">
        <span class="mini-label">Phase 4</span>
        <h4>Octafas premium stack</h4>
        <ul class="roadmap-list">
          <li>Hubungkan tool ini dengan calculator pricing, planner campaign, dan margin simulator lain.</li>
          <li>Jadikan dashboard ini pintu masuk menuju audit growth, consulting, atau retainer.</li>
          <li>Visual dan struktur sudah dirancang agar terasa lebih mahal daripada kalkulator biasa.</li>
        </ul>
      </article>
    </div>
  `;

  const contentMap = {
    insights: insightContent,
    strategy: strategyContent,
    formula: formulaContent,
    roadmap: roadmapContent,
  };

  els.tabContent.innerHTML = contentMap[state.activeTab] ?? insightContent;
}

function buildMetricRow(label, ratio, value) {
  return `
    <div class="metric-row">
      <span>${label}</span>
      <strong>${value}</strong>
      <div class="metric-bar"><span style="width:${clamp(ratio, 0, 1) * 100}%"></span></div>
    </div>
  `;
}

function buildLineAreaChart(config) {
  const {
    points,
    currentPoint,
    optimalPoint,
    width,
    height,
    formatX,
    formatY,
    lineColor,
    fillColor,
  } = config;

  const padding = { top: 24, right: 32, bottom: 42, left: 70 };
  const xMin = Math.min(...points.map((point) => point.x));
  const xMax = Math.max(...points.map((point) => point.x));
  const yMin = 0;
  const yMax = Math.max(...points.map((point) => point.y), currentPoint.y, optimalPoint.y);

  const scaleX = (value) =>
    padding.left + ((value - xMin) / Math.max(xMax - xMin, 1)) * (width - padding.left - padding.right);
  const scaleY = (value) =>
    height - padding.bottom - ((value - yMin) / Math.max(yMax - yMin, 1)) * (height - padding.top - padding.bottom);

  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${scaleX(point.x).toFixed(2)},${scaleY(point.y).toFixed(2)}`)
    .join(" ");

  const areaPath = `${path} L${scaleX(points[points.length - 1].x).toFixed(2)},${height - padding.bottom} L${scaleX(points[0].x).toFixed(2)},${height - padding.bottom} Z`;

  const gridLines = Array.from({ length: 4 }, (_, index) => {
    const ratio = index / 3;
    const y = padding.top + ratio * (height - padding.top - padding.bottom);
    const value = yMax - ratio * (yMax - yMin);
    return `
      <line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="rgba(153,178,212,0.12)" stroke-dasharray="3 6" />
      <text x="14" y="${y + 4}" fill="#8ea4bf" font-size="10">${formatY(value)}</text>
    `;
  }).join("");

  const xTicks = Array.from({ length: 4 }, (_, index) => {
    const ratio = index / 3;
    const value = xMin + ratio * (xMax - xMin);
    const x = scaleX(value);
    return `
      <text x="${x}" y="${height - 12}" fill="#8ea4bf" font-size="10" text-anchor="middle">${formatX(value)}</text>
    `;
  }).join("");

  const markers = [
    {
      point: currentPoint,
      fill: "#7fe7ff",
      label: "Current",
    },
    {
      point: optimalPoint,
      fill: "#aa9dff",
      label: "Optimal",
    },
  ].map((item) => `
    <circle cx="${scaleX(item.point.x)}" cy="${scaleY(item.point.y)}" r="5" fill="${item.fill}">
      <title>${item.label} • Budget ${formatX(item.point.x)} • GMV ${formatY(item.point.y)}</title>
    </circle>
    <text x="${scaleX(item.point.x) + 10}" y="${scaleY(item.point.y) - 10}" fill="${item.fill}" font-size="10">${item.label}</text>
  `).join("");

  return `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-label="GMV curve">
      <defs>
        <linearGradient id="gmvFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="${lineColor}" stop-opacity="0.24"></stop>
          <stop offset="100%" stop-color="${fillColor}" stop-opacity="0.02"></stop>
        </linearGradient>
      </defs>
      ${gridLines}
      <path d="${areaPath}" fill="url(#gmvFill)"></path>
      <path d="${path}" fill="none" stroke="${lineColor}" stroke-width="3" stroke-linecap="round"></path>
      ${markers}
      <text x="${width / 2}" y="${height - 2}" fill="#8ea4bf" font-size="10" text-anchor="middle">Budget</text>
      <text x="16" y="14" fill="#8ea4bf" font-size="10">Projected GMV</text>
      ${xTicks}
    </svg>
  `;
}

function buildDualAxisChart(config) {
  const { points, currentPoint, optimalPoint, width, height } = config;
  const padding = { top: 24, right: 64, bottom: 42, left: 60 };
  const xMin = Math.min(...points.map((point) => point.x));
  const xMax = Math.max(...points.map((point) => point.x));
  const roasMin = Math.min(...points.map((point) => point.roas));
  const roasMax = Math.max(...points.map((point) => point.roas));
  const profitMin = Math.min(0, ...points.map((point) => point.profit));
  const profitMax = Math.max(...points.map((point) => point.profit));

  const scaleX = (value) =>
    padding.left + ((value - xMin) / Math.max(xMax - xMin, 1)) * (width - padding.left - padding.right);
  const scaleLeft = (value) =>
    height - padding.bottom - ((value - roasMin) / Math.max(roasMax - roasMin, 1)) * (height - padding.top - padding.bottom);
  const scaleRight = (value) =>
    height - padding.bottom - ((value - profitMin) / Math.max(profitMax - profitMin, 1)) * (height - padding.top - padding.bottom);

  const roasPath = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${scaleX(point.x).toFixed(2)},${scaleLeft(point.roas).toFixed(2)}`)
    .join(" ");
  const profitPath = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${scaleX(point.x).toFixed(2)},${scaleRight(point.profit).toFixed(2)}`)
    .join(" ");

  const gridLines = Array.from({ length: 4 }, (_, index) => {
    const ratio = index / 3;
    const y = padding.top + ratio * (height - padding.top - padding.bottom);
    const roasValue = roasMax - ratio * (roasMax - roasMin);
    const profitValue = profitMax - ratio * (profitMax - profitMin);
    return `
      <line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="rgba(153,178,212,0.12)" stroke-dasharray="3 6" />
      <text x="8" y="${y + 4}" fill="#8ea4bf" font-size="10">${roasValue.toFixed(2)}x</text>
      <text x="${width - padding.right + 10}" y="${y + 4}" fill="#8ea4bf" font-size="10">${rupiah(profitValue, { compact: true, digits: 1 })}</text>
    `;
  }).join("");

  const markers = [
    {
      point: currentPoint,
      label: "Current",
      roasColor: "#7fe7ff",
      profitColor: "#44d7c7",
    },
    {
      point: optimalPoint,
      label: "Optimal",
      roasColor: "#aa9dff",
      profitColor: "#ffd16c",
    },
  ].map((item) => `
    <circle cx="${scaleX(item.point.x)}" cy="${scaleLeft(item.point.roas)}" r="4.5" fill="${item.roasColor}">
      <title>${item.label} ROAS • ${xValue(item.point.roas)}</title>
    </circle>
    <circle cx="${scaleX(item.point.x)}" cy="${scaleRight(item.point.profit)}" r="4.5" fill="${item.profitColor}">
      <title>${item.label} Profit • ${rupiah(item.point.profit, { compact: true, digits: 1 })}</title>
    </circle>
  `).join("");

  const xTicks = Array.from({ length: 4 }, (_, index) => {
    const ratio = index / 3;
    const value = xMin + ratio * (xMax - xMin);
    const x = scaleX(value);
    return `
      <text x="${x}" y="${height - 12}" fill="#8ea4bf" font-size="10" text-anchor="middle">${rupiah(value, { compact: true, digits: 1 })}</text>
    `;
  }).join("");

  return `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-label="ROAS vs Profit chart">
      ${gridLines}
      <path d="${roasPath}" fill="none" stroke="#7fe7ff" stroke-width="3" stroke-linecap="round"></path>
      <path d="${profitPath}" fill="none" stroke="#44d7c7" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 8"></path>
      ${markers}
      <text x="10" y="16" fill="#7fe7ff" font-size="10">ROAS</text>
      <text x="${width - 52}" y="16" fill="#44d7c7" font-size="10">Profit</text>
      <text x="${width / 2}" y="${height - 2}" fill="#8ea4bf" font-size="10" text-anchor="middle">Budget</text>
      ${xTicks}
    </svg>
  `;
}

function buildScenarioChart(scenarios) {
  const width = 1200;
  const height = 280;
  const padding = { top: 26, right: 28, bottom: 42, left: 48 };
  const maxValue = Math.max(...scenarios.flatMap((scenario) => [scenario.projectedGmv, Math.max(scenario.profit, 0)]), 1);
  const zeroY = height - padding.bottom;
  const usableHeight = height - padding.top - padding.bottom;
  const groupWidth = (width - padding.left - padding.right) / scenarios.length;

  const groups = scenarios.map((scenario, index) => {
    const gmvHeight = (scenario.projectedGmv / maxValue) * usableHeight;
    const profitHeight = (Math.max(scenario.profit, 0) / maxValue) * usableHeight;
    const baseX = padding.left + index * groupWidth;
    const gmvX = baseX + groupWidth * 0.18;
    const profitX = baseX + groupWidth * 0.55;
    const labelX = baseX + groupWidth * 0.5;

    return `
      <rect x="${gmvX}" y="${zeroY - gmvHeight}" width="${groupWidth * 0.2}" height="${gmvHeight}" rx="12" fill="rgba(127, 231, 255, 0.85)">
        <title>${scenario.label} GMV • ${rupiah(scenario.projectedGmv, { compact: true, digits: 1 })}</title>
      </rect>
      <rect x="${profitX}" y="${zeroY - profitHeight}" width="${groupWidth * 0.2}" height="${profitHeight}" rx="12" fill="rgba(170, 157, 255, 0.86)">
        <title>${scenario.label} Profit • ${rupiah(scenario.profit, { compact: true, digits: 1 })}</title>
      </rect>
      <text x="${labelX}" y="${height - 16}" fill="#8ea4bf" font-size="10" text-anchor="middle">${scenario.label}</text>
      <text x="${labelX}" y="${Math.max(22, zeroY - gmvHeight - 8)}" fill="#dbeaff" font-size="10" text-anchor="middle">${rupiah(scenario.projectedGmv, { compact: true, digits: 1 })}</text>
    `;
  }).join("");

  return `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-label="Scenario comparison">
      <line x1="${padding.left}" y1="${zeroY}" x2="${width - padding.right}" y2="${zeroY}" stroke="rgba(153,178,212,0.16)" />
      <text x="8" y="16" fill="#7fe7ff" font-size="10">GMV</text>
      <text x="46" y="16" fill="#aa9dff" font-size="10">Profit</text>
      ${groups}
    </svg>
  `;
}

async function shareScenario() {
  const model = simulate(state);
  const sharePayload = {
    title: "Octafas GMV tools",
    text: `${model.zone} • GMV ${rupiah(model.current.projectedGmv, { compact: true, digits: 1 })} • Profit ${rupiah(model.current.profit, { compact: true, digits: 1 })}`,
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(sharePayload);
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
    window.alert("Link skenario berhasil disalin ke clipboard.");
  } catch (_error) {
    window.alert("Share dibatalkan atau tidak tersedia pada browser ini.");
  }
}
async function ensureSupabaseSession() {
  if (!supabaseClient) {
    throw new Error("Supabase belum dikonfigurasi.");
  }

  const {
    data: { session },
    error: sessionError,
  } = await supabaseClient.auth.getSession();

  if (sessionError) throw sessionError;
  if (session) return session;

  const { data, error } = await supabaseClient.auth.signInAnonymously();
  if (error) throw error;

  return data.session;
}

function buildScenarioDbRow(model, userId, scenarioName) {
  return {
    scenario_name: scenarioName,
    user_id: userId,
    channel_slug: state.channel,
    segment_slug: state.segment,
    seasonality_slug: state.seasonality,
    inputs_json: {
      ...state,
    },
    outputs_json: {
      projectedGmv: model.current.projectedGmv,
      projectedProfit: model.current.profit,
      roas: model.current.roas,
      breakEvenRoas: model.current.breakEvenRoas,
      orders: model.current.orders,
      projectedLtv: model.current.projectedLtv,
      ncac: model.current.ncac,
      efficiencyScore: model.efficiencyScore,
      optimalScaleZone: model.zone,
      optimalBudget: model.optimal.budget,
      scenarios: model.scenarios.map((scenario) => ({
        label: scenario.label,
        budget: scenario.budget,
        gmv: scenario.projectedGmv,
        profit: scenario.profit,
        roas: scenario.roas,
      })),
    },
  };
}

async function saveScenarioToDatabase() {
  try {
    const session = await ensureSupabaseSession();
    const model = simulate(state);

    const defaultName = `${CHANNELS[state.channel].label} • ${new Date().toLocaleDateString("id-ID")}`;
    const scenarioName = window.prompt("Nama skenario", defaultName);

    if (!scenarioName) return;

    const row = buildScenarioDbRow(model, session.user.id, scenarioName);

    const { data, error } = await supabaseClient
      .from("octafas_saved_scenarios")
      .insert(row)
      .select("id, scenario_name, created_at")
      .single();

    if (error) throw error;

    window.alert(`Skenario "${data.scenario_name}" berhasil disimpan.`);
  } catch (error) {
    console.error(error);
    window.alert(error.message || "Gagal menyimpan skenario ke database.");
  }
}
function exportScenario() {
  const model = simulate(state);
  const payload = {
    exportedAt: new Date().toISOString(),
    title: "Octafas GMV tools",
    state,
    current: {
      gmv: model.current.projectedGmv,
      profit: model.current.profit,
      roas: model.current.roas,
      breakEvenRoas: model.current.breakEvenRoas,
      orders: model.current.orders,
      projectedLtv: model.current.projectedLtv,
      ncac: model.current.ncac,
      efficiencyScore: model.efficiencyScore,
      zone: model.zone,
      optimalBudget: model.optimal.budget,
    },
    scenarios: model.scenarios.map((scenario) => ({
      label: scenario.label,
      budget: scenario.budget,
      gmv: scenario.projectedGmv,
      profit: scenario.profit,
      roas: scenario.roas,
    })),
    workbookReference: {
      readmeHighlights: REFERENCE_DATA.readmeHighlights,
      sources: REFERENCE_DATA.sources,
    },
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "octafas-gmv-report.json";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}
