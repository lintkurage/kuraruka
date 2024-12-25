import Layout from "src/components/layout"
import PrivacyPolicycontents from "@/components/privacypolicycontents"
import Metadatas from 'src/components/meta'

export default function Contact(){
    return(
        <>
        <Metadatas title='いるかとくらげ(くらるか)ブログのプライバシーポリシー/iruka2kurage(kuraruka) Privacy Policy' content='iruka2kurage(kuraruka)のプライバシーポリシー' index="noindex"></Metadatas>
            <Layout>
                <PrivacyPolicycontents></PrivacyPolicycontents>
            </Layout>
        </>
    )
}