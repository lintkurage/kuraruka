import  Icon  from 'public/kurarukaicon.svg'
import { Inter } from 'next/font/google'
import Layout from 'src/components/layout'


const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
  return (
    <>
    <Layout title="Blogページです">
      <p>このページはブログのページです.</p>
    </Layout>
    </>
  )
}