export class Task {
  constructor () {
    this.checked = false
  }

  title?: string
  id?: string
  description?: string
  checked: boolean

  check (): void {
    this.checked = true
  }
}
