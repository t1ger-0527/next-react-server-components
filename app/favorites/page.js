import { notFound } from 'next/navigation';

// Server Components
import SystemInfo from '../../components/server-info';
import Footer from '../../components/footer';
import StoryWithData from '../../components/story-with-data';

// Utils
import fetchData from '../../lib/fetch-data';

export default async function UserPage({ searchParams }) {
  const { id } = searchParams;
  if (!id) {
    notFound();
  }
  const { submitted } = await fetchData(`user/${id}`);

  return (
    <>
      {submitted.slice(0, 30).map((storyId) => {
        return <StoryWithData id={storyId} key={storyId} />;
      })}
      <Footer />
      <SystemInfo />
    </>
  );
}
