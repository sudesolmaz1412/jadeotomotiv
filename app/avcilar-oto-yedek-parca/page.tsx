import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avcılar Oto Yedek Parça | Uygun Fiyatlı Yedek Parça",
  description:
    "Avcılar oto yedek parça arayanlar için fren, balata, filtre, debriyaj, süspansiyon ve birçok otomotiv yedek parça seçeneği. Parça ve fiyat bilgisi için iletişime geçin.",
  keywords: [
    "Avcılar oto yedek parça",
    "Avcılar yedek parça",
    "Avcılar otomotiv yedek parça",
    "Avcılar oto parça",
    "Avcılar araç yedek parça",
  ],
  alternates: {
    canonical: "https://frenbalataci.com.tr/avcilar-oto-yedek-parca",
  },
};

const faqs = [
  {
    q: "Avcılar oto yedek parça nereden alınır?",
    a: "Avcılar ve çevresinde oto yedek parça arayan müşteriler için farklı araç marka ve modellerine yönelik yedek parça seçenekleri sunuyoruz. İhtiyacınız olan parçanın marka, model ve mümkünse OEM numarasını paylaşarak bilgi alabilirsiniz.",
  },
  {
    q: "Avcılar oto yedek parça fiyatları nasıl belirlenir?",
    a: "Yedek parça fiyatları aracın marka ve modeline, parçanın türüne, üretici markasına ve ürünün orijinal veya muadil olmasına göre değişebilir. Güncel fiyat ve uygun parça bilgisi için iletişime geçebilirsiniz.",
  },
  {
    q: "Hangi oto yedek parçaları bulunur?",
    a: "Fren ve balata ürünleri başta olmak üzere filtreler, debriyaj ve şanzıman parçaları, süspansiyon parçaları, elektrik ve ateşleme ürünleri gibi farklı otomotiv yedek parça gruplarında seçenekler bulunmaktadır.",
  },
  {
    q: "Parçanın aracıma uyup uymadığını nasıl öğrenebilirim?",
    a: "Araç marka, model, model yılı, motor bilgisi veya OEM/parça numarasını paylaşarak uygunluk konusunda bilgi alabilirsiniz. Doğru parçayı belirlemek için araç bilgileri mümkün olduğunca eksiksiz iletilmelidir.",
  },
];

export default function AvcilarOtoYedekParcaPage() {
  return (
    <main className="min-h-screen bg-white text-[#101828]">
      <section className="bg-[#071a33] px-6 py-20 text-white md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#ff6b1a]">
              Avcılar • İstanbul
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Avcılar Oto Yedek Parça
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              Avcılar ve çevresinde otomobiliniz için doğru oto yedek parçayı
              arıyorsanız; fren, balata, filtre, debriyaj, süspansiyon ve farklı
              parça grupları için bizimle iletişime geçebilirsiniz.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/905435571529"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#ff6b1a] px-7 py-4 font-black text-white transition hover:scale-[1.02]"
              >
                WhatsApp'tan Parça Sor
              </a>

              <a
                href="tel:+905435571529"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-7 py-4 font-black text-white transition hover:bg-white/10"
              >
                0543 557 15 29
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ff6b1a]">
              Oto Yedek Parça
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Avcılar için otomotiv yedek parça seçenekleri
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Araç bakımında kullanılacak parçanın aracınıza uygun olması,
              kaliteli bir üreticiden temin edilmesi ve doğru ürünün
              belirlenmesi önemlidir. Avcılar oto yedek parça aramalarında
              ihtiyacınıza uygun ürünü belirlemek için araç bilgilerinizi
              paylaşabilir ve parça konusunda destek alabilirsiniz.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Fren ve Balata", "Fren balatası, fren diskleri ve fren sistemi parçaları."],
              ["Filtreler", "Yağ, hava, yakıt ve polen filtreleri."],
              ["Debriyaj", "Debriyaj sistemi ve ilgili aktarma parçaları."],
              ["Süspansiyon", "Süspansiyon ve yürüyen aksam parçaları."],
              ["Elektrik ve Ateşleme", "Araç elektrik ve ateşleme sistemleri için parçalar."],
              ["Otomotiv Yedek Parça", "Farklı marka ve modeller için çeşitli yedek parça grupları."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ff6b1a]">
              Doğru Parça
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Avcılar oto yedek parça ararken nelere dikkat edilmeli?
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Oto yedek parça seçiminde yalnızca fiyatı değerlendirmek
                yerine aracın marka ve modeli, motor seçeneği, model yılı ve
                parça numarası gibi bilgilerin kontrol edilmesi gerekir.
              </p>

              <p>
                Özellikle fren, debriyaj ve süspansiyon gibi güvenlik ve
                sürüş konforuyla doğrudan ilişkili sistemlerde aracınızla
                uyumlu ürün seçilmesi önemlidir.
              </p>

              <p>
                Aradığınız parçayı daha hızlı bulabilmek için araç bilgilerinizi
                ve varsa eski parçanın OEM numarasını bizimle paylaşabilirsiniz.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#071a33] p-8 text-white md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ff6b1a]">
              Parçanızı Sorun
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Aracınızın parçasını birlikte bulalım
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Marka, model, model yılı, motor bilgisi veya OEM numarasını
              gönderin. İhtiyacınız olan oto yedek parça hakkında bilgi alın.
            </p>

            <a
              href="https://wa.me/905435571529"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-xl bg-[#ff6b1a] px-6 py-4 font-black text-white"
            >
              WhatsApp'tan İletişime Geç
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ff6b1a]">
            Sık Sorulan Sorular
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Avcılar oto yedek parça hakkında
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-black">
                  {faq.q}
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071a33] px-6 py-16 text-center text-white md:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Avcılar oto yedek parça ihtiyacınız mı var?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Aradığınız parçanın araç bilgilerini gönderin, ürün ve fiyat
            konusunda iletişim ekibimizden bilgi alın.
          </p>

          <a
            href="https://wa.me/905435571529"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-[#ff6b1a] px-8 py-4 font-black text-white"
          >
            WhatsApp'tan Bilgi Al
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Avcılar Oto Yedek Parça",
            description:
              "Avcılar oto yedek parça arayanlar için otomotiv yedek parça seçenekleri.",
            url: "https://frenbalataci.com.tr/avcilar-oto-yedek-parca",
            inLanguage: "tr-TR",
            about: {
              "@type": "Thing",
              name: "Avcılar Oto Yedek Parça",
            },
          }),
        }}
      />
    
      <section className="bg-slate-50 px-6 py-14 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-black md:text-3xl">
            Oto yedek parça hakkında diğer sayfalar
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Oto yedek parça, tedarik ve fiyat bilgileri hakkında hazırladığımız
            diğer sayfalara da göz atabilirsiniz.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <a
              href="/otomotiv-yedek-parca"
              className="rounded-2xl border border-slate-200 bg-white p-5 font-black transition hover:-translate-y-1 hover:shadow-md"
            >
              Otomotiv Yedek Parça →
            </a>
            <a
              href="/oto-yedek-parca-tedarikcisi"
              className="rounded-2xl border border-slate-200 bg-white p-5 font-black transition hover:-translate-y-1 hover:shadow-md"
            >
              Oto Yedek Parça Tedarikçisi →
            </a>
            <a
              href="/oto-yedek-parca-fiyatlari"
              className="rounded-2xl border border-slate-200 bg-white p-5 font-black transition hover:-translate-y-1 hover:shadow-md"
            >
              Oto Yedek Parça Fiyatları →
            </a>
          </div>
        </div>
      </section>

</main>
  );
}
