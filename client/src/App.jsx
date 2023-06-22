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
          <Route index element={<Home posts={posts}/>}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/posts/:id" element={<ViewPost />}/>
          <Route path="/posts/edit/:id" element={<EditPost posts={posts}/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
