import Layout from '../../components/layout'
import { getAllClassroomIds, getClassroomData } from '../../lib/classrooms'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  const classroomData = await getClassroomData(params.id)
  return {
    props: {
      classroomData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllClassroomIds()
  return {
    paths,
    fallback: false
  }
}

export default function Classroom({ classroomData }) {
  return (
    <Layout isClassroom>
      <Head>
        <title>{classroomData.name}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXL}>{classroomData.name}</h1>
        <div className={utilStyles.lightText}>
          Year:{' '}{classroomData.schoolYear}
          <br />
          Period:{' '}{classroomData.period}
        </div>
        <div dangerouslySetInnerHTML={{ __html: classroomData.contentHtml }} />
      </article>
    </Layout>
  )
}