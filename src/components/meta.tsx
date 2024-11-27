import React, { ReactNode } from "react";
import Head from 'next/head'

interface MetaProps {
    title: string
    content: string
}

export default function Metadata({ title, content }: MetaProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={content} />
        </Head>
    );
}