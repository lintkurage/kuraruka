import  Icon  from 'public/kurarukaicon.svg'
import { Inter } from 'next/font/google'
import Layout from 'src/components/layout'
import Indexhero from 'src/components/indexhero'
import Contents from 'src/components/contents'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Layout>
      <Indexhero></Indexhero>
      <Contents></Contents>
    </Layout>
    </>
  )
}
