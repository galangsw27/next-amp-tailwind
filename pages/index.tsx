// page.tsx
import Head from 'next/head';
import Layout from "../components/Layout";
import Card from "../components/Card";


import { useAmp } from "next/amp";
import Footer from 'components/Footer';

export const config = {
  amp: true,
};



const items = {
  register: {
    title: 'Register/Login',
    subTitle: 'Sign up or log in',
    url: 'https://kedanjos27.org/index.html#/register?referralid=antirungkad',
    icon: <i className="fa fa-user icon-white"></i>, // Use FontAwesome icon HTML
  },
  rtp: {
    title: 'RTP',
    subTitle: 'Check Now !',
    url: '',
    icon: <i className="fa fa-rocket icon-white" ></i>, // Use FontAwesome icon HTML
  },
  alternative: {
    title: 'Link Alternative',
    subTitle: 'Access alternative links',
    url: 'https://kedanjos11.co/#/index?category=home',
    icon: <i className="fa fa-link icon-white"></i>, // Use FontAwesome icon HTML
  },
};

export const tagline = ["Situs Gacor", "Trusted", "Game Lengkap", "Pasti Cair"];

export default function Page() {
  const isAmp = useAmp();

  return (
    <Layout>
      <Head>
        <title>KEDANJOS ⚫️ Situs Bonus yang Menggiurkan.</title>
        <link rel="canonical" href="https://kedanjos27.org/"/>
        <meta name="description" content="Temukan berbagai bonus menarik dari agen KEDANJOS."/>
        <meta name="keywords" content="kedanjos,daftar kedanjos,login kedanjos."/>
        <meta name="og:title" content="KEDANJOS⚈Keistimewaan Bonus dari PG Soft untuk Pengalaman Game Terbaik."/>
        <meta name="og:description" content="KEDANJOS merupakan situs game online yang menawarkan berbagai macam bonus menarik dari provider terkemuka seperti PG Soft."/>
        <meta name="categories" content="kedanjos,daftar kedanjos,login kedanjos."/>
        <meta name="copyright" content="KEDANJOS"/>
        <meta name="author" content="KEDANJOS"/>
        <meta name="publisher" content="KEDANJOS"/>
        <meta name="distribution" content="global"/>
        <meta name='' content='' />
       
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
              url={items.register.url}
            />
            <Card
              title={items.rtp.title}
              subTitle={items.rtp.subTitle}
              icon={items.rtp.icon}
              url={items.rtp.url}
              className='wobble'
            />
            <Card
              title={items.alternative.title}
              subTitle={items.alternative.subTitle}
              icon={items.alternative.icon}
              url={items.alternative.url}
            />
          </div>
      </div>

      </div>
      <Footer/>

    </Layout>
  );
}
