const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3001'
const PAYLOAD_API_KEY = process.env.PAYLOAD_API_KEY // Agregar en .env

export async function getHomePageData() {
  try {
    const response = await fetch(`${PAYLOAD_API_URL}/api/globals/home-page`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Agregar API key si existe
        ...(PAYLOAD_API_KEY && { Authorization: `Bearer ${PAYLOAD_API_KEY}` }),
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching home page:', error)
    return null
  }
}
