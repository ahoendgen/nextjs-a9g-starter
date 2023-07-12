//deep copy an object
export function deepCopy(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}
