export function shortName(name: string) : string {
  const re : RegExp = /\b(\w)/g;
  return Array.from(name.matchAll(re)).map(match => { return match[1]; }).join('');
}