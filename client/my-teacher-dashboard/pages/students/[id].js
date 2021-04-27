import Layout from '../../components/layout'
import { getAllStudentIds, getStudentData } from '../../lib/students'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  const studentData = await getStudentData(params.id)
  return {
    props: {
      studentData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllStudentIds()
  return {
    paths,
    fallback: false
  }
}

export default function Student({ studentData }) {
  return (
    <Layout isStudent>
      <Head>
        <title>{studentData.name}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXL}>{studentData.name}</h1>
        <div className={utilStyles.lightText}>
          Email:{' '}{studentData.email}
          <br />
          Phone:{' '}{studentData.phone}
        </div>
        <div dangerouslySetInnerHTML={{ __html: studentData.contentHtml }} />
      </article>
    </Layout>
  )
}