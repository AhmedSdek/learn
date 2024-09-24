import React from 'react'

async function PostDetails({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.dynamic}`, {
        next: {
            revalidate: 60
        }
    });
    const post = await res.json();
    return (
        <div>PostDetails
            <h2>
                {post.title}
            </h2>
        </div>
    )
}

export default PostDetails