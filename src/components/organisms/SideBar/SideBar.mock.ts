import { SideBarInterface } from './SideBar.interface'
import {SidebarIconsMock} from "../../../__mock__";

export const SideBarMock: SideBarInterface = {
  // @ts-ignore
  sidebarItems: [...SidebarIconsMock]
}

