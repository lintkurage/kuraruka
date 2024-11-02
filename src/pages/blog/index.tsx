import { useEffect, useState } from 'react';
import Layout from 'src/components/layout';
import Blogs from 'src/components/blog';
import { client } from 'src/libs/client';
import { BlogType } from '@/types/blog';
import Loading from 'src/components/loading';
import Bloghero from 'src/components/bloghero';

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // エラー状態の追加

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const allBlogs = await client.getList<BlogType>({
          endpoint: "blogs",
          queries: {
            orders: "-publishedAt",
          },
        });
        setBlogs(allBlogs.contents);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('ブログの取得に失敗しました。'); // エラーメッセージの設定
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <Layout title="Blogページです">
        <Bloghero></Bloghero>
        <Loading />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Blogページです">
        <Bloghero></Bloghero>
        <div>{error}</div> {/* エラーメッセージを表示 */}
      </Layout>
    );
  }

  return (
    <Layout title="Blogページです">
      <Bloghero></Bloghero>
      <Blogs blogs={blogs} />
    </Layout>
  );
};

export default Blog;
