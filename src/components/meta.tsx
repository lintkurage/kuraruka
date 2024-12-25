import React, { ReactNode } from "react";
import Head from 'next/head'

interface MetaProps {
    title: string
    content: string
    index?: string
}

export default function Metadata({ title, content, index="all"}: MetaProps) {
    const GSC=process.env.NEXT_PUBLIC_GSC
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={content} />
            <meta name="google-site-verification" content={GSC} />
            <meta name="robots"content={index}/>
        </Head>
    );
}