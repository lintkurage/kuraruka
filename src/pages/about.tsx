import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from 'src/components/layout'
import Abouthero from 'src/components/abouthero'
import Skilldata from 'src/components/skilldata'
import Aboutcontents from 'src/components/aboutcontents'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
    <Layout>
        <Abouthero></Abouthero>
        <Skilldata></Skilldata>
        <Aboutcontents></Aboutcontents>
    </Layout>
    </>
  );
}