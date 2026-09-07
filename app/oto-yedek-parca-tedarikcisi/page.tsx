import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oto Yedek Parça Tedarikçisi | Jade Automotive",
  description:
    "Oto yedek parça tedarikçisi olarak fren, motor, filtre, süspansiyon, debriyaj ve elektrik parçalarında güvenilir ürün ve tedarik çözümleri sunuyoruz.",
  keywords: [
    "oto yedek parça tedarikçisi",
    "yedek parça tedarikçisi",
    "oto yedek parça",
    "otomobil yedek parça",
    "araç yedek parça",
    "yedek parça tedarik",
    "oto yedek parça firmaları",
  ],
  alternates: {
    canonical: "https://frenbalataci.com.tr/oto-yedek-parca-tedarikcisi",
  },
};

const products = [
  {
    number: "01",
    title: "Fren Sistemleri",
    text: "Fren balatası ve fren sistemi parçalarında farklı araçlara yönelik ürün seçenekleri.",
  },
  {
    number: "02",
    title: "Motor Parçaları",
    text: "Otomobillerin motor ve yardımcı sistemlerinde kullanılan çeşitli yedek parçalar.",
  },
  {
    number: "03",
    title: "Filtreler",
    text: "Hava, yağ, yakıt ve polen filtreleri gibi periyodik bakım ürünleri.",
  },
  {
    number: "04",
    title: "Debriyaj & Şanzıman",
    text: "Debriyaj ve aktarma sistemi için ihtiyaç duyulan parça grupları.",
  },
  {
    number: "05",
    title: "Süspansiyon",
    text: "Amortisör, salıncak, rot ve ön takım ürünleri.",
  },
  {
    number: "06",
    title: "Elektrik & Ateşleme",
    text: "Buji, bobin, sensör ve farklı elektrik sistemi parçaları.",
  },
];

export default function OtoYedekParcaTedarikcisiPage() {
  return (
    <main className="min-h-screen bg-white text-[#071426]">
      <section className="relative overflow-hidden bg-[#071426] px-6 py-24 text-white md:py-32">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="text-sm font-black uppercase tracking-[0.28em] text-orange-500">
              JADE AUTOMOTIVE
            </div>

            <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              Oto Yedek Parça
              <span className="block text-orange-500">
                Tedarikçisi
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Otomotiv sektöründe ihtiyaç duyulan yedek parçaların
              güvenilir tedarik süreçleriyle müşterilere ulaştırılması için
              çalışıyoruz. Farklı araç ve parça gruplarında çözüm sunuyoruz.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#urunler"
                className="rounded-full bg-orange-500 px-7 py-4 font-black text-white transition hover:bg-orange-600"
              >
                Ürün Gruplarını İncele
              </a>

              <a
                href="https://wa.me/905435571529?text=Merhaba%2C%20oto%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:bg-white hover:text-[#071426]"
              >
                WhatsApp'tan Bilgi Al
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="text-sm font-black uppercase tracking-[0.22em] text-orange-500">
                YEDEK PARÇA TEDARİK
              </div>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
                Doğru ürün,
                <span className="block text-orange-500">
                  doğru tedarik.
                </span>
              </h2>
            </div>

            <div className="text-lg leading-8 text-slate-600">
              <p>
                Oto yedek parça tedarikinde ürün çeşitliliği kadar doğru
                parçaya ulaşmak da önemlidir. Jade Automotive olarak binek
                ve ticari araçlara yönelik farklı yedek parça gruplarında
                müşterilerimizin ihtiyaçlarına çözüm sunuyoruz.
              </p>

              <p className="mt-5">
                Fren sistemlerinden motor parçalarına, filtrelerden
                süspansiyon ve elektrik ürünlerine kadar farklı kategorilerde
                otomotiv yedek parça ihtiyaçları için iletişim kurabilirsiniz.
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

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-5xl">
              Oto yedek parça ürün grupları
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Araç bakım, onarım ve parça değişim ihtiyaçlarına yönelik
              farklı otomotiv ürün grupları.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={product.number}
                className={`group min-h-[280px] p-8 transition hover:bg-[#071426] hover:text-white ${
                  index < 3 ? "border-b" : ""
                } ${
                  index % 3 !== 2 ? "lg:border-r" : ""
                } ${
                  index % 2 === 0 ? "md:border-r lg:border-r" : ""
                } border-slate-200`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-black tracking-[0.2em] text-orange-500">
                    {product.number}
                  </span>

                  <span className="text-2xl text-slate-300 transition group-hover:text-orange-500">
                    ↗
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-black">
                  {product.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500 transition group-hover:text-slate-300">
                  {product.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071426] px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-black uppercase tracking-[0.22em] text-orange-500">
                NEDEN JADE AUTOMOTIVE?
              </div>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
                Yedek parça ihtiyacınız için
                <span className="block text-orange-500">
                  güvenilir çözüm.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Otomotiv yedek parça sektöründe hızlı iletişim, ürün
                çeşitliliği ve müşteri ihtiyaçlarını doğru anlayan bir
                tedarik yaklaşımıyla hizmet veriyoruz.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Geniş ürün grubu",
                "Profesyonel tedarik",
                "Hızlı iletişim",
                "Müşteri odaklı yaklaşım",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="text-2xl font-black text-orange-500">
                    ✓
                  </div>

                  <div className="mt-4 font-black">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-sm font-black uppercase tracking-[0.22em] text-orange-500">
            İLETİŞİM
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">
            Oto yedek parça mı arıyorsunuz?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Aracınız için ihtiyaç duyduğunuz parçayı öğrenmek veya ürün
            seçenekleri hakkında bilgi almak için Jade Automotive ile
            iletişime geçebilirsiniz.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="tel:05435571529"
              className="rounded-full bg-[#071426] px-8 py-4 font-black text-white transition hover:bg-[#10233d]"
            >
              0543 557 15 29
            </a>

            <a
              href="https://wa.me/905435571529?text=Merhaba%2C%20oto%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-orange-500 px-8 py-4 font-black text-white transition hover:bg-orange-600"
            >
              WhatsApp'tan Yazın
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
