export function oddEven(num: number, odd: string, even: string): string {
  if (num % 2 === 0) {
    return odd;
  }
  return even;
}
