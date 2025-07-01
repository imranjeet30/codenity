import { useHttpClient } from '@/api/http/httpClient'

export const useContactRepository = () => {
  const http = useHttpClient()

  const submitContactForm = async (formData) => {
    try {
      console.log('Submitting contact form with data:', formData)
      return await http.post('/api/contact', formData)
    } catch (error) {
      throw error
    }
  }

  return {
    submitContactForm
  }
}