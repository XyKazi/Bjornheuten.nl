import { Scroll } from "@react-three/drei"

export default function About() {
  return (
    <Scroll html>
      <div className="h-screen w-screen flex flex-col justify-start items-center">
        <div className="flex flex-col gap-[3rem] justify-center items-center w-1/2 bg-zinc-800 px-8 rounded-xl shadow-lg bg-opacity-30  py-16 ">
        <h1 className="text-white font-bold text-9xl">Bjorn Heuten</h1>
        <div className="text-white text-lg flex flex-row w-2/3 justify-between">
          <p><strong>Location:</strong><br/>Netherlands</p>
          <p><strong>Education:</strong><br/>MBO 4 Software Developer</p>
          <p><strong>Age:</strong><br/>18 years old</p>
        </div>
        </div>

      </div>
      </Scroll>
  )
}
