import Link from "next/link";

export const metadata = {
  title: "Jade Otomotiv | Otomotiv Yedek Parça",
  description:
    "Jade Otomotiv; binek ve ticari araçlar için fren, filtre, debriyaj, süspansiyon, elektrik ve farklı otomotiv yedek parçalarında güvenilir tedarik çözümleri sunar.",
  alternates: {
    canonical: "/",
  },
};

const categories = [
  {
    number: "01",
    title: "Fren Sistemleri",
    text: "Fren balatası, disk ve fren sistemi ürünleri.",
    href: "/otomotiv-yedek-parca",
  },
  {
    number: "02",
    title: "Filtreler",
    text: "Yağ, hava, polen ve yakıt filtreleri.",
    href: "/otomotiv-yedek-parca",
  },
  {
    number: "03",
    title: "Debriyaj & Şanzıman",
    text: "Debriyaj ve aktarma sistemi yedek parçaları.",
    href: "/otomotiv-yedek-parca",
  },
  {
    number: "04",
    title: "Süspansiyon",
    text: "Amortisör, salıncak ve süspansiyon parçaları.",
    href: "/otomotiv-yedek-parca",
  },
  {
    number: "05",
    title: "Elektrik & Ateşleme",
    text: "Elektrik, ateşleme ve motor yardımcı parçaları.",
    href: "/otomotiv-yedek-parca",
  },
  {
    number: "06",
    title: "Ticari Araç",
    text: "Filo ve ticari araçlar için yedek parça çözümleri.",
    href: "/ticari-arac-yedek-parca",
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
    text: "Binek ve ticari araçlar için yedek parça seçenekleri.",
  },
  {
    href: "/oto-yedek-parca-tedarikcisi",
    title: "Oto Yedek Parça Tedarikçisi",
    text: "Profesyonel tedarik ve yedek parça çözümleri.",
  },
  {
    href: "/oto-yedek-parca-fiyatlari",
    title: "Oto Yedek Parça Fiyatları",
    text: "Parça seçimi ve fiyatlandırma hakkında bilgi.",
  },
  {
    href: "/avcilar-oto-yedek-parca",
    title: "Avcılar Oto Yedek Parça",
    text: "Avcılar ve çevresinden yedek parça arayanlar için.",
  },
  {
    href: "/ticari-arac-yedek-parca",
    title: "Ticari Araç Yedek Parça",
    text: "Ticari araçlar ve filo ihtiyaçlarına yönelik çözümler.",
  },
  {
    href: "/blog",
    title: "Otomotiv Blog",
    text: "Yedek parça ve araç bakımı hakkında bilgiler.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <Link href="/" className="shrink-0">
            <div className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">
              JADE <span className="text-cyan-400">OTOMOTİV</span>
            </div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-slate-400 sm:text-xs">
              Otomotiv Yedek Parça
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/otomotiv-yedek-parca"
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan-400"
            >
              Yedek Parça
            </Link>
            <Link
              href="/ticari-arac-yedek-parca"
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan-400"
            >
              Ticari Araç
            </Link>
            <Link
              href="/oto-yedek-parca-fiyatlari"
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan-400"
            >
              Fiyatlar
            </Link>
            <Link
              href="/blog"
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan-400"
            >
              Blog
            </Link>
            <a
              href="https://wa.me/905435571529"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              WhatsApp
            </a>
          </nav>

          <a
            href="https://wa.me/905435571529"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-black text-slate-950 md:hidden"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Binek & Ticari Araçlar İçin
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[82px]">
              Otomotiv
              <br />
              Yedek Parçada
              <br />
              <span className="text-cyan-400">Güvenilir Tedarik.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Jade Otomotiv; fren, filtre, debriyaj, süspansiyon, elektrik ve
              farklı otomotiv yedek parça gruplarında bireysel, servis ve
              ticari müşterilere çözüm sunar.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/905435571529"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-400 px-7 py-4 text-center font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                WhatsApp'tan Parça Sor
              </a>

              <a
                href="https://www.jadeautomotive.net"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 text-center font-bold text-white transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.08]"
              >
                Online Ürünleri İncele →
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-7">
              <div>
                <div className="text-2xl font-black text-white">16+</div>
                <div className="mt-1 text-xs text-slate-500">Marka</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">6</div>
                <div className="mt-1 text-xs text-slate-500">Ana ürün grubu</div>
              </div>
              <div>
                <div className="text-2xl font-black text-cyan-400">7/24</div>
                <div className="mt-1 text-xs text-slate-500">WhatsApp iletişim</div>
              </div>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-[40px] bg-cyan-400/10 blur-3xl" />

            <div className="relative rounded-[32px] border border-white/10 bg-[#0b1628] p-5 shadow-2xl sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                    JADE OTOMOTİV
                  </div>
                  <div className="mt-2 text-xl font-black">
                    Yedek Parça Çözümleri
                  </div>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
                  ↗
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {categories.map((item) => (
                  <Link
                    key={item.number}
                    href={item.href}
                    className="group rounded-2xl border border-white/10 bg-[#101c31] p-5 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-[#13243d]"
                  >
                    <div className="mb-7 text-xs font-bold text-cyan-400">
                      {item.number}
                    </div>
                    <div className="font-extrabold text-white">
                      {item.title}
                    </div>
                    <div className="mt-2 text-sm leading-5 text-slate-500">
                      {item.text}
                    </div>
                  </Link>
                ))}
              </div>

              <a
                href="https://wa.me/905435571529"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-2xl bg-cyan-400 p-5 text-slate-950 transition hover:bg-cyan-300"
              >
                <div className="text-sm font-bold">Parça mı arıyorsunuz?</div>
                <div className="mt-1 flex items-center justify-between gap-4">
                  <div className="text-2xl font-black sm:text-3xl">
                    0543 557 15 29
                  </div>
                  <div className="hidden text-sm font-bold sm:block">
                    WhatsApp →
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">
                Ürün Grupları
              </div>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Aradığınız Parça,
                <br />
                Doğru Çözüm.
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-600">
              Binek ve ticari araçlar için farklı parça gruplarında ürün ve
              tedarik seçeneklerini Jade Otomotiv üzerinden
              değerlendirebilirsiniz.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-cyan-600">
                    {item.number}
                  </span>
                  <span className="text-slate-300 transition group-hover:text-cyan-500">
                    ↗
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-black tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-white/10 bg-[#07111f] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.28em] text-cyan-400">
                Araç Markaları
              </div>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Birçok Marka.
                <br />
                Tek Tedarik Noktası.
              </h2>
              <p className="mt-5 leading-7 text-slate-400">
                Renault, Fiat, Dacia, Ford, Volkswagen, Opel, Peugeot,
                Citroën, Toyota, Honda, Hyundai, Kia, Nissan ve premium
                markalar dahil farklı araç grupları için ürün seçenekleri.
              </p>

              <a
                href="https://www.jadeautomotive.net"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400/20"
              >
                Tüm Ürünleri Gör →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="flex min-h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-3 text-center text-sm font-bold text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO / DISCOVERY */}
      <section className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">
              Jade Otomotiv
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              İhtiyacınız Olan Bilgiye Ulaşın
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {seoPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-5">
                  <h3 className="font-extrabold">{page.title}</h3>
                  <span className="text-slate-300 transition group-hover:text-cyan-500">
                    ↗
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {page.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-cyan-400 text-slate-950">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-white/10 skew-x-[-20deg] translate-x-1/2" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 lg:flex-row lg:items-center lg:px-8">
          <div>
            <div className="text-sm font-black uppercase tracking-[0.22em]">
              Parça arıyorsanız
            </div>
            <h2 className="mt-2 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Jade Otomotiv'e danışın.
            </h2>
            <p className="mt-3 max-w-xl font-medium text-slate-800">
              Aradığınız parçayı ve aracınızın bilgilerini WhatsApp üzerinden
              iletin, bilgi alın.
            </p>
          </div>

          <a
            href="https://wa.me/905435571529"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl bg-slate-950 px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-slate-800"
          >
            WhatsApp'tan Ulaş →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#030712] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-xl font-black">
              JADE <span className="text-cyan-400">OTOMOTİV</span>
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-500">
              Otomotiv Yedek Parça
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-400">
            <Link href="/otomotiv-yedek-parca" className="hover:text-cyan-400">
              Yedek Parça
            </Link>
            <Link
              href="/ticari-arac-yedek-parca"
              className="hover:text-cyan-400"
            >
              Ticari Araç
            </Link>
            <Link
              href="/oto-yedek-parca-fiyatlari"
              className="hover:text-cyan-400"
            >
              Fiyatlar
            </Link>
            <Link href="/blog" className="hover:text-cyan-400">
              Blog
            </Link>
          </div>

          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} Jade Otomotiv
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/905435571529"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Jade Otomotiv WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105 hover:bg-[#20bd5a]"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8 fill-current"
          aria-hidden="true"
        >
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.6 4.47 1.74 6.39L3.1 29l6.77-1.6A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm0 23.8c-2.1 0-4.16-.56-5.96-1.62l-.43-.25-4.02.95.97-3.91-.28-.45A10.78 10.78 0 0 1 5.22 16C5.22 10.06 10.06 5.22 16 5.22S26.78 10.06 26.78 16 21.94 26.8 16 26.8Zm5.91-8.08c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66s1.14 3.09 1.3 3.3c.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>
    </main>
  );
}
