// page.tsx
import Head from 'next/head';
import Layout from "../components/Layout";
import Card from "../components/Card";


import { useAmp } from "next/amp";

export const config = {
  amp: true,
};

const items = {
  register: {
    title: 'Register/Login',
    subTitle: 'Sign up or log in',
    url: '/register',
    icon: <i className="fa fa-user icon-white"></i>, // Use FontAwesome icon HTML
  },
  rtp: {
    title: 'RTP',
    subTitle: 'Check Now !',
    url: '/rtp',
    icon: <i className="fa fa-rocket icon-white" ></i>, // Use FontAwesome icon HTML
  },
  alternative: {
    title: 'Link Alternative',
    subTitle: 'Access alternative links',
    url: '/alternative',
    icon: <i className="fa fa-link icon-white"></i>, // Use FontAwesome icon HTML
  },
};

export const tagline = ["Situs Gacor", "Trusted", "Game Lengkap", "Pasti Cair"];

export default function Page() {
  const isAmp = useAmp();

  return (
    <Layout>
      <Head>
        <title>Kedan JOS</title>
        <meta name="description" content="Made using Next.js 13" />
      </Head>
      <div className="min-h-screen bg-gradient-to-t from-zinc-800 to-zinc-900 p-2 md:flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto">
        <section className="flex flex-col items-center gap-5 justify-center my-10">
          <amp-img
            src="/logo.png"
            width="100"
            height="100"
            layout="fixed"
            alt="Avatar"
          ></amp-img>
          <div className="text-2xl font-semibold icon-white">
            <a href="" >Server Kamboja</a>
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
    </Layout>
  );
}
