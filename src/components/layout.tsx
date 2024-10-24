import Header from "./header";
import Footer from "./footer";
import React, { ReactNode } from "react";


interface LayoutProp{
    title?:String;
    children?: ReactNode;
}

export default function Layout({title,children}:LayoutProp) {
    const mailaddres:string="kurage@gmail.com";
    const licensetext:string="Unauthorized copying and replication of the contents of this site, text and images are strictly prohibited."
    return (
        <>
            <Header></Header>
            <main>
            {children}
            </main>
            <Footer email={mailaddres}  license={licensetext}>
            </Footer>
        </>
    )
}