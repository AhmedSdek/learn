import Link from "next/link";
import Todo from "../components/Todo"

export const metadata = {
    title: 'Posts Page'
}
async function PostsPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return (
        <div>
            Posts Page
            {data.map((post) => {
                console.log(post)
                return (
                    <Link style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '70%', margin: '10px auto' }} href={`/posts/${post.id}`}>
                        <h2 style={{ width: '100%', textAlign: 'center', backgroundColor: 'white', color: 'black' }}>
                            {post.title}
                        </h2>
                    </Link>
                )
            })}
        </div>
    )
}

export default PostsPage