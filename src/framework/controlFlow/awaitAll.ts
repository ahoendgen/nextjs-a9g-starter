export async function awaitAll<T>(promises: Promise<T>[]): Promise<T[]> {
  return Promise.all(promises);
}
