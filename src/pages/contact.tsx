import Layout from "src/components/layout"
import Contactcontents from "src/components/contactcontents"
import Metadata from "src/components/meta"

export default function Contact(){
    return(
        <>
        <Metadata title='いるかとくらげ(くらるか)へのご連絡/iruka2kurage(kuraruka) Contact' content='iruka2kurage(kuraruka)へのご連絡はこちらからお願いいたします'></Metadata>
            <Layout>
                <Contactcontents></Contactcontents>
            </Layout>
        </>
    )
}