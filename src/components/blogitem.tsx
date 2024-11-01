import { BlogType } from "src/types/blog";
import {format} from "date-fns"
import Image from "next/image";
import Link from "next/link";

interface BlogItemProps {
    blog: BlogType
}

const BlogItem = ({ blog }: BlogItemProps) => {
    const categoryColor = blog.category.color || "gray"

    return (
        <Link href={`/blog/${blog.slug}`} className="">
            <div>
                <Image
                    src={blog.eyecatch ? blog.eyecatch.url :"/indexkurage.jpg"}
                    width={blog.eyecatch ? blog.eyecatch.width :600}
                    height={blog.eyecatch ? blog.eyecatch.height :400}
                    alt="image"
                />

                <div>
                    {blog.category.name}
                </div>
            </div>
            <div>
                <div>
                    {blog.title}
                </div>
                <div>
                    {format(new Date(blog.publishData),"yyyy/MM/dd")}
                </div>
            </div>
        </Link>
    )
}

export default BlogItem