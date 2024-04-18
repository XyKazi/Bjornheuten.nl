import { Scroll }  from "@react-three/drei"
import CatapultSwiper from "./components/catapult-swiper"
import HostvioSwiper from "./components/hostvio-swiper"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

const Section = (props) => {
  return (
    <section
    className="h-screen flex flex-col justify-center mt-0 md:p-10"
    >
      <div className="w-full flex items-center justify-center">
            {props.children}
      </div>
    </section>
  )
}

const ProjectSection = (props) => {
  return (
    <section
    className="flex flex-col justify-center p-md-10 mt-[10vh]">
      <div className="w-full flex items-center justify-center">
        {props.children}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <Scroll html className="scroll">
      <Section>
      <div className=" w-full h-screen flex flex-col justify-center gap-12 items-center home">
        <div className="flex flex-col gap-[3rem] justify-center items-center w-full xl:w-2/3 2xl:w-1/2 bg-zinc-800 px-8 rounded-xl shadow-lg bg-opacity-30  py-16 ">
        <h1 className="text-white font-bold text-5xl xl:text-8xl">Bjorn Heuten</h1>
        <div className="text-white text-lg flex flex-col gap-4 xl:flex-row w-2/3 justify-between">
          <p><strong>Location:</strong><br/>Netherlands</p>
          <p><strong>Education:</strong><br/>MBO 4 Software Developer</p>
          <p><strong>Age:</strong><br/>18 years old</p>
        </div>

        </div>
        <span className="border-2 w-10 h-10 animate-bounce rounded-full text-white flex justify-center items-center">&#8615;</span>

        </div>


      </Section>
      <Section>
        <div id="about" className="w-full flex flex-col md:justify-end items-center justify-center md:items-end ">
          <div className="flex flex-col gap-[3rem] justify-end items-center xl:w-1/2 mt-96 md:mt-0 bg-zinc-800 md:mr-24 px-8 rounded-xl shadow-lg bg-opacity-30 py-16">
            <h1 className="text-white font-bold text-5xl xl:text-8xl">About me</h1>
            <div className="text-white text-lg flex flex-col gap-[3rem] w-2/3 justify-center">
              <p>
              Hello, I'm Bjorn Heuten, a 18-year-old software developer from the Netherlands. I'm currently studying Software Development at the ROC van Twente.<br/>
              I'm currently helping some friends with an hosting company called "Hostvio", Hostvio is an hosting company that offers web hosting, VPS hosting, and domain registration.

              </p>
              <div className="flex flex-row gap-2 justify-center">
              <a href="https://github.com/XyKazi" target="_blank" rel="noreferrer">
              <img src="https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/bjorn-heuten-ba41ba296/" target="_blank">
              <img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" />
              </a>
              </div>
            </div>
          </div>
        </div>

      </Section>
      <Section>
        <div className="w-screen flex flex-col justify-start items-start mt-96 md:mt-0  xl:px-[10rem]">
          <div className="flex flex-col gap-[3rem] justify-start items-center mt-96 md:mt-0  xl:w-1/2 w-full bg-zinc-800 xl:px-8 rounded-xl shadow-lg bg-opacity-30 md:py-16">
            <h1 className="text-white font-bold text-5xl xl:text-8xl pt-14 md:pt-0">
              Skills
            </h1>
            <div className="flex flex-col w-3/4 gap-[2rem]">
              <div className="">
              <h2 className="text-white font-bold text-xl">HTML</h2>
              <div className="width-full overflow-hidden mt-2 bg-gray-50 h-5 rounded-xl">
                <div className="w-[90%] h-full bg-orange-500 text-white font-bold text-sm text-center" > 90%</div>
              </div>
              </div>
              <div>
              <h2 className="text-white font-bold text-2xl">CSS</h2>
              <div className="width-full overflow-hidden mt-2 bg-gray-50 h-5 rounded-xl">
                <div className="w-[80%] h-full bg-blue-500 text-white font-bold text-sm text-center" > 80%</div>
              </div>
              </div>
              <div>
              <h2 className="text-white font-bold text-2xl">JavaScript</h2>
              <div className="w-full overflow-hidden mt-2 bg-gray-50 h-5 rounded-xl">
                <div className="w-[75%] h-full bg-yellow-500 text-white font-bold text-sm text-center" >75% </div>
                </div>
              </div>
              <div>
              <h2 className="text-white font-bold text-2xl">React</h2>
              <div className="w-full overflow-hidden mt-2 bg-gray-50 h-5 rounded-xl">
                <div className="w-[70%] h-full bg-blue-500 text-white font-bold text-sm text-center" >70%</div>
                </div>
              </div>

            <div>
              <h2 className="text-white font-bold text-2xl">PHP</h2>
              <div className="w-full overflow-hidden mt-2 bg-gray-50 h-5 rounded-xl">
                <div className="w-[67%] h-full bg-purple-500 text-white font-bold text-sm text-center" >67%</div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </Section>
      <ProjectSection>
      <div className="w-screen flex flex-col gap-12 justify-start items-center px-[10rem]">
          <div className="flex flex-col gap-[3rem] justify-start items-center w-4/5 bg-zinc-800 px-8 rounded-xl shadow-lg bg-opacity-30 py-16">
              <h1 className="text-white font-bold text-7xl">
                Projects/internship
              </h1>
            </div>
            <div className="w-4/5 flex flex-row items-center justify-end">
            <div className="flex min-h-[25rem] flex-col gap-[3rem] justify-start items-start w-4/5 bg-zinc-800 px-8 rounded-xl shadow-lg bg-opacity-30 py-16">
            <h1 className="text-white font-bold text-5xl">
              Catapult creëert
            </h1>
            <p className="text-white text-lg">
            I am an intern at Catapult Creëert, a company that creates design and marketing solutions for companies. I was responsible for creating some websites for clients, or fixing some bugs on the websites. I really enjoyed my time at Catapult Creëert, I learned a lot about web development, like how to
            work with wordpress and php.<br/> Here are a few screenshots of the websites I created.
            </p>
            <CatapultSwiper/>
          </div>
            </div>
            <div className="w-4/5 flex flex-row items-center justify-end">
              <div className="flex min-h-2 flex-col gap-12 justify-start items-start w-4/5 bg-zinc-800 px-8 rounded-xl shadow-lg bg-opacity-30 py-16">
                <h1 className="text-white font-bold text-5xl">
                  Hostvio
                </h1>
                <p className="text-white text-lg">
                I'm currently helping some friends with an hosting company called "Hostvio", Hostvio is an hosting company that offers web hosting, VPS hosting, and domain registration. I'm responsible for creating the website, and making sure everything works correctly. I'm also responsible for making sure the website is up to date.
                </p>
                <HostvioSwiper/>
              </div>
            </div>


      </div>


      </ProjectSection>
      </Scroll>
  )
}
