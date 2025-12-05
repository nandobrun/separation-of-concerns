export function createTable(numbers: number[]): number[][] {
  const table: number[][] = []
  for (const n of numbers) {
    const row: number[] = []
    for (const m of numbers) row.push(n * m)
    table.push(row)
  }
  return table
}

export function computeWidth(numbers: number[]): number {
  const biggest = Math.max(...numbers)
  const res = biggest * biggest
  return `${res}`.length + 1
}

export function formatTable(numbers: number[], table: number[][], width: number): string {
  let title = "*".padStart(width, " ") + " ||"
  for (const n of numbers) title += `${`${n}`.padStart(width, " ")} |`
  const sep = "=".repeat(title.length)
  const lines = [title, sep]
  for (let i = 0; i < numbers.length; i++) {
    let row = `${numbers[i]}`.padStart(width, " ") + " ||"
    for (const v of table[i]) row += `${`${v}`.padStart(width, " ")} |`
    lines.push(row)
  }
  return lines.join("\n")
}

export function printMultiplicationTable(numbers: number[]): void {
  const width = computeWidth(numbers)
  const table = createTable(numbers)
  const text = formatTable(numbers, table, width)
  console.log(text)
}
