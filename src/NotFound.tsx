import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function NotFound() {
    return (
        <motion.div className="flex flex-col items-center justify-center h-screen pt-16"
        // fade in

        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
        >
            <h1 className="text-4xl font-bold ">404 :: Not Found</h1>
            <div className="mt-2 flex flex-col p-5 border-[1px] border-solid border-white/10 bg-background/50 backdrop-blur-md rounded-xl max-w-[40%]">
                <p className="p-2 border-b-2 border-solid border-white/10">
                    The page you're looking for doesn't exist.
                </p>

                {/* Button to '/' */}
                <div className="flex justify-center mt-5">
                    <Link to={'/'} className="px-3 py-2 transition-all border-2 border-solid shadow-md border-primary rounded-xl hover:bg-primary hover:text-white">Home</Link>
                </div>
            </div>

        </motion.div>
    )
}