import Link from "next/link";

export const metadata = {
  title: "Jade Otomotiv | Otomotiv Yedek Parça",
  description:
    "Jade Otomotiv; binek ve ticari araçlar için fren, filtre, debriyaj, süspansiyon, elektrik ve farklı otomotiv yedek parçalarında tedarik çözümleri sunar.",
  alternates: {
    canonical: "/",
  },
};

const categories = [
  {
    title: "Fren Sistemleri",
    text: "Fren balatası, disk ve fren sistemi ürünleri.",
  },
  {
    title: "Filtreler",
    text: "Yağ, hava, polen ve yakıt filtreleri.",
  },
  {
    title: "Debriyaj & Şanzıman",
    text: "Debriyaj ve aktarma sistemi yedek parçaları.",
  },
  {
    title: "Süspansiyon",
    text: "Amortisör, salıncak ve süspansiyon parçaları.",
  },
  {
    title: "Elektrik & Ateşleme",
    text: "Elektrik, ateşleme ve motor yardımcı parçaları.",
  },
  {
    title: "Otomotiv Yedek Parça",
    text: "Farklı marka ve modeller için geniş ürün seçenekleri.",
  },
];

const brands = [
  "Renault",
  "Fiat",
  "Dacia",
  "Ford",
  "Volkswagen",
  "Opel",
  "Peugeot",
  "Citroën",
  "Toyota",
  "Honda",
  "Hyundai",
  "Kia",
  "Nissan",
  "BMW",
  "Mercedes",
  "Audi",
];

