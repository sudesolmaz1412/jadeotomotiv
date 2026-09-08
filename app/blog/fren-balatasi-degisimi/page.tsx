import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Fren Balatası Değişimi Nasıl Yapılır? Ne Zaman Değişir? | Jade Otomotiv",
  description:
    "Fren balatası değişimi nasıl yapılır, ne zaman gerekir ve değişim sırasında nelere dikkat edilmelidir? Fren balatası değişimi hakkında kapsamlı bilgiler.",
  alternates: {
    canonical:
      "https://frenbalataci.com.tr/blog/fren-balatasi-degisimi",
  },
};

const steps = [
  {
    number: "01",
    title: "Fren sistemi kontrol edilir",
    text: "Değişime başlamadan önce fren balatası, fren diski ve ilgili fren sistemi parçalarının genel durumu kontrol edilir.",
  },
  {
    number: "02",
    title: "Uygun balata belirlenir",
    text: "Araç marka, model, model yılı, motor ve fren sistemi bilgileri kontrol edilerek uyumlu fren balatası belirlenir.",
  },
  {
    number: "03",
    title: "Eski balatalar sökülür",
    text: "Aşınmış fren balataları sökülür ve bağlantı noktaları ile fren sistemi parçaları kontrol edilir.",
  },
  {
    number: "04",
    title: "Yeni balatalar takılır",
    text: "Araca uygun yeni fren balataları doğru şekilde monte edilir ve fren sistemi yeniden kontrol edilir.",
  },
];

