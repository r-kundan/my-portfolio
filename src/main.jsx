import React, { Suspense } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import ReactDOM from 'react-dom/client'
import './index.css'
import Img from './components/Img.jsx'
// import Project from './components/Project.jsx'
import { RecoilRoot } from 'recoil'
import CV from './components/CV.jsx'
// import Contect from './components/Contect.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  
     <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<Suspense fallback={"loading..."}><About/></Suspense>}/>
      <Route path='/img' element={<Suspense fallback={"loading..."}><Img/></Suspense>} />
      {/* <Route path='/project' element={<Project/>} /> */}
      <Route path='/cv' element={<Suspense fallback={"loading..."}><CV/></Suspense>}/>
      {/* <Route path='/contact' element={<Contect/>}/> */}
    </Route>
   
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
    <RouterProvider router={router}/>
    </RecoilRoot>
  </React.StrictMode>,
)
