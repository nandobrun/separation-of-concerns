import { expect } from "@std/expect"
import { createTable, computeWidth, formatTable } from "./multiplication_table.ts"

Deno.test("erstellt einfache tabelle", () => {
  const table = createTable([2,3])
  expect(table).toEqual([[4,6],[6,9]])
})

Deno.test("breite korrekt", () => {
  const width = computeWidth([1,10])
  expect(width).toBe(4)
})

Deno.test("format liefert text", () => {
  const nums = [2,3]
  const table = createTable(nums)
  const width = computeWidth(nums)
  const txt = formatTable(nums, table, width)
  expect(txt.includes("4")).toBe(true)
})
