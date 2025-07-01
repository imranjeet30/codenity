import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

// In your repository:
const validateWithSchema = (schema, data) => {
  try {
    schema.parse(data)
    return { isValid: true, errors: null }
  } catch (error) {
    const errors = error.errors.reduce((acc, curr) => {
      acc[curr.path[0]] = [curr.message]
      return acc
    }, {})
    return { isValid: false, errors }
  }
}