import PostDetails from '@/app/components/PostDetails';
import React, { Suspense } from 'react'

async function DaynamicPage({ params }) {
    const lo = (<h1>loading.......</h1>)
    return (
        <div>
            <h1>
                DaynamicPage
            </h1>
            <Suspense fallback={lo}>
                <PostDetails params={params} />
            </Suspense>
        </div>
    )
}

export default DaynamicPage