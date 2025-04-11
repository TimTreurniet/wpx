import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Navigation} from "./components/templates";
import {Contacts, CallHistory, Queue, Recordings} from "./components/pages";

const  App = () => {



  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
            <Route index element={<Contacts />} />
            <Route path={'/call-history'} element={<CallHistory />} />
            <Route path={'/queue'} element={<Queue />} />
            <Route path={'/recordings/:id'} element={<Recordings />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App