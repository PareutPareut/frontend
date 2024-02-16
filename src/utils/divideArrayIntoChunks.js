export const divideArrayIntoChunks = arr => {
  return arr.reduce((acc, cur) => {
    const groupIndex = Math.floor((cur - 1) / 48)
    if (!acc[groupIndex]) {
      acc[groupIndex] = []
    }
    acc[groupIndex].push(cur % 48 === 0 ? 48 : cur % 48)
    return acc
  }, [])
}
