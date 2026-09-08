import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fren Balatası Nedir? Ne İşe Yarar? Ne Zaman Değişir? | Jade Otomotiv",
  description:
    "Fren balatası nedir, ne işe yarar, ne zaman değişir? Aşınmış fren balatası belirtileri, doğru fren balatası seçimi ve değişim süreci hakkında kapsamlı rehber.",
  alternates: {
    canonical: "https://frenbalataci.com.tr/blog/fren-balatasi-nedir",
  },
};

export default function FrenBalatasiNedirPage() {
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
            <span className="text-slate-300">Fren Balatası</span>
          </nav>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-14">
          <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Otomotiv Yedek Parça Rehberi
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Fren Balatası Nedir?
            <span className="mt-3 block text-cyan-400">
              Ne İşe Yarar ve Ne Zaman Değişir?
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Fren balatası, aracın güvenli şekilde yavaşlamasını ve durmasını
            sağlayan fren sisteminin en önemli parçalarından biridir. Fren
            balatası seçimi, kullanım ömrü ve zamanında değişimi sürüş
            güvenliği açısından büyük önem taşır.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "01",
              "Güvenli Frenleme",
              "Fren balatası, fren diskiyle sürtünme oluşturarak aracın yavaşlamasına yardımcı olur.",
            ],
            [
              "02",
              "Düzenli Kontrol",
              "Balata kalınlığının ve fren sisteminin düzenli kontrol edilmesi önemlidir.",
            ],
            [
              "03",
              "Doğru Parça",
              "Araç marka, model, motor ve fren sistemiyle uyumlu balata tercih edilmelidir.",
            ],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="text-3xl font-black text-cyan-400">{number}</div>
              <h2 className="mt-3 text-lg font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-14">
          <section>
            <h2 className="text-3xl font-black">
              Fren Balatası Nedir?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Fren balatası, özellikle disk fren sistemlerinde frenleme
              sırasında fren diski üzerine baskı uygulayarak sürtünme oluşturan
              ve aracın hızını azaltmasına yardımcı olan bir fren sistemi
              parçasıdır.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Frenleme sırasında oluşan sürtünme nedeniyle fren balatası zaman
              içerisinde aşınır. Bu nedenle fren balatası, aracın periyodik
              olarak kontrol edilmesi gereken önemli yedek parçalarından
              biridir.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black">
              Fren Balatası Ne İşe Yarar?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Fren pedalına basıldığında fren sistemi balataların fren
              disklerine baskı uygulamasını sağlar. Balata ve disk arasındaki
              sürtünme sayesinde aracın hareketi yavaşlatılır ve araç
              kontrollü şekilde durdurulur.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Bu nedenle fren balatasının doğru çalışması, aracın fren
              performansı açısından kritik öneme sahiptir. Balatanın aşınması
              veya uygun olmayan bir ürün kullanılması durumunda fren sistemi
              mutlaka kontrol edilmelidir.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black">
              Fren Balatası Ne Zaman Değişir?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Fren balatasının değişim zamanı her araç için aynı değildir.
              Şehir içi yoğun trafik, sık dur-kalk, ağır yük, kullanım
              alışkanlıkları ve yol şartları balatanın aşınma hızını
              etkileyebilir.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Bu nedenle yalnızca kilometreye bakarak karar vermek yerine
              balatanın fiziksel durumu ve fren sisteminin genel performansı
              kontrol edilmelidir.
            </p>

            <div className="mt-7 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
              <h3 className="font-bold text-amber-300">
                Fren sistemi güvenlik açısından kritiktir.
              </h3>

              <p className="mt-2 leading-7 text-slate-300">
                Frenleme sırasında anormal ses, performans değişikliği veya
                başka bir sorun fark edilirse aracın uzman bir servis
                tarafından kontrol edilmesi gerekir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black">
              Fren Balatasının Aşındığı Nasıl Anlaşılır?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Fren balatasındaki aşınma seviyesini anlamanın en doğru yolu
              fiziksel kontrol yapılmasıdır. Bununla birlikte sürüş sırasında
              bazı belirtiler ortaya çıkabilir.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Frenleme sırasında alışılmadık sesler",
                "Fren pedalında farklılık hissedilmesi",
                "Fren performansında belirgin değişiklik",
                "Fren sistemi uyarı ışığının yanması",
                "Balata kalınlığının düşük olması",
                "Fren diski ve balata bölgesinden gelen anormal sesler",
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
              Ön Fren Balatası ve Arka Fren Balatası
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Araçların fren sistemlerinde ön ve arka akslarda farklı
              bileşenler kullanılabilir. Bu nedenle ön fren balatası ile arka
              fren balatası aynı parça olmayabilir.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Fren balatası satın alırken aracın marka ve modelinin yanında
              model yılı, motor seçeneği, fren sistemi ve mümkünse parça
              numarası da kontrol edilmelidir.
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
              Fren Balatası Nasıl Seçilir?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Fren balatası seçiminde ilk kriter aracın fren sistemiyle
              uyumluluktur. Sadece fiyat üzerinden karar vermek yerine
              parçanın aracınıza uygun olup olmadığı doğrulanmalıdır.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Renault, Fiat, Dacia, Ford, Volkswagen, Opel, Peugeot, Citroën
              ve diğer birçok marka için farklı fren balatası seçenekleri
              bulunabilir. Aynı marka içerisinde bile model ve motor
              seçeneklerine göre farklı parçalar kullanılabilir.
            </p>

            <Link
              href="/otomotiv-yedek-parca"
              className="mt-6 inline-flex rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 font-semibold hover:bg-white/[0.1]"
            >
              Otomotiv Yedek Parça →
            </Link>
          </section>

          <section>
            <h2 className="text-3xl font-black">
              Fren Balatası Alırken Parça Numarası Neden Önemli?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Aynı araç modelinin farklı üretim yıllarında veya farklı motor
              seçeneklerinde farklı fren parçaları kullanılabilir. Bu nedenle
              mümkün olduğunda mevcut parçanın parça numarasının kontrol
              edilmesi doğru ürünün bulunmasına yardımcı olur.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Sipariş öncesinde araç marka, model, model yılı, motor bilgisi
              ve mevcut parça bilgileri paylaşılmalıdır.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black">
              Fren Balatası Fiyatları Neye Göre Değişir?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Fren balatası fiyatları; araç marka ve modeli, ürün markası,
              ürün özellikleri, ön veya arka aks seçimi ve tedarik koşullarına
              göre değişebilir.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Güncel fiyat araştırması yaparken yalnızca en düşük fiyatı
              aramak yerine aracınıza uygun doğru ürünün belirlenmesi daha
              önemlidir.
            </p>

            <Link
              href="/oto-yedek-parca-fiyatlari"
              className="mt-6 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/20"
            >
              Oto Yedek Parça Fiyatları →
            </Link>
          </section>

          <section>
            <h2 className="text-3xl font-black">
              Jade Otomotiv ile Fren Balatası
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Jade Otomotiv, otomotiv yedek parça ihtiyaçlarında farklı araç
              marka ve modellerine yönelik ürün tedariki konusunda hizmet
              sunmaktadır.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Fren balatası arıyorsanız araç marka, model, model yılı ve motor
              bilgilerinizi paylaşarak aracınıza uygun ürün araştırması
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
            Fren Balatası
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Aracınıza uygun fren balatasını bulalım.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Araç marka, model, model yılı ve motor bilgilerinizi paylaşarak
            fren balatası seçenekleri hakkında bilgi alabilirsiniz.
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
          <h2 className="text-2xl font-black">Sonuç</h2>

          <p className="mt-4 leading-8 text-slate-300">
            Fren balatası, aracın frenleme sistemindeki en önemli aşınan
            parçalardan biridir. Doğru fren balatasının seçilmesi, düzenli
            kontrollerin yapılması ve gerekli durumlarda zamanında
            değiştirilmesi önemlidir.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            Fren balatası ararken yalnızca fiyatı değil, aracınızla uyumluluğu
            ve doğru parça numarasını da dikkate almak gerekir.
          </p>
        </footer>
      </article>
    </main>
  );
}
