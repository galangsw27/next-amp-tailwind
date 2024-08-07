// page.tsx
import Head from 'next/head';
import Layout from "../components/Layout";
import Card from "../components/Card";
import { useAmp } from "next/amp";
import Footer from 'components/Footer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const config = {
  amp: true,
};

const items = {
  register: {
    title: 'Register/Login',
    subTitle: 'Sign up or log in',
    icon: <i className="fa fa-user icon-white"></i>,
  },
  rtp: {
    title: 'RTP',
    subTitle: 'Check Now !',
    icon: <i className="fa fa-rocket icon-white" ></i>,
  },
  alternative: {
    title: 'Link Alternative',
    subTitle: 'Access alternative links',
    icon: <i className="fa fa-link icon-white"></i>,
  },
};

export const tagline = ["Situs Gacor", "Trusted", "Game Lengkap", "Pasti Cair"];

export default function Page() {
  const isAmp = useAmp();
  const router = useRouter();

  useEffect(() => {
    // Redirect based on the URL type
    const handleRedirect = (urlType: string) => {
      // Example of redirection to the fallback page
      router.push(`/redirect-fallback?type=${urlType}`);
    };

    // Example of how you might handle redirection for a specific type
    if (router.query.type) {
      handleRedirect(router.query.type as string);
    }
  }, [router]);

  return (
    <Layout>
      <Head>
        <title>KEDANJOS ⚫️ Situs Bonus yang Menggiurkan.</title>
        <link rel="canonical" href="http://kedanjosss88.lol/"/>
        <meta name="description" content="Temukan berbagai bonus menarik dari agen KEDANJOS."/>
        <meta name="keywords" content="Login kedanjos, Registrasi kedanjos Daftar kedanjos, Situs Official kedanjos kedan jos"/>
        <meta name="robots" content="index, follow"/>
        <meta name="og:title" content="KEDANJOS⚈Keistimewaan Bonus dari PG Soft untuk Pengalaman Game Terbaik."/>
        <meta property="og:description" content="KEDANJOS - SITUS PERMAINAN ONLINE RESMI DAN TERPERCAYA DI INDONESIA SEASIA - BOLA SEDUNIA - AGEN TOGEL - LIVEGAME - FIHISING GAME - GAME MULTIVERSE"></meta>
        <meta name="og:description" content="KEDANJOS merupakan situs game online yang menawarkan berbagai macam bonus menarik dari provider terkemuka seperti PG Soft."/>
        <meta name="categories" content="kedanjos,daftar kedanjos,login kedanjos."/>
        <meta name="copyright" content="KEDANJOS"/>
        <meta name="author" content="KEDANJOS"/>
        <meta name="publisher" content="KEDANJOS"/>
        <meta name="distribution" content="global"/>
      </Head>
      <div className="min-h-screen bg-gradient-to-t from-zinc-800 to-zinc-900 p-2 md:flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto">
          <section className="flex flex-col items-center gap-5 justify-center my-10">
            <div className='flex flex-col ' style={{width: '100%', marginBottom: '1rem'}}>
              <amp-img
                src="https://kedanjos27.org/resources/images/logo.png"
                width="760"
                height="190"
                layout="responsive"
                alt="Avatar"
              ></amp-img>
            </div>
            <div className="text-zinc-500 flex justify-between gap-5">
              {tagline.map((item, index) => (
                <div
                  className="animatedText text-sm text-center font-thin"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
          <div className='flex flex-col ' style={{width: '100%', marginBottom: '4rem'}}>
            <amp-img
              src="https://i.imgur.com/80KgpLd_d.webp?maxwidth=760&fidelity=grand"
              width="760"
              height="190"
              layout="responsive"
              alt="Banner"
            ></amp-img>
          </div>
          <div className="w-full flex gap-5 my-2 flex-col items-center justify-center pb-2 lg:pb-10">
            <Card
              title={items.register.title}
              subTitle={items.register.subTitle}
              icon={items.register.icon}
              url="/redirect-fallback?type=register"
            />
            <Card
              title={items.rtp.title}
              subTitle={items.rtp.subTitle}
              icon={items.rtp.icon}
              url="/redirect-fallback?type=rtp"
              className='wobble'
            />
            <Card
              title={items.alternative.title}
              subTitle={items.alternative.subTitle}
              icon={items.alternative.icon}
              url="/redirect-fallback?type=alternative"
            />  
          </div>
        </div>
      </div>
      <Footer/>
    </Layout>
  );
}
