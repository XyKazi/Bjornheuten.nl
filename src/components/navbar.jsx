import { Scroll } from "@react-three/drei"
import React from "react"

export default function Navbar() {
    return (
        <Scroll html>
        <div className="fixed w-screen h-20 flex justify-center text-zinc-50 items-center bg-zinc-800 z-50">
            Navbar
        </div>
        </Scroll>
    )
}