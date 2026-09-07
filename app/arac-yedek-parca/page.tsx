import Link from "next/link";

export const metadata = {
  title: "Araç Yedek Parça | Otomobil Yedek Parça | Jade Otomotiv",
  description:
    "Araç yedek parça ihtiyaçlarınız için fren, filtre, debriyaj, süspansiyon, elektrik ve diğer otomotiv yedek parçalarını inceleyin. Jade Otomotiv ile iletişime geçin.",
  keywords:
    "araç yedek parça, araç yedek parçaları, otomobil yedek parça, oto yedek parça, yedek parça",
  alternates: {
    canonical: "/arac-yedek-parca",
  },
};

export default function AracYedekParcaPage() {
  return (
    <main className="min-h-screen bg-[#071426] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-orange-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-4xl">

            <div className="text-xs font-black tracking-[0.3em] text-orange-500">
              JADE OTOMOTİV
            </div>

            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Araç Yedek Parça
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Binek ve ticari araçlar için ihtiyaç duyulan otomotiv yedek
              parçalarında doğru ürüne ulaşmanıza yardımcı oluyoruz. Fren
              sistemlerinden filtrelere, debriyajdan süspansiyon parçalarına
              kadar farklı ürün grupları için bizimle iletişime geçebilirsiniz.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://wa.me/905435571529?text=Merhaba%2C%20ara%C3%A7%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#ff6a00] px-7 py-4 text-sm font-black text-white transition hover:bg-orange-600"
              >
                WhatsApp'tan Bilgi Al
              </a>

              <a
                href="tel:05435571529"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-black text-white transition hover:bg-white/10"
              >
                0543 557 15 29
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="bg-white text-[#071426]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10">

          <div className="max-w-4xl">
            <div className="text-xs font-black tracking-[0.25em] text-orange-600">
              ARAÇ YEDEK PARÇA
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Aracınız için yedek parça seçenekleri
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Araçların düzenli bakımında ve parça değişimlerinde doğru yedek
              parçanın seçilmesi önemlidir. Araç marka, model, motor ve parça
              bilgilerine göre uygun ürünün belirlenmesine yardımcı oluyoruz.
              İhtiyacınız olan araç yedek parça hakkında bilgi almak için
              bizimle iletişime geçebilirsiniz.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Jade Otomotiv olarak farklı otomobil markaları için otomotiv
              yedek parça çözümleri sunuyoruz. Aradığınız parçanın mevcutluğu,
              uyumluluğu ve fiyatı hakkında bilgi almak için telefon veya
              WhatsApp üzerinden bize ulaşabilirsiniz.
            </p>
          </div>

          {/* ÜRÜN GRUPLARI */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Fren Sistemleri",
                text: "Fren balatası ve fren sistemiyle ilgili yedek parça ihtiyaçları.",
              },
              {
                title: "Filtreler",
                text: "Motor ve araç bakımında kullanılan farklı filtre grupları.",
              },
              {
                title: "Debriyaj & Şanzıman",
                text: "Debriyaj ve aktarma sistemleri için yedek parça seçenekleri.",
              },
              {
                title: "Süspansiyon",
                text: "Aracın sürüş ve yol tutuş sistemlerinde kullanılan parçalar.",
              },
              {
                title: "Elektrik & Ateşleme",
                text: "Araç elektrik ve ateşleme sistemlerine yönelik parçalar.",
              },
              {
                title: "Otomotiv Yedek Parça",
                text: "Farklı marka ve modeller için çeşitli araç yedek parçaları.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* MARKALAR */}
      <section className="bg-[#f6f7f9] text-[#071426]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10">

          <div className="max-w-3xl">
            <div className="text-xs font-black tracking-[0.25em] text-orange-600">
              MARKALAR
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Farklı araç markaları için yedek parça
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Renault, Fiat, Dacia, Ford, Volkswagen, Opel, Peugeot, Citroën,
              Toyota, Honda, Hyundai, Kia, Nissan, BMW, Mercedes ve Audi gibi
              farklı araç markaları için yedek parça ihtiyaçlarınızda bilgi
              almak üzere bizimle iletişime geçebilirsiniz.
            </p>
          </div>

        </div>
      </section>

      {/* SEO BAĞLANTILARI */}
      <section className="bg-white text-[#071426]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10">

          <h2 className="text-3xl font-black tracking-tight">
            Yedek parça hakkında daha fazla bilgi
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <Link
              href="/otomotiv-yedek-parca"
              className="rounded-2xl border border-slate-200 p-6 font-black transition hover:border-orange-500 hover:text-orange-600"
            >
              Otomotiv Yedek Parça
            </Link>

            <Link
              href="/oto-yedek-parca-tedarikcisi"
              className="rounded-2xl border border-slate-200 p-6 font-black transition hover:border-orange-500 hover:text-orange-600"
            >
              Oto Yedek Parça Tedarikçisi
            </Link>

            <Link
              href="/oto-yedek-parca-fiyatlari"
              className="rounded-2xl border border-slate-200 p-6 font-black transition hover:border-orange-500 hover:text-orange-600"
            >
              Oto Yedek Parça Fiyatları
            </Link>

            <Link
              href="/avcilar-oto-yedek-parca"
              className="rounded-2xl border border-slate-200 p-6 font-black transition hover:border-orange-500 hover:text-orange-600"
            >
              Avcılar Oto Yedek Parça
            </Link>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#ff6a00]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10">

          <div className="max-w-4xl">
            <div className="text-xs font-black tracking-[0.3em] text-orange-100">
              İLETİŞİM
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Aradığınız araç yedek parçayı birlikte bulalım.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-orange-50">
              Aracınızın marka ve model bilgilerini paylaşarak ihtiyaç
              duyduğunuz yedek parça hakkında bilgi alabilirsiniz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href="https://wa.me/905435571529?text=Merhaba%2C%20ara%C3%A7%20yedek%20par%C3%A7a%20i%C3%A7in%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#071426] px-7 py-4 text-sm font-black text-white transition hover:bg-[#10233d]"
              >
                WhatsApp'tan Yazın
              </a>

              <a
                href="tel:05435571529"
                className="rounded-xl border border-white/40 bg-white/10 px-7 py-4 text-sm font-black text-white transition hover:bg-white/20"
              >
                0543 557 15 29
              </a>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