export default function FrenBalatasiDegisimiPage() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-[#0b1d31] to-[#06111f]">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <nav className="text-sm text-slate-400">
            <Link href="/" className="hover:text-cyan-400">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-cyan-400">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">
              Fren Balatası Değişimi
            </span>
          </nav>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-14">
          <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Fren Sistemi Rehberi
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Fren Balatası Değişimi
            <span className="mt-3 block text-cyan-400">
              Nasıl Yapılır ve Ne Zaman Gerekir?
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Fren balatası değişimi, aracın fren sisteminin bakımında önemli
            işlemlerden biridir. Fren balatasının aşınma durumu, fren
            performansı ve aracın kullanım şartları değişim zamanının
            belirlenmesinde etkili olur.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "Fren Performansı",
              "Balataların aşınması fren sisteminin çalışma şeklini etkileyebilir.",
            ],
            [
              "Doğru Parça",
              "Yeni balatanın araç ve fren sistemiyle uyumlu olması gerekir.",
            ],
            [
              "Profesyonel Kontrol",
              "Değişim sırasında fren sistemi ve ilgili parçalar kontrol edilmelidir.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h2 className="text-lg font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-14">
          <section>
            <h2 className="text-3xl font-black">
              Fren Balatası Değişimi Ne Zaman Yapılır?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Fren balatası değişimi için her araçta geçerli tek bir kilometre
              değeri bulunmaz. Balatanın kullanım ömrü; aracın kullanım şekli,
              şehir içi trafik, sık dur-kalk, yol koşulları ve sürüş
              alışkanlıkları gibi birçok faktöre bağlı olarak değişebilir.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Bu nedenle fren balatası değişiminde yalnızca kilometreye
              bakmak yerine balatanın fiziksel durumu ve fren sisteminin
              performansı değerlendirilmelidir.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black">
              Fren Balatası Değişimi Gerektiğini Gösteren Belirtiler
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Fren balataları zaman içerisinde aşındığı için bazı belirtiler
              ortaya çıkabilir. Bu belirtiler görüldüğünde fren sisteminin
              kontrol edilmesi gerekir.
            </p>

            <div className="mt-7 grid gap-3 md:grid-cols-2">
              {[
                "Frenleme sırasında alışılmadık sesler",
                "Fren performansında belirgin değişiklik",
                "Fren pedalında normalden farklı his",
                "Fren sistemi uyarı ışığının yanması",
                "Balata kalınlığının belirgin şekilde azalması",
                "Fren diskinde veya balata bölgesinde anormal durum",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-slate-300"
                >
                  <span className="mr-3 text-cyan-400">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black">
              Fren Balatası Değişimi Nasıl Yapılır?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Fren balatası değişimi, aracın fren sistemine müdahale edilen
              teknik bir işlemdir. İşlem sırasında yalnızca eski balatanın
              çıkarılıp yenisinin takılması değil, fren sisteminin genel
              durumunun da kontrol edilmesi önemlidir.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="text-2xl font-black text-cyan-400">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 leading-7 text-slate-400">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black">
              Yeni Fren Balatası Takılırken Nelere Dikkat Edilir?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Fren balatası değişiminde kullanılacak ürünün araçla uyumlu
              olması en önemli konulardan biridir. Aynı araç ailesinde bile
              farklı motor, model yılı veya fren sistemi seçeneklerine göre
              farklı balatalar bulunabilir.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Bu nedenle sipariş öncesinde araç marka, model, model yılı,
              motor bilgisi ve mümkünse mevcut parçanın parça numarası
              kontrol edilmelidir.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black">
              Ön Fren Balatası mı, Arka Fren Balatası mı?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Araçlarda ön ve arka fren sistemlerinde kullanılan balatalar
              birbirinden farklı olabilir. Bu nedenle yalnızca araç markasını
              söylemek doğru ürünü belirlemek için her zaman yeterli değildir.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Fren balatası satın almadan önce hangi aks için ürün gerektiği
              belirlenmeli ve ürünün araçla uyumluluğu doğrulanmalıdır.
            </p>

            <Link
              href="/blog/fren-balatasi-nedir"
              className="mt-6 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/20"
            >
              Fren Balatası Nedir? →
            </Link>
          </section>

          <section>
            <h2 className="text-3xl font-black">
              Fren Balatası Değişiminde Fren Diski Kontrolü
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Fren balatası ile fren diski birlikte çalışan parçalardır.
              Balata değişimi sırasında fren diskinin de genel durumunun
              kontrol edilmesi önemlidir.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Disk yüzeyinde aşırı aşınma, hasar veya başka bir problem
              görülmesi halinde fren sisteminin uzman tarafından
              değerlendirilmesi gerekir.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black">
              Fren Balatası Değişimi Sonrası
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Fren balatası değişimi tamamlandıktan sonra fren sisteminin
              düzgün çalıştığının kontrol edilmesi gerekir. Yeni parçanın
              doğru şekilde monte edilmesi ve fren sisteminin çalışma
              koşullarının uygun olması önemlidir.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Frenleme sırasında olağan dışı bir ses, titreşim veya farklılık
              fark edilirse aracın yeniden kontrol edilmesi gerekir.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black">
              Fren Balatası Fiyatları
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Fren balatası fiyatları aracın marka ve modeli, ürün markası,
              ürün özellikleri, ön veya arka aks seçimi ve tedarik koşullarına
              göre değişebilir.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Güncel fiyat araştırması yaparken aracınıza uygun doğru parçanın
              belirlenmesi, yalnızca en düşük fiyatlı ürünü tercih etmekten
              daha önemlidir.
            </p>

            <Link
              href="/blog/fren-balatasi-fiyatlari"
              className="mt-6 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/20"
            >
              Fren Balatası Fiyatları 2026 →
            </Link>
          </section>

          <section>
            <h2 className="text-3xl font-black">
              Jade Otomotiv ile Fren Balatası Tedariki
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Jade Otomotiv, farklı araç marka ve modellerine yönelik
              otomotiv yedek parça ihtiyaçlarında ürün tedariki konusunda
              hizmet sunmaktadır.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Fren balatası arıyorsanız araç marka, model, model yılı ve motor
              bilgilerinizi paylaşarak aracınıza uygun ürün seçenekleri
              hakkında bilgi alabilirsiniz.
            </p>

            <Link
              href="/oto-yedek-parca-tedarikcisi"
              className="mt-6 inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-bold text-[#06111f] hover:bg-cyan-300"
            >
              Oto Yedek Parça Tedarikçisi →
            </Link>
          </section>
        </div>

        <section className="mt-16 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
            Fren Balatası Değişimi
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Aracınız için doğru fren balatasını bulalım.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Araç marka, model, model yılı ve motor bilgilerinizi paylaşarak
            uygun fren balatası seçenekleri hakkında bilgi alabilirsiniz.
          </p>

          <a
            href="https://wa.me/905435571529"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-xl bg-[#25D366] px-6 py-3 font-bold text-white hover:scale-[1.02]"
          >
            WhatsApp'tan Bilgi Al
          </a>
        </section>

        <footer className="mt-14 border-t border-white/10 pt-8">
          <h2 className="text-2xl font-black">
            Sonuç
          </h2>

          <p className="mt-4 leading-8 text-slate-300">
            Fren balatası değişimi, fren sisteminin bakımında önemli bir
            işlemdir. Balataların aşınma durumunun düzenli olarak kontrol
            edilmesi ve gerektiğinde uygun parçayla değiştirilmesi gerekir.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            Doğru fren balatasını belirlemek için araç bilgileri ve mümkünse
            parça numarası kontrol edilmeli, değişim sırasında fren sisteminin
            ilgili parçaları da değerlendirilmelidir.
          </p>
        </footer>
      </article>
    </main>
  );
}
