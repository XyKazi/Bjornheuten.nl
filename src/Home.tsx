import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Home() {
  const imgVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div id="main" className="flex items-center justify-center min-h-screen">
        <motion.div
          className="max-w-screen flex flex-col items-center justify-center p-5 px-20 border-[1px] border-solid border-white/10 bg-background/50 backdrop-blur-md rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[10vh] font-bold">Bjorn Heuten</h1>
          <div className="flex justify-between w-full gap-2">
            <div className="flex flex-col ">
              <span className="font-bold">Location:</span> Netherlands
            </div>
            <div className="flex flex-col ">
              <span className="font-bold">Education:</span> MBO 4 Software Developer
            </div>
            <div className="flex flex-col ">
              <span className="font-bold">Age:</span> 17 years old
            </div>
          </div>
          <div className="flex gap-2 mt-5">
            <Link to={'/projects'} className="px-3 py-2 transition-all border-2 border-solid shadow-md border-primary rounded-xl hover:bg-primary hover:text-white">
              Projects
            </Link>
            <Link to={'/about'} className="px-3 py-2 hover:text-blue-500 hover:underline">
              About
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 justify-center gap-5 mb-5 p-5 border-[1px] border-solid border-white/10 bg-background/50 backdrop-blur-md rounded-xl w-fit m-auto flex flex-wrap"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {[
            "typescript",
            "react",
            "node.js",
            "express",
            "mongodb",
            "mysql",
            "git",
            "github",
            "csharp",
          ].map((logo, index) => (
            <motion.img
              key={index}
              src={`https://img.shields.io/badge/-${logo.charAt(0).toUpperCase() + logo.slice(1)}-007ACC?style=for-the-badge&logo=${logo}&logoColor=white`}
              alt={logo}
              variants={imgVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}
