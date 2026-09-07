import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yedek Parça Satışı | Jade Otomotiv",
  description:
    "Yedek parça satışı için Jade Otomotiv. Binek ve ticari araçlar için otomotiv yedek parçaları hakkında bilgi ve iletişim.",
  alternates: {
    canonical: "/yedek-parca-satisi",
  },
};

export default function YedekParcaSatisiPage() {
  return (
    <main className="min-h-screen bg-white text-[#071426]">
      <section className="bg-[#071426] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Jade Otomotiv
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Yedek Parça Satışı
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Binek ve ticari araçlar için ihtiyaç duyulan otomotiv yedek
            parçalarını farklı ürün grupları ve araç markaları için
            araştırabilir, ürün ve parça ihtiyaçlarınız hakkında bizimle
            iletişime geçebilirsiniz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/905435571529"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              WhatsApp'tan Bilgi Al
            </a>

            <a
              href="tel:+905435571529"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              0543 557 15 29
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Otomotiv Yedek Parça Satışı</h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Yedek parça seçiminde aracın marka, model, motor ve üretim yılı
            gibi bilgilerin doğru değerlendirilmesi önemlidir. Jade Otomotiv,
            otomotiv yedek parça ihtiyaçlarınız için ürün grupları konusunda
            bilgi ve yönlendirme sunar.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Fren ve balata parçaları",
              "Filtre ve bakım parçaları",
              "Debriyaj ve şanzıman parçaları",
              "Süspansiyon parçaları",
              "Elektrik ve ateşleme parçaları",
              "Motor ve yardımcı parçalar",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <h3 className="font-semibold">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Araç yedek parça ihtiyaçlarınız için bilgi almak üzere
                  bizimle iletişime geçebilirsiniz.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Yedek Parça İhtiyacınız İçin İletişime Geçin
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Aracınız için ihtiyaç duyduğunuz yedek parça hakkında bilgi almak
            ve ürün seçeneklerini öğrenmek için Jade Otomotiv ile iletişime
            geçebilirsiniz.
          </p>

          <div className="mt-8">
            <a
              href="https://wa.me/905435571529"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-[#071426] px-7 py-4 font-semibold text-white hover:bg-slate-800"
            >
              WhatsApp'tan İletişime Geç
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
