import assert from "assert";

export function shortName(name: string) : string {
  const re : RegExp = /\b(\w)/g;
  return Array.from(name.matchAll(re)).map(match => { return match[1]; }).join('');
}

export function clamp(value: number, min: number, max: number) : number {
  assert(min <= max);
  return Math.max(Math.min(value,max), min);
}