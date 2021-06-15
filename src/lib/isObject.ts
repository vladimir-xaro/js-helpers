export default function(item: any): boolean {
  return item && typeof item === 'object' && item !== null && !Array.isArray(item);
}