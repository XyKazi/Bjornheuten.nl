import hostvio from "./assets/hostvio.png";
import { motion } from "framer-motion";

export function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen pt-16">
      <motion.div
        className="flex items-center justify-center w-screen"
        // fade in
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">Projects</h1>
      </motion.div>
      <div className="grid grid-cols-2 gap-3 mt-5 px-[20vw]">
        {[
          {
            title: "Hostvio",
            description: "A hosting platform that offers cheap and simple solutions to your hosting needs",
            image: hostvio,
            url: "https://hostvio.net",
          },
          {
            title: "VivaReact",
            description: "A website for reusable React components",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            url: "http://vivareact.nl",
            disabled: true,
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Card({ title, description, image, url, disabled = false }: { title: string; description: string; image: string; url: string; disabled?: boolean }) {
  return (
    <motion.div className="h-full flex flex-col p-5 border-[1px] border-solid border-white/10 bg-background/50 backdrop-blur-md rounded-xl">
      <img src={image} alt={title} className="h-[15rem] aspect-square object-contain" />
      <h1 className="mt-2 text-xl font-bold text-center text-text">{title}</h1>
      <div className="flex items-center justify-center h-full">
        <p className="w-[40%] mx-auto mb-5 text-center text-gray-500">{description}</p>
      </div>
      {!disabled ? (
        <a href={url} className="w-full px-3 py-2 mt-auto font-bold text-center transition-all border-2 border-solid shadow-md border-primary rounded-xl hover:bg-primary hover:text-white">
          Visit
        </a>
      ) : (
        <button className="w-full px-3 py-2 mt-auto font-bold text-center transition-all border-2 border-solid shadow-md border-primary rounded-xl hover:bg-primary hover:text-white" disabled>
          Coming soon
        </button>
      )}
    </motion.div>
  );
}
    