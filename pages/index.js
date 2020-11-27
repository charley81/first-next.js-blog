import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Just getting into some Next.js things</p>
        <p>
          (This is a sample website - you can also build a site like this on{' '}
          <a href="https://nextjs.org/learn">This Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}