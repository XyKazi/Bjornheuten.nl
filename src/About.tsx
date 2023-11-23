import { motion } from "framer-motion";

export function About() {
  const shieldVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen pt-16">
      <motion.h1
        className="text-4xl font-bold"
        // Make text fade in
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About
      </motion.h1>
      <motion.div
        // Make div fade in
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-2 flex flex-col p-5 border-[1px] border-solid border-white/10 bg-background/50 backdrop-blur-md rounded-xl max-w-[40%]"
      >
        <p className="p-2 border-b-2 border-solid border-white/10">
          Hello, I'm Bjorn Heuten, a 17-year-old software developer from the Netherlands. I'm currently studying Software Development at the ROC van Twente.
        </p>

        <p className="p-2 mt-2 border-b-2 border-solid border-white/10">
          I'm currently working for a hosting platform called Hostvio. Hostvio offers cheap and simple solutions to your hosting needs.
        </p>

        <p className="p-2">
          I'm also working on a website called VivaReact. VivaReact is a website for reusable React components.
        </p>
      </motion.div>

      {/* Links to accounts */}
      <motion.div
        className="z-10 flex gap-5 mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.a
          href="https://github.com/XyKazi"
          target="_blank"
          rel="noreferrer"
          variants={shieldVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img src="https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="github" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/bjorn-heuten-ba41ba296/"
          target="_blank"
          rel="noreferrer"
          variants={shieldVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" />
        </motion.a>
      </motion.div>
    </div>
  );
}
