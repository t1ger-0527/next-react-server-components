// Server Components
import SystemInfo from '../../components/server-info'
import Footer from '../../components/footer'
import User from '../../components/user'

// Utils
import { notFound } from 'next/navigation';
import fetchData from '../../lib/fetch-data'

export default async function UserPage({ searchParams }) {
  const { id } = searchParams
  if (!id) {
    notFound()
  }
  const user = await fetchData(`user/${id}`)

  return (
    <>
      <User {...user} />
      <Footer />
      <SystemInfo />
    </>
  )
}
