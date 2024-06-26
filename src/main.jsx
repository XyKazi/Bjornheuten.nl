import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import About from './About.jsx'
import { Suspense } from 'react'
import './index.css'
import { Canvas, useFrame } from '@react-three/fiber'
import Box from './Shapes/box.jsx'
import { ScrollControls } from '@react-three/drei'
import AboutBox from './Shapes/about.jsx'
import "./assets/index.js"
import Skills from './Shapes/Skills.jsx'
import Catapult from './Shapes/catapult.jsx'
import Hostvio from './Shapes/hostvio.jsx'


const windowheight = window.innerHeight;




// everytime the user scrolls, check if the user is on the next page, if so, change the model
// if the user is on the first page, show the first model
// if the user is on the second page, show the second model



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="h-screen relative z-10 w-full bg-[url('/6213209.jpg')] bg-black bg-opacity-0">
        <Canvas className='absolute top-0 -z-10 bg-black bg-opacity-50' 
                camera={
                        {
                          position: [0, 0, 35],
                          fov: 80,
                          near: 1,
                          far: 1000,
                        }
        }>

      <ScrollControls onPageChange={console.log("page changed")} pages={6}>
        <Home/>

      <directionalLight/>
      <Suspense fallback={null}>
        <Hostvio/>
      <Box/>
      <Catapult/>
      <AboutBox />
      <Skills/>
      </Suspense>
        </ScrollControls>
    </Canvas>
    

    </div>


  </React.StrictMode>,
)
window.addEventListener('scroll', () => {
  console.log(window.scrollY);
})