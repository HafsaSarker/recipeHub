import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/home/Home";
import './App.css'
import Create from "./views/create/Create";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/create" element={<Create />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
