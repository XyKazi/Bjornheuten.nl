import { Scroll }  from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Box from "./Shapes/box"
import CatapultSwiper from "./components/catapult-swiper"


const Section = (props) => {
  return (
    <section
    className="h-screen flex flex-col justify-center p-10"
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
    className="flex flex-col justify-center p-10 mt-[20vh]">
      <div className="w-full flex items-center justify-center">
        {props.children}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <Scroll html>
      <Section>
      <div className=" w-screen flex flex-col justify-center items-center">
        <div className="flex flex-col gap-[3rem] justify-center items-center w-1/2 bg-zinc-800 px-8 rounded-xl shadow-lg bg-opacity-30  py-16 ">
        <h1 className="text-white font-bold text-9xl">Bjorn Heuten</h1>
        <div className="text-white text-lg flex flex-row w-2/3 justify-between">
          <p><strong>Location:</strong><br/>Netherlands</p>
          <p><strong>Education:</strong><br/>MBO 4 Software Developer</p>
          <p><strong>Age:</strong><br/>18 years old</p>
        </div>
        <div className="flex flex-row gap-3">
          <a className="text-white text-lg">Projects</a>
          About me
        </div>
        </div>

      </div>

      </Section>
      <Section>
        <div id="about" className="w-screen flex flex-col justify-end items-end px-[10rem] about">
          <div className="flex flex-col gap-[3rem] justify-end items-center w-1/2 bg-zinc-800 px-8 rounded-xl shadow-lg bg-opacity-30 py-16">
            <h1 className="text-white font-bold text-7xl">About me</h1>
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
        <div className="w-screen flex flex-col justify-start items-start px-[10rem]">
          <div className="flex flex-col gap-[3rem] justify-start items-center w-1/2 bg-zinc-800 px-8 rounded-xl shadow-lg bg-opacity-30 py-16">
            <h1 className="text-white font-bold text-7xl">
              Skills
            </h1>
            <div className="flex flex-col w-3/4 gap-[2rem]">
              <div>
              <h2 className="text-white font-bold text-2xl">HTML</h2>
              <div className="w-full overflow-hidden bg-gray-50 mt-2 h-5 rounded-xl">
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
            I was an intern at Catapult Creëert, a company that creates design and marketing solutions for companies. I was responsible for creating some websites for clients, or fixing some bugs on the website. I really enjoyed my time at Catapult Creëert, I learned a lot about web development, like how to
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
              </div>
            </div>
        

      </div>

      
      </ProjectSection>
      </Scroll>
  )
}
