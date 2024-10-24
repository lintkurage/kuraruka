import Link from "next/link"
import React, { ReactNode } from "react";

interface FooterProp{
    license:string;
    email:string;
    children?:ReactNode;
}

export default function Footer({license,email,children}:FooterProp){
    return(
        <>
            <footer>
                <div>
                    <div>
                        {license}
                    </div>
                    <div>
                        {email}
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </footer>
        </>
    )
}