const seoPages = [
  {
    href: "/otomotiv-yedek-parca",
    title: "Otomotiv Yedek Parça",
    text: "Binek ve ticari araçlar için otomotiv yedek parça seçenekleri.",
  },
  {
    href: "/oto-yedek-parca-tedarikcisi",
    title: "Oto Yedek Parça Tedarikçisi",
    text: "Profesyonel tedarik ve yedek parça çözümleri.",
  },
  {
    href: "/oto-yedek-parca-fiyatlari",
    title: "Oto Yedek Parça Fiyatları",
    text: "Parça seçimi ve fiyatlandırma hakkında bilgi alın.",
  },
  {
    href: "/avcilar-oto-yedek-parca",
    title: "Avcılar Oto Yedek Parça",
    text: "Avcılar ve çevresinden yedek parça arayanlar için bilgi.",
  },
  {
    href: "/ticari-arac-yedek-parca",
    title: "Ticari Araç Yedek Parça",
    text: "Ticari araçlar ve filo ihtiyaçlarına yönelik çözümler.",
  },
  {
    href: "/blog",
    title: "Otomotiv Blog",
    text: "Yedek parça, araç bakımı ve otomotiv dünyasından bilgiler.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <Link href="/" className="group">
            <div className="text-2xl font-black tracking-tight">
              JADE <span className="text-cyan-400">OTOMOTİV</span>
            </div>
            <div className="mt-1 text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              Otomotiv Yedek Parça
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
            <Link href="/otomotiv-yedek-parca" className="transition hover:text-cyan-400">
              Yedek Parça
            </Link>
            <Link href="/ticari-arac-yedek-parca" className="transition hover:text-cyan-400">
              Ticari Araç
            </Link>
            <Link href="/oto-yedek-parca-fiyatlari" className="transition hover:text-cyan-400">
              Fiyatlar
            </Link>
            <Link href="/blog" className="transition hover:text-cyan-400">
              Blog
            </Link>
            <a
              href="https://wa.me/905435571529"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(34,211,238,0.16),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Binek & Ticari Araçlar İçin
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Otomotiv Yedek Parçada
              <span className="block text-cyan-400">Güvenilir Tedarik</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Jade Otomotiv; fren, filtre, debriyaj, süspansiyon, elektrik ve
              farklı otomotiv yedek parça gruplarında geniş ürün seçenekleriyle
              bireysel ve ticari müşterilere hizmet sunar.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/905435571529"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-400 px-7 py-4 text-center font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                WhatsApp'tan Bilgi Al
              </a>

              <a
                href="https://www.jadeautomotive.net"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
              >
                Online Ürünleri İncele
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl">
              <div className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Jade Otomotiv
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Fren", "Sistemleri"],
                  ["Filtre", "Grupları"],
                  ["Debriyaj", "& Şanzıman"],
                  ["Süspansiyon", "Parçaları"],
                  ["Elektrik", "& Ateşleme"],
                  ["Ticari Araç", "Çözümleri"],
                ].map(([title, subtitle]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
                  >
                    <div className="font-bold text-white">{title}</div>
                    <div className="mt-1 text-sm text-slate-400">{subtitle}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-cyan-400 p-5 text-slate-950">
                <div className="text-sm font-semibold">Parça mı arıyorsunuz?</div>
                <div className="mt-1 text-2xl font-black">0543 557 15 29</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Ürün Grupları
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              İhtiyacınıza Uygun Otomotiv Yedek Parça
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Aracınız için ihtiyaç duyduğunuz farklı yedek parça gruplarında
              ürün ve tedarik seçenekleri için Jade Otomotiv ile iletişime
              geçebilirsiniz.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-extrabold">{category.title}</h3>
                <p className="mt-3 leading-6 text-slate-600">{category.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Çalıştığımız Markalar
              </div>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Birçok Marka İçin Yedek Parça
              </h2>
              <p className="mt-4 leading-7 text-slate-400">
                Renault, Fiat, Dacia, Ford, Volkswagen, Opel, Peugeot,
                Citroën, Toyota, Honda, Hyundai, Kia, Nissan ve premium
                markalar dahil farklı araç grupları için ürün seçenekleri.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center font-bold text-slate-200"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Faydalı Sayfalar
          </div>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Otomotiv Yedek Parça Rehberleri
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {seoPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-extrabold group-hover:text-cyan-600">
                  {page.title}
                </h3>
                <p className="mt-3 leading-6 text-slate-600">{page.text}</p>
                <div className="mt-5 font-bold text-cyan-600">
                  Sayfayı İncele →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-400 py-16 text-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em]">
              Hızlı İletişim
            </div>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Aradığınız parçayı birlikte bulalım.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-800">
              Ürün, marka, model veya parça bilgisiyle bize ulaşarak
              ihtiyacınız hakkında bilgi alabilirsiniz.
            </p>
          </div>

          <a
            href="https://wa.me/905435571529"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-slate-950 px-8 py-4 text-center font-bold text-white transition hover:bg-slate-800"
          >
            WhatsApp'tan Ulaş
          </a>
        </div>
      </section>

      <section className="bg-slate-950 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="text-2xl font-black">
              JADE <span className="text-cyan-400">OTOMOTİV</span>
            </div>
            <p className="mt-4 max-w-xl leading-7 text-slate-400">
              Otomotiv yedek parça alanında binek ve ticari araçlara yönelik
              ürün ve tedarik çözümleri.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.hepsiburada.com/magaza/jade-automotive"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/5"
              >
                Hepsiburada
              </a>

              <a
                href="https://www.trendyol.com/magaza/jade-automotive-m-960587?sst=0"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/5"
              >
                Trendyol
              </a>

              <a
                href="https://www.jadeautomotive.net"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/5"
              >
                Jade Automotive
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">İletişim</h3>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-400">
              <p>
                <span className="font-semibold text-white">Telefon:</span>{" "}
                <a
                  href="tel:+905435571529"
                  className="hover:text-cyan-400"
                >
                  0543 557 15 29
                </a>
              </p>

              <p>
                <span className="font-semibold text-white">Adres:</span>{" "}
                Cumhuriyet Mah. E-5 Karayolu Firuze Sokak İstanbul Outlet Park,
                2. Kat, K:2 D:64, 34500 Büyükçekmece / İstanbul
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-7 text-sm text-slate-500 lg:px-8">
          © {new Date().getFullYear()} Jade Otomotiv. Tüm hakları saklıdır.
        </div>
      </section>

      <a
        href="https://wa.me/905435571529"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-lg font-black text-slate-950 shadow-2xl transition hover:scale-105 hover:bg-cyan-300"
      >
        WA
      </a>
    </main>
  );
}
