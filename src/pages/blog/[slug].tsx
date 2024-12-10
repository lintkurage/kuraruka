import { client } from 'src/libs/client';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { BlogType } from '../../types/blog'; // 型のインポート
import Image from 'next/image';
import Layout from 'src/components/layout'
import styles from "src/styles/blog.module.css"
import Metadata from 'src/components/meta';
import BlognameContents from 'src/components/blognamecontents';
import * as DOMPurify from "isomorphic-dompurify";


interface ArticleProps {
    article: BlogType; // 取得する記事データに型を適用
}

const ArticleDetail: NextPage<ArticleProps> = ({ article }) => {
    const router = useRouter();

    // ページがロード中の場合
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.blog}>
            <Metadata title={article.title} content={article.summary}></Metadata>
            <Layout>
                <div>
                    <div className={styles.titlecontent}>
                        <h1 className={styles.titletext}>Blog</h1>
                        <hr className={styles.line} />
                        {/* 記事タイトル */}
                        <h1 className={styles.blogtitle}>{article.title}</h1>

                        {/* 記事公開日 */}
                        <p className={styles.publishedAt}>Publish Date: {new Date(article.publishData).toLocaleDateString()}</p>
                        <p className={styles.publishedAt}>Author:iruka2kurage</p>
                    </div>
                    <div className={styles.eyecatch}>
                        {/* 記事アイキャッチ画像 */}
                        {article.eyecatch && (
                            <Image
                                src={article.eyecatch.url}
                                width={1200}
                                height={600}
                                alt="eyecatch"
                            />
                        )}
                    </div>
                    <div className={styles.bloghtml}>
                        {/* 記事内容 */}
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }} />
                    </div>
                </div>
                <BlognameContents></BlognameContents>
            </Layout>
        </div>
    );
};

// 静的ページ生成用に記事の`slug`を取得
export const getStaticPaths: GetStaticPaths = async () => {
    // MicroCMSから全記事のslugを取得
    const res = await client.get({
        endpoint: 'blogs',
        queries: { limit: 100 }, // 必要に応じて制限を設定
    });

    const paths = res.contents.map((article: BlogType) => ({
        params: { slug: article.slug }, // `slug`に基づいてページを生成
    }));

    return {
        paths,
        fallback: true, // 記事が増えたときに動的にページを生成
    };
};

// 記事データを取得して静的生成
export const getStaticProps: GetStaticProps<ArticleProps> = async ({ params }) => {
    const { slug } = params as { slug: string };

    // slugに基づいて記事詳細を取得
    const res = await client.get({
        endpoint: 'blogs',
        queries: { filters: `slug[equals]${slug}` },
    });

    const article = res.contents[0]; // 一致する記事を取得

    return {
        props: {
            article,
        },
        revalidate: 10, // 再生成の間隔（秒）
    };
};

export default ArticleDetail;
