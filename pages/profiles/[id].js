import { useRouter } from 'next/router'
import { getUserData, getAllUserIds } from '../../lib/users'
import Layout from '../../components/layout'
import Head from 'next/head'
import Error from 'next/error'

export default function Username( {userData} ) {

  if (!userData) {
    return (
      <Layout>
      <Head>
      <title>OF Loading</title>
      </Head>
        <p>Loading...</p>
      </Layout>
    )
  }

  if (userData === 'none') {
    // return <Error statusCode='404' title='This Profile Could Not Be Found' />
    return <p>This profile could not be found.</p>
  }

  return (
    <Layout>
      <Head>
        <title>{userData.username}</title>
      </Head>
      {userData.avatar}
      <br />
      {userData.bio}
    </Layout>
  )
}

export async function getStaticProps({params}) {
  // const router = useRouter()
  // console.log(router.query)
  const userData = await getUserData(params.id)


  console.log(userData)
  if (!userData) {
    // return { notFound: true }
    return {
      props: {
        userData: 'none'
      }
    }
  }

  return {
    props: {
      userData
    },
    revalidate: 10
  }
}


export async function getStaticPaths() {
  const paths = await getAllUserIds()

  return {
    paths,
    fallback: 'blocking'
  }
}