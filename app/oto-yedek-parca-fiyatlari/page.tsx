import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oto Yedek Parça Fiyatları | Jade Automotive",
  description:
    "Oto yedek parça fiyatları ve ürün seçenekleri hakkında Jade Automotive'den bilgi alın. Fren, motor, filtre, süspansiyon, debriyaj ve elektrik parçalarını keşfedin.",
  keywords: [
    "oto yedek parça fiyatları",
    "yedek parça fiyatları",
    "oto parça fiyatları",
    "otomobil yedek parça fiyatları",
    "araç yedek parça fiyatları",
    "oto yedek parça",
  ],
  alternates: {
    canonical: "https://frenbalataci.com.tr/oto-yedek-parca-fiyatlari",
  },
};

const categories = [
  {
    title: "Fren Parçaları",
    text: "Fren balatası ve fren sistemi ürünleri.",
  },
  {
    title: "Motor Parçaları",
    text: "Motor ve yardımcı sistemlere yönelik yedek parçalar.",
  },
  {
    title: "Filtreler",
    text: "Hava, yağ, yakıt ve polen filtreleri.",
  },
  {
    title: "Süspansiyon",
    text: "Amortisör, salıncak, rot ve ön takım parçaları.",
  },
  {
    title: "Debriyaj & Şanzıman",
    text: "Debriyaj ve aktarma sistemi ürünleri.",
  },
  {
    title: "Elektrik & Ateşleme",
    text: "Buji, bobin, sensör ve elektrik parçaları.",
  },
];

export default function OtoYedekParcaFiyatlariPage() {
  return (
    <main className="min-h-screen bg-white text-[#071426]">
      <section className="relative overflow-hidden bg-[#071426] px-6 py-24 text-white md:py-32">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="text-sm font-black uppercase tracking-[0.28em] text-orange-500">
              JADE AUTOMOTIVE
            </div>

            <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              Oto Yedek Parça
              <span className="block text-orange-500">
                Fiyatları
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Aracınız için ihtiyaç duyduğunuz yedek parçanın doğru ürününü
              belirlemek ve güncel fiyat bilgisi almak için Jade Automotive ile
              iletişime geçebilirsiniz.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/905435571529?text=Merhaba%2C%20oto%20yedek%20par%C3%A7a%20fiyat%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-orange-500 px-7 py-4 font-black text-white transition hover:bg-orange-600"
              >
                Fiyat Bilgisi Al
              </a>

              <a
                href="#urunler"
                className="rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:bg-white hover:text-[#071426]"
              >
                Ürün Grupları
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-black uppercase tracking-[0.22em] text-orange-500">
                FİYATLANDIRMA
              </div>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
                Yedek parça fiyatı
                <span className="block text-orange-500">
                  nasıl belirlenir?
                </span>
              </h2>
            </div>

            <div className="text-lg leading-8 text-slate-600">
              <p>
                Oto yedek parça fiyatları; aracın marka ve modeli, parça
                grubu, ürünün teknik özellikleri ve tercih edilen ürün
                seçeneğine göre değişebilir.
              </p>

              <p className="mt-5">
                Bu nedenle yalnızca araç modeline bakarak fiyat vermek yerine
                doğru parçanın belirlenmesi önemlidir. Aracınızın bilgilerini
                paylaşarak ihtiyacınız olan ürün hakkında güncel bilgi
                alabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="urunler" className="bg-[#f4f6f8] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="text-sm font-black uppercase tracking-[0.22em] text-orange-500">
              ÜRÜN GRUPLARI
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">
              Oto yedek parça seçenekleri
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Farklı araçların bakım ve onarım ihtiyaçlarına yönelik çeşitli
              otomotiv yedek parça grupları.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <article
                key={category.title}
                className="group min-h-[240px] rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:bg-[#071426] hover:shadow-xl"
              >
                <div className="text-sm font-black tracking-[0.2em] text-orange-500">
                  0{index + 1}
                </div>

                <h3 className="mt-10 text-2xl font-black transition group-hover:text-white">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500 transition group-hover:text-slate-300">
                  {category.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071426] px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="text-sm font-black uppercase tracking-[0.22em] text-orange-500">
              JADE AUTOMOTIVE
            </div>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
              Fiyat kadar önemli olan
              <span className="block text-orange-500">
                doğru parçadır.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Aynı araç için farklı özelliklere sahip ürün seçenekleri
              bulunabilir. Bu nedenle yedek parça alırken ürünün aracınızla
              uyumlu olduğundan emin olmak önemlidir.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl font-black text-orange-500">01</div>
                <div className="mt-3 font-black">Araç Bilgisi</div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Marka, model ve gerekli teknik bilgiler.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl font-black text-orange-500">02</div>
                <div className="mt-3 font-black">Doğru Parça</div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Araca uygun ürün seçiminin belirlenmesi.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl font-black text-orange-500">03</div>
                <div className="mt-3 font-black">Fiyat Bilgisi</div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Güncel ürün ve fiyat bilgisinin paylaşılması.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-sm font-black uppercase tracking-[0.22em] text-orange-500">
            FİYAT SORGULAMA
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">
            Aracınızın yedek parça fiyatını öğrenin
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Aracınızın marka, model ve ihtiyaç duyduğunuz parça bilgisini
            paylaşarak Jade Automotive'den ürün ve fiyat hakkında bilgi
            alabilirsiniz.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/905435571529?text=Merhaba%2C%20oto%20yedek%20par%C3%A7a%20fiyat%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-orange-500 px-8 py-4 font-black text-white transition hover:bg-orange-600"
            >
              WhatsApp'tan Fiyat Sor
            </a>

            <a
              href="tel:05435571529"
              className="rounded-full bg-[#071426] px-8 py-4 font-black text-white transition hover:bg-[#10233d]"
            >
              0543 557 15 29
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
