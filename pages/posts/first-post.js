import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

const firstPost = () => {
  return (
    <Layout>
    <Head>
        <title>First blog post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>First Post</h3>
      <p>
        <Link href="/"><a>Back Home</a></Link>
      </p>
    </Layout>
  )
}

export default firstPost
