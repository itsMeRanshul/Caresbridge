import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import About from './Components/About.jsx'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import User from './Components/User.jsx'
import {createBrowserRouter, RouterProvider, createRoutesFromElements,Route} from 'react-router-dom'
import Github, { githubLoader } from './Components/Github.jsx'

//creating route it is the method or object which containg the main path
// const route=createBrowserRouter([
//   {
//     path:'/',   // It is main level element in which nesting is there Home --> Aboutus --> contact us
//     element : <Layout/>,
//     children :[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"Contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route 
      loader={githubLoader}
      path='github' 
      element={<Github/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router ={router}/>
  </StrictMode>,
)
