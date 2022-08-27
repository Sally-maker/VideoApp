export function getEnv(envKey: string): string | undefined {
  return String(import.meta.env[envKey]) ?? undefined
}