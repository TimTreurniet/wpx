export type SidebarItemsType = {
  id: number,
  icon: string
  label: string
  action: () => void
  isActive?: boolean
}