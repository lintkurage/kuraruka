import Layout from "src/components/layout"
import Contactcontents from "src/components/contactcontents"
import Metadatas from 'src/components/meta'

export default function Contact(){
    return(
        <>
        <Metadatas title='いるかとくらげ(くらるか)へのご連絡/iruka2kurage(kuraruka) Contact' content='iruka2kurage(kuraruka)へのご連絡はこちらからお願いいたします'></Metadatas>
            <Layout>
                <Contactcontents></Contactcontents>
            </Layout>
        </>
    )
}