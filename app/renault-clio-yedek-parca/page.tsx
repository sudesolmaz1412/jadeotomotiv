import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renault Clio Yedek Parça | Jade Otomotiv",
  description:
    "Renault Clio yedek parça seçenekleri için Jade Otomotiv. Clio bakım, fren, filtre, debriyaj, süspansiyon ve diğer yedek parça ihtiyaçlarınız için iletişime geçin.",
  alternates: {
    canonical: "/renault-clio-yedek-parca",
  },
};

export default function RenaultClioYedekParcaPage() {
  return (
    <main className="min-h-screen bg-white text-[#071426]">
      <section className="bg-[#071426] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-500">
            Jade Otomotiv
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Renault Clio Yedek Parça
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Renault Clio için yedek parça arıyorsanız, araç model ve parça
            ihtiyacınıza göre bilgi almak için Jade Otomotiv ile iletişime
            geçebilirsiniz. Fren, filtre, debriyaj, süspansiyon ve farklı
            bakım parçaları hakkında destek alabilirsiniz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/905435571529"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-orange-500 px-6 py-3 font-black text-white hover:bg-orange-600"
            >
              WhatsApp'tan Bilgi Al
            </a>

            <a
              href="tel:05435571529"
              className="rounded-xl border border-white/20 px-6 py-3 font-black text-white hover:bg-white/10"
            >
              0543 557 15 29
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black">
            Renault Clio İçin Yedek Parça
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Renault Clio yedek parça seçiminde aracın model yılı, motor tipi
            ve mevcut parçanın teknik özellikleri önemlidir. Doğru parçayı
            belirlemek için araç bilgilerinizi paylaşarak Jade Otomotiv'den
            bilgi alabilirsiniz.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Renault Clio fren parçaları",
              "Renault Clio filtreleri",
              "Renault Clio debriyaj parçaları",
              "Renault Clio süspansiyon parçaları",
              "Renault Clio bakım parçaları",
              "Renault Clio motor parçaları",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <h3 className="font-black">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Parça uygunluğu ve ürün seçenekleri hakkında bilgi almak
                  için bizimle iletişime geçebilirsiniz.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black">
            Renault Clio Yedek Parça İçin İletişime Geçin
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Renault Clio'nuz için aradığınız parçayı belirtin. Araç bilgileri
            üzerinden yedek parça seçenekleri hakkında bilgi alabilirsiniz.
          </p>

          <a
            href="https://wa.me/905435571529?text=Merhaba%2C%20Renault%20Clio%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-[#071426] px-7 py-4 font-black text-white hover:bg-slate-800"
          >
            Renault Clio Yedek Parça Sor
          </a>
        </div>
      </section>
    </main>
  );
}
