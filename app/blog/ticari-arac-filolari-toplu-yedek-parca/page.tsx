import Link from "next/link";

export const metadata = {
  title: "Ticari Araç Filoları İçin Toplu Yedek Parça Tedariki | Jade Otomotiv",
  description:
    "Ticari araç filoları için toplu yedek parça tedarikinde dikkat edilmesi gerekenler, doğru parça seçimi, stok yönetimi ve düzenli sipariş süreçleri.",
  alternates: {
    canonical: "/blog/ticari-arac-filolari-toplu-yedek-parca",
  },
};

export default function TicariFiloBlog() {
  return (
    <main className="min-h-screen bg-white text-[#071426]">
      <section className="bg-[#071426] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            JADE OTOMOTİV
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Ticari Araç Filoları İçin Toplu Yedek Parça Tedariki
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Filo araçlarının bakım ve onarım süreçlerinde doğru parçaya
            zamanında ulaşmak, operasyonun kesintisiz devam etmesi açısından
            büyük önem taşır.
          </p>
        </div>
      </section>

      <article className="px-6 py-16">
        <div className="mx-auto max-w-4xl">

          <h2 className="text-3xl font-bold">
            Ticari Araç Filolarında Yedek Parça Tedariği Neden Önemlidir?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Birden fazla ticari aracın bulunduğu filolarda yedek parça
            ihtiyacı bireysel araçlara göre daha düzenli ve yüksek hacimli
            olabilir. Bakım zamanı gelen araçların beklememesi ve arıza
            nedeniyle operasyonun aksamasının önüne geçilmesi için planlı
            parça tedariki önemlidir.
          </p>

          <h2 className="mt-12 text-3xl font-bold">
            Toplu Yedek Parça Alımında Nelere Dikkat Edilmeli?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Toplu alımlarda yalnızca fiyat avantajına bakmak yerine ürün
            uyumluluğu, marka seçeneği, parça kalitesi, stok durumu ve teslimat
            süreci birlikte değerlendirilmelidir.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Araç Uyumluluğu",
                text: "Parçanın araç marka, model, motor ve üretim yılıyla uyumlu olması gerekir.",
              },
              {
                title: "Stok Sürekliliği",
                text: "Düzenli bakım yapan filolar için ihtiyaç duyulan parçaların erişilebilir olması önemlidir.",
              },
              {
                title: "Toplu Fiyatlandırma",
                text: "Düzenli ve yüksek adetli alımlarda kurumsal teklif seçenekleri değerlendirilebilir.",
              },
              {
                title: "Hızlı Tedarik",
                text: "Parçanın zamanında ulaşması, araçların gereksiz yere operasyon dışında kalmasını önlemeye yardımcı olur.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-3xl font-bold">
            Filolar İçin Hangi Yedek Parçalar Daha Sık Talep Edilir?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Ticari araçların kullanım yoğunluğuna bağlı olarak fren sistemi,
            filtreler, debriyaj ve şanzıman parçaları, süspansiyon elemanları,
            elektrik ve ateşleme parçaları gibi birçok ürün grubuna ihtiyaç
            duyulabilir.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Özellikle periyodik bakım süreçlerinde kullanılacak parçaların
            önceden planlanması, filo yöneticilerinin satın alma süreçlerini
            daha düzenli hale getirebilir.
          </p>

          <h2 className="mt-12 text-3xl font-bold">
            Düzenli Filo Yedek Parça Tedarikinin Avantajları
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Düzenli tedarik modeli, ihtiyaçların önceden belirlenmesine,
            satın alma süreçlerinin planlanmasına ve araçların bakım
            operasyonlarının daha kontrollü yürütülmesine yardımcı olabilir.
          </p>

          <ul className="mt-6 space-y-3 text-slate-600">
            <li>• Planlı bakım süreçleri</li>
            <li>• Daha düzenli satın alma yönetimi</li>
            <li>• Toplu ihtiyaçlarda teklif alma imkanı</li>
            <li>• Araçların operasyon dışında kalma süresini azaltmaya yönelik planlama</li>
            <li>• Farklı parça gruplarını tek tedarik noktasından yönetebilme</li>
          </ul>

          <h2 className="mt-12 text-3xl font-bold">
            Ticari Araç Filonuz İçin Yedek Parça mı Arıyorsunuz?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Jade Otomotiv üzerinden ticari araçlarınız için ihtiyaç duyduğunuz
            yedek parçalar hakkında bilgi alabilir, araç marka ve model
            bilgilerinizi paylaşarak uygun ürün seçeneklerini
            değerlendirebilirsiniz.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/905435571529"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-orange-500 px-7 py-4 font-bold text-white"
            >
              Filo İçin Teklif Al
            </a>

            <Link
              href="/ticari-arac-yedek-parca"
              className="rounded-xl border border-slate-300 px-7 py-4 font-bold"
            >
              Ticari Araç Yedek Parça
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
