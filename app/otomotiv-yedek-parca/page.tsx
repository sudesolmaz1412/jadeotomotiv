import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otomotiv Yedek Parça | Jade Automotive",
  description:
    "Otomotiv yedek parça ürünlerinde güvenilir tedarik ve geniş ürün seçenekleri. Fren, süspansiyon, motor ve daha birçok araç parçası için Jade Automotive.",
  keywords: [
    "otomotiv yedek parça",
    "oto yedek parça",
    "araç yedek parça",
    "otomobil yedek parça",
    "otomotiv yedek parça tedarikçisi",
    "yedek parça satışı",
    "fren balatası",
  ],
  alternates: {
    canonical: "https://frenbalataci.com.tr/otomotiv-yedek-parca",
  },
};

export default function OtomotivYedekParcaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#071525] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="mb-5 font-bold uppercase tracking-[0.2em] text-[#ff6b1a]">
              JADE AUTOMOTIVE
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Otomotiv Yedek Parça
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Araçların ihtiyaç duyduğu yedek parçaların doğru ürün,
              güvenilir tedarik ve profesyonel hizmet anlayışıyla
              müşterilere ulaştırılması için çalışıyoruz.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#urunler"
                className="rounded-full bg-[#ff6b1a] px-7 py-4 font-bold text-white transition hover:scale-105"
              >
                Ürün Gruplarını İncele
              </a>

              <a
                href="https://wa.me/905435571529"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#071525]"
              >
                WhatsApp ile İletişim
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.18em] text-[#ff6b1a]">
              Yedek Parça Tedariki
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              İhtiyacınız Olan Otomotiv Yedek Parçaları
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Otomotiv sektöründe yedek parça ihtiyacının yalnızca ürün
              bulmaktan ibaret olmadığını biliyoruz. Doğru parçanın doğru
              araçla eşleşmesi, ürün kalitesi ve güvenilir tedarik süreci
              bizim için önemlidir.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Jade Automotive olarak farklı araç gruplarına yönelik otomotiv
              yedek parça ihtiyaçlarında çözüm sunuyor, müşterilerimizi
              ihtiyaçlarına uygun ürünlere yönlendirmeyi hedefliyoruz.
            </p>
          </div>
        </div>
      </section>

      <section id="urunler" className="bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="font-bold uppercase tracking-[0.18em] text-[#ff6b1a]">
              Ürün Grupları
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Otomotiv Yedek Parça Çözümleri
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fren Sistemleri",
                text: "Fren balatası ve fren sistemi parçaları için ürün seçenekleri.",
              },
              {
                title: "Süspansiyon Parçaları",
                text: "Aracın sürüş ve yol tutuş sistemlerinde kullanılan yedek parçalar.",
              },
              {
                title: "Motor Parçaları",
                text: "Farklı araç ihtiyaçlarına yönelik motor ve yardımcı sistem parçaları.",
              },
              {
                title: "Filtreler",
                text: "Bakım süreçlerinde kullanılan çeşitli otomotiv filtreleri.",
              },
              {
                title: "Elektrik ve Elektronik",
                text: "Araçların elektrik ve elektronik sistemlerine yönelik parça grupları.",
              },
              {
                title: "Diğer Yedek Parçalar",
                text: "Otomotiv sektöründeki farklı parça ihtiyaçları için geniş ürün seçenekleri.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071525] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.18em] text-[#ff6b1a]">
                Neden Jade Automotive?
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Güvenilir Otomotiv Yedek Parça Tedariki
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Otomotiv yedek parça sektöründe ürün çeşitliliği, hızlı
                iletişim ve müşteri ihtiyaçlarını doğru anlamaya odaklanan
                bir hizmet anlayışı sunuyoruz.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Geniş ürün grupları",
                "Profesyonel ürün tedariki",
                "Hızlı iletişim",
                "Müşteri odaklı hizmet",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 font-bold"
                >
                  <span className="mr-3 text-[#ff6b1a]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-[#ff6b1a]">
            İletişim
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Otomotiv Yedek Parça İhtiyacınız mı Var?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Aracınız veya işletmeniz için ihtiyaç duyduğunuz yedek parça
            hakkında bilgi almak ve ürün seçeneklerini öğrenmek için bizimle
            iletişime geçebilirsiniz.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/905435571529"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#ff6b1a] px-8 py-4 font-black text-white transition hover:scale-105"
            >
              WhatsApp'tan Bilgi Al
            </a>

            <a
              href="https://www.jadeautomotive.net"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#071525] px-8 py-4 font-black text-[#071525] transition hover:bg-[#071525] hover:text-white"
            >
              Jade Automotive
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
