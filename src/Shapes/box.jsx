import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { pointsInner, JpointsInner, OpointsInner, RpointsInner, NpointsInner } from "./utils";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState, useLayoutEffect } from "react";

gsap.registerPlugin(useGSAP);

// once the user scrolls to the next page, so beyond the pageheight, dont show the points anymore



const Point = ({ position, color, randomPosition, Jpunten, Rpunten, Npunten }) => {
    const ref = useRef();
    const data = useScroll();
  useFrame(() => {
    gsap.set(ref.current.position, {
            y: ref.current.position.y + data.offset * 210,
    })
  });

    useGSAP(() => {
        animate();


        gsap.set(ref.current.position, {
            z: 30,
            x: position[0] + Math.random() * 5,
            y: position[1] + Math.random() * 5,
        });
        function animate() {
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
                        repeat: 0,
                        yoyo: true,
                        onComplete: () => {
                            gsap.to(ref.current.position, {
                                x: Jpunten[0],
                                y: Jpunten[1],
                                duration: 6,
                                ease: "power4.inOut",
                                repeat: 0,
                                yoyo: true,
                                onComplete: () => {
                                    gsap.to(ref.current.position, {
                                        x: Rpunten[0],
                                        y: Rpunten[1],
                                        duration: 6,
                                        ease: "power4.inOut",
                                        repeat: 0,
                                        yoyo: true,
                                        onComplete: () => {
                                            gsap.to(ref.current.position, {
                                                x: Npunten[0],
                                                y: Npunten[1],
                                                duration: 6,
                                                ease: "power4.inOut",
                                                repeat: 0,
                                                yoyo: true,
                                                // once it reaches the last point, it will go back to the first point
                                                onComplete: () => {
                                                   animate();
                                                }
                                            })}
                                })}
                            });
                        }
                    });
                },
            });
                    }
       

               
        
      

    })
    return (
        <Sphere ref={ref} position={position} args={[0.1, 10, 10]}>
            <meshStandardMaterial
                emissive={color}
                emissiveIntensity={0.5}
                roughness={0.5}
                color={color}
            />
        </Sphere>
    );
};

export default function Box() {
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

    var Jpunteninnter = OpointsInner;
    return (
        
            <group >
                {pointsInner.map((point) => {
                                        var randomPosition = shuffleArray([...JpointsInner]).position;

                                        var jpunten = shuffleArray([...OpointsInner]).position;
                                        var rpunten = shuffleArray([...RpointsInner]).position;
                                        var npunten = shuffleArray([...NpointsInner]).position;
                                        // remove the randomPosition from the array
                                        array = array.filter((item) => item.position !== randomPosition);
                    return (
                    
                        <Point
                         key={point.idx} 
                         position={point.position} 
                         randomPosition={randomPosition}
                         Jpunten={jpunten}
                            Rpunten={rpunten}
                            Npunten={npunten}
                         color={"white"}/>
                  )
                } )}
            </group>
    );
}