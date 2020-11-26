import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const firstPost = () => {
  return (
    <div>
    <Head>
        <title>First blog post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>First Post</h3>
      <p>
        <Link href="/"><a>Back Home</a></Link>
      </p>
    </div>
  )
}

export default firstPost
