import { transform } from '../lib/get-item'
import Story from './story'

// Utils
import fetchData from '../lib/fetch-data';

export default async function StoryWithData({ id }) {
  const data = await fetchData(`item/${id}`)
  const story = transform(data)
  return <Story {...story} />
}
