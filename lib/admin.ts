export function isAdminEmail(email: string | undefined | null): boolean {
  if (!email) return false
  const allowed = (process.env.ADMIN_EMAIL ?? '').split(',').map((e) => e.trim().toLowerCase())
  return allowed.includes(email.toLowerCase())
}
