export function flatten(arr: any[]): any[] {
    const result: any[] = []

    for (const item of arr) {
      if (Array.isArray(item)) {
        result.push(...flatten(item))
      } else {
        result.push(item)
      }
    }
    
    return result
}
