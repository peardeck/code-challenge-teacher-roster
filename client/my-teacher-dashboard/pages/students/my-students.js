import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedStudentsData} from '../../lib/students'

export async function getStaticProps() {
  const allStudentsData = getSortedStudentsData()
  return {
    props: {
      allStudentsData
    }
  }
}

export default function StudentList({ allStudentsData }) {
  return (
    <Layout>
      <Head>
        <title>My Students</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1>My Students</h1>
        <ul className={utilStyles.list}>
          { allStudentsData.map(({ id, email, name, phone }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/students/${id}`}>
                <a>{name}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                Email:{' '}{email}
                <br />
                Phone:{' '}{phone}
              </small>
            </li>
          )) }
        </ul>
      </section>
    </Layout>
  )
}