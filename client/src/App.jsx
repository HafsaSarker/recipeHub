import { Route, Router, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/home/Home";
import './App.css'
import Create from "./views/create/Create";
import { useEffect, useState } from "react";
import { path } from "./api";
import axios from 'axios'
import ViewPost from "./views/post/ViewPost";
import EditPost from "./views/edit/EditPost";
import Landing from "./views/landing/Landing";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchAllPosts = async() => {
      try {
        const {data} = await axios.get(path)
        setPosts(data.allEntries)
      } catch (error) {
        console.log(error)
      }
    }

    fetchAllPosts()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path='/home' element={<Home posts={posts}/>}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/posts/:id" element={<ViewPost />}/>
          <Route path="/posts/edit/:id" element={<EditPost posts={posts}/>} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
