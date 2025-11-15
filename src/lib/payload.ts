import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getHomePageData() {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'home-page',
    })

    console.log('Successfully fetched home page data from Payload')
    return data
  } catch (error) {
    console.error('Error fetching home page from Payload:', error)
    // Retorna datos por defecto si hay error
    return null
  }
}
