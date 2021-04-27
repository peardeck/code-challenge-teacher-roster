import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedClassroomsData } from '../../lib/classrooms'

export async function getStaticProps() {
  const allClassroomsData = getSortedClassroomsData()
  return {
    props: {
      allClassroomsData
    }
  }
}

export default function ClassroomList({ allClassroomsData }) {
  return (
    <Layout>
      <Head>
        <title>My Classrooms</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1>My Classrooms</h1>
        <ul className={utilStyles.list}>
          {allClassroomsData.map(({ id, period, name, schoolYear }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/classrooms/${id}`}>
                <a>{name}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                Year:{' '}{schoolYear}
                <br />
                Period:{' '}{period}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}