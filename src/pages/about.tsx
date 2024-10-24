import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from 'src/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
    <Layout title="Aboutページだよ!">
        <p>サークル:【kuraruka】について</p>
    </Layout>
    </>
  );
}