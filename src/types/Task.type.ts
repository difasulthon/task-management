
export type SelectableItem = {
  id: number,
  label: string
}

export type Task = {
  id: string,
  title: string,
  description: string,
  label: SelectableItem,
  status: SelectableItem,
  priority: SelectableItem,
  createdAt: string,
  lastModified: string,
  taskNumber: number
}