

import { SideBar } from "./components/organisms";
import { SideBarMock } from "./components/organisms/SideBar/SideBar.mock";

const App = () => {
  return(
    <div>
      <SideBar
        testID="SideBar"
        sidebarItems={ SideBarMock.sidebarItems }
      />
    </div>
  )
}

export default App;