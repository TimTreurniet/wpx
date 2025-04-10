import {SidebarItemsType} from "../__types__";

export const SidebarIconsMock: SidebarItemsType[] = [
  {
    id: 1,
    icon: "home",
    label: "Home",
    action: () => alert("Home clicked"),
    isActive: true,
  },
  {
    id: 2,
    icon: "settings",
    label: "Profile",
    action: () => alert("Profile clicked"),
    isActive: false,
  },
  {
    id: 3,
    icon: "profile",
    label: "Profile",
    action: () => alert("Profile clicked"),
    isActive: false,
  },
  {
    id: 4,
    icon: "notifications",
    label: "Notifications",
    action: () => alert("Notifications clicked"),
    isActive: false,
  }
]