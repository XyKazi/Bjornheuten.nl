import { Scroll }  from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Box from "./Shapes/box"


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
        <h1 className="text-white">Hello 3</h1>
      </Section>
      </Scroll>
  )
}
