import { BlogType } from "src/types/blog";
import BlogItem from "./blogitem";

interface BlogProps{
    blogs:BlogType[]
}

const Blogs=({blogs}:BlogProps)=>{
    return(
        <>
            <div className="">
                {blogs.map((blog)=>(
                    <BlogItem key={blog.id} blog={blog}></BlogItem>
                ))}
            </div>
        </>
    );
}

export default Blogs