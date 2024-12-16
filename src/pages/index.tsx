import { Inter } from 'next/font/google'
import Layout from 'src/components/layout'
import Indexhero from 'src/components/indexhero'
import Contents from 'src/components/contents'
import Metadatas from 'src/components/meta'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Metadatas title='いるかとくらげ(くらるか)/iruka2kurage(kuraruka)' content='iruka2kurage(kuraruka)について.様々なものづくりを行っている現役理系大学生'></Metadatas>
      <Layout>
        <Indexhero></Indexhero>
        <Contents></Contents>
      </Layout>
    </>
  )
}
