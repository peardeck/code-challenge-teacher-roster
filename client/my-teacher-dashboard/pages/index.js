import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Make managing classrooms easier with your Teacher Dashboard!</p>
        <p>
          (This was built with the help of{' '}
          <a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          <Link href={`/classrooms/my-classrooms`}>
            <a>My Classrooms</a>
          </Link>
        </h2>
        <h2 className={utilStyles.headingLg}>
          <Link href={`/students/my-students`}>
            <a>My Students</a>
          </Link>
        </h2>
      </section>
    </Layout>
  )
}