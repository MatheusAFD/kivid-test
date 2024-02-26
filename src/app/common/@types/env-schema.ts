import { z } from 'zod'

export const envSchema = z.object({
  NEXT_PUBLIC_WEATHER_KEY: z.string().trim().min(1)
})
