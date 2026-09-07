import Link from "next/link";

export const metadata = {
  title: "Oto Yedek Parça Blog | Jade Otomotiv",
  description:
    "Oto yedek parça seçimi, araç bakımı, parça fiyatları ve otomotiv dünyası hakkında faydalı bilgiler.",
  alternates: {
    canonical: "/blog",
  },
};

const yazilar = [
  {
    title: "Oto Yedek Parça Seçerken Nelere Dikkat Edilmeli?",
    text: "Aracınız için doğru yedek parçayı seçerken marka, model, motor tipi ve parça uyumluluğuna dikkat edilmesi gerekir.",
    href: "/arac-yedek-parca",
  },
  {
    title: "Oto Yedek Parça Fiyatları Neye Göre Değişir?",
    text: "Yedek parça fiyatlarını etkileyen marka, kalite, üretici ve araç modeli gibi temel faktörleri inceleyin.",
    href: "/oto-yedek-parca-fiyatlari",
  },
  {
    title: "Oto Yedek Parça Tedarikçisi Seçerken Nelere Bakılmalı?",
    text: "Doğru tedarikçi seçiminin parça kalitesi, uyumluluk ve güvenilirlik açısından önemini öğrenin.",
    href: "/oto-yedek-parca-tedarikcisi",
  },
  {
    title: "Ticari Araç Yedek Parça Seçimi",
    text: "Ticari araçlarda yedek parça seçiminde dayanıklılık, uyumluluk ve kullanım koşullarının önemini keşfedin.",
    href: "/ticari-arac-yedek-parca",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-[#071426]">
      <section className="bg-[#071426] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            JADE OTOMOTİV
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Oto Yedek Parça Blog
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Oto yedek parça seçimi, araç bakımı, fiyatlar ve otomotiv
            dünyası hakkında faydalı bilgiler.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {yazilar.map((yazi) => (
              <article
                key={yazi.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h2 className="text-2xl font-bold tracking-tight">
                  {yazi.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {yazi.text}
                </p>

                <Link
                  href={yazi.href}
                  className="mt-6 inline-block font-semibold text-orange-600"
                >
                  Detaylı bilgi →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">
            Aracınız için yedek parça mı arıyorsunuz?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Jade Otomotiv ile araç marka ve modelinize uygun yedek parçalar
            hakkında bilgi alabilirsiniz.
          </p>

          <a
            href="https://wa.me/905435571529"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-xl bg-orange-500 px-7 py-4 font-bold text-white"
          >
            WhatsApp'tan Bilgi Al
          </a>
        </div>
      </section>
    </main>
  );
}
