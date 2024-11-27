import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from 'src/components/layout'
import Abouthero from 'src/components/abouthero'
import Skilldata from 'src/components/skilldata'
import Aboutcontents from 'src/components/aboutcontents'
import Metadata from 'src/components/meta'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
    <Metadata title='いるかとくらげ(くらるか)について/iruka2kurage(kuraruka) About Page' content='iruka2kurage(kuraruka)のについて.3Dプリンターを使用したものづくりやNextjs,ReactをもちいたWeb開発.動画制作やボーカロイド楽曲作成などを手掛けています'></Metadata>
    <Layout>
        <Abouthero></Abouthero>
        <Skilldata></Skilldata>
        <Aboutcontents></Aboutcontents>
    </Layout>
    </>
  );
}