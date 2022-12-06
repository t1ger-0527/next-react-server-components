// Server Components
import SystemInfo from '../components/server-info';

// Client Components
import StoryWithData from '../components/story-with-data';
import Footer from '../components/footer';

// Utils
import fetchData from '../lib/fetch-data';

export default async function RSCPage() {
  const storyIds = await fetchData('topstories');

  return (
    <>
      {storyIds.slice(0, 30).map((id) => {
        return <StoryWithData id={id} key={id} />;
      })}
      <Footer />
      <SystemInfo />
    </>
  );
}
