export function uniqueBy<T, K>(arr: T[], keyFn: (item: T) => K): T[] {
    const seen = new Set<K>()
    const result: T[] = []

    for (const item of arr) {
      const key = keyFn(item)
      if (!seen.has(key)) {
        seen.add(key)
        result.push(item)
      }
    }
    
    return result
}
