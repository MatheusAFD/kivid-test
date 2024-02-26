import { z } from 'zod'

import { envSchema } from './env-schema'

export type EnvSchemaType = z.infer<typeof envSchema>

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends EnvSchemaType {}
  }
}
