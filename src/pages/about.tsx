import { Inter } from 'next/font/google'
import Layout from 'src/components/layout'
import Abouthero from 'src/components/abouthero'
import Skilldata from 'src/components/skilldata'
import Aboutcontents from 'src/components/aboutcontents'
import Metadatas from 'src/components/meta'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
    <Metadatas title='いるかとくらげ(くらるか)について/iruka2kurage(kuraruka) About Page' content='iruka2kurage(kuraruka)のについて.3Dプリンターを使用したものづくりやNextjs,ReactをもちいたWeb開発.動画制作やボーカロイド楽曲作成などを手掛けています'></Metadatas>
    <Layout>
        <Abouthero></Abouthero>
        <Skilldata></Skilldata>
        <Aboutcontents></Aboutcontents>
    </Layout>
    </>
  );
}