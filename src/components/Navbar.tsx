import { Link } from "react-router-dom";
import borrielogo from "../assets/borrielogo.png"
import { Sun, Moon } from "react-bootstrap-icons";
import { useEffect } from "react";
import { Theme } from "../types";
import { motion } from "framer-motion";


export default function Navbar({darkmode, setDarkmode}: {darkmode: Theme, setDarkmode: React.Dispatch<React.SetStateAction<Theme>>}) {
    function setdarkmode() {
        document.body.classList.toggle('dark')
        setDarkmode(darkmode === 'dark' ? 'light' : 'dark')
        // save the dark mode preference to localstorage
        localStorage.setItem('darkmode', darkmode === "dark" ? 'light' : 'dark')
    }
    useEffect(() => {
        // get the dark mode preference from localstorage
        const darkmodePreference = localStorage.getItem('darkmode')
        if (darkmodePreference) {
            setDarkmode(darkmodePreference === 'dark' ? 'dark' : 'light')

        }
    }, [])
    useEffect(() => {
        if (darkmode == 'dark') {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [darkmode])

    return (
        <>
            <motion.div 
            // Slide in from top
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{duration: 1}}
            className="bg-background py-2 absolute w-screen z-10 flex gap-5 justify-between px-[25%] items-center shadow-md">
                <img src={borrielogo} alt="Bjorn" className="h-[5vh]" />
                <div className="flex items-center justify-center gap-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <button className="text-xl" onClick={setdarkmode}>{darkmode !== 'light' ?<Sun />  :<Moon /> }</button>
                </div>
            </motion.div>
        </>
    )
}