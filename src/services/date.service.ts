export function formatDate(date: string): string {
  let d = new Date(date);
  return d.toLocaleDateString();
}
