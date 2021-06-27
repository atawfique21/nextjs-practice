import { useRouter } from 'next/router'
import { getUserData, getAllUserIds } from '../../lib/users'
import Layout from '../../components/layout'
import Head from 'next/head'
import Error from 'next/error'

export default function Username({ userData }) {

  if (userData === 'error') {
    return <Error statusCode='404' title='OF Profile Not Found'/>
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
  return {
    props: {
      userData
    }
  }
}


export async function getStaticPaths() {
  const paths = await getAllUserIds()

  return {
    paths,
    fallback: 'blocking'
  }
}