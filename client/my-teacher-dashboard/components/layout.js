import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'FooBar Bizbaz'
export const siteTitle = 'My Teacher Dashboard'

export default function Layout({ children, home, isClassroom, isStudent }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Manage your classrooms easier with your Teacher Dashboard!"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              // TODO: change to be default or self uploaded
              src="/images/default-profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}'s Dashboard</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  // TODO: change to be default or self uploaded
                  src="/images/default-profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                { isClassroom ? (
                    <a className={utilStyles.colorInherit}>My Classrooms</a>
                ) : (
                  isStudent ? (
                    <a className={utilStyles.colorInherit}>My Students</a>
                ) : (
                    <a className={utilStyles.colorInherit}>{name}</a>
                ))}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          { isClassroom ? (
            <Link href="/classrooms/my-classrooms">
              <a>← Back to My Classrooms</a>
            </Link>
          ) : isStudent && (
            <Link href="/students/my-students">
              <a>← Back to My Students</a>
            </Link>
          )}
          <br />

          <Link href="/">
            <a>← Back to My Dashboard</a>
          </Link>
        </div>
      )}
    </div>
  )
}