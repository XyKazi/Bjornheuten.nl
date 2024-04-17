import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { pointsInner } from "./utilsabout";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from "react";


gsap.registerPlugin(useGSAP);
let mm = gsap.matchMedia();
const Point = ({ position, color, randomPosition }) => {
    const ref = useRef();
    const data = useScroll();

    useFrame(() => {
        mm.add("(max-width: 1200px)", () => {
            gsap.set(ref.current.position, {
                y: ref.current.position.y - 45 + data.offset * 210,
    //            x: ref.current.position.x - 25,
            })
        })
        mm.add("(min-width: 1201px", () => {
            gsap.set(ref.current.position, {
                y: ref.current.position.y - 45 + data.offset * 210,
                x: ref.current.position.x - 25,
            })
        })


    })

    useGSAP(() => {



        gsap.set(ref.current.position, {
            z: 30,
            x: position[0] + Math.random() * 5,
            y: position[1] + Math.random() * 5 - 100,
        });
       gsap.to(ref.current.position, {
            z: 0,
            x: position[0],
            y: position[1],

            duration: 3,
            ease: "sine.inOut",
            onComplete: () => {
                gsap.to(ref.current.position, {
                    x: randomPosition[0],
                    y: randomPosition[1],
                    duration: 6,
                    ease: "power4.inOut",
                    repeat: -1,
                    yoyo: true,
                    
                });
            },
        });

    })
    return (
        <Sphere ref={ref} position={position} args={[0.2, 10, 10]}>
            <meshStandardMaterial
                emissive={color}
                emissiveIntensity={0.5}
                roughness={0.5}
                color={color}
            />
        </Sphere>
    );
};

export default function AboutBox() {
    var array = pointsInner;
    const shuffleArray = (array) => {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
      
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
      
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
      
        return array.splice(currentIndex, 1)[0];
    }
    return (
            <group >
                {pointsInner.map((point) => {
                    var randomPosition = shuffleArray([...array]).position;
                    // remove the randomPosition from the array
                    array = array.filter((item) => item.position !== randomPosition);
                    return (
                        <Point
                        key={point.idx} 
                        position={point.position} 
                        randomPosition={randomPosition}
                        color={"white"}/>
                    )

                    })}
            </group>
    );
}