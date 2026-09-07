import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ticari Araç Yedek Parça | Jade Otomotiv",
  description:
    "Ticari araç yedek parça ihtiyaçlarınız için Jade Otomotiv. Fren, filtre, debriyaj, süspansiyon ve bakım parçaları hakkında bilgi alın.",
  alternates: {
    canonical: "/ticari-arac-yedek-parca",
  },
};

export default function TicariAracYedekParcaPage() {
  return (
    <main className="min-h-screen bg-white text-[#071426]">
      <section className="bg-[#071426] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-500">
            Jade Otomotiv
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Ticari Araç Yedek Parça
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Ticari araçların düzenli bakım ve onarım ihtiyaçları için yedek
            parça seçenekleri hakkında Jade Otomotiv'den bilgi alabilirsiniz.
            Araç marka, model ve parça bilgilerinizi paylaşarak doğru ürün
            seçeneklerini araştırabilirsiniz.
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
            Ticari Araçlar İçin Yedek Parça
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Ticari araçlarda yoğun kullanım nedeniyle bakım ve parça
            ihtiyaçlarının doğru şekilde karşılanması önemlidir. Fren
            sisteminden filtrelere, debriyajdan süspansiyon parçalarına kadar
            farklı ürün grupları için bilgi alabilirsiniz.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Ticari araç fren parçaları",
              "Ticari araç filtreleri",
              "Ticari araç debriyaj parçaları",
              "Ticari araç süspansiyon parçaları",
              "Ticari araç bakım parçaları",
              "Ticari araç motor parçaları",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <h3 className="font-black">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Ürün seçenekleri ve araç uyumluluğu hakkında bilgi almak
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
            Ticari Araç Yedek Parça İhtiyacınız İçin
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Aradığınız parçanın doğru şekilde belirlenebilmesi için ticari
            aracınızın marka, model, motor ve mümkünse parça bilgilerini
            paylaşabilirsiniz.
          </p>

          <a
            href="https://wa.me/905435571529?text=Merhaba%2C%20ticari%20arac%C4%B1m%20i%C3%A7in%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-[#071426] px-7 py-4 font-black text-white hover:bg-slate-800"
          >
            Ticari Araç Yedek Parça Sor
          </a>
        </div>
      </section>
    </main>
  );
}
