import React, { useRef } from "react";
import { TextureLoader } from "three";

const CloudsBackground = () => {
    const cloudGroup = useRef();

    const createCloud = () => {
        const numCircles = Math.floor(Math.random() * 5) + 5;
        const cloud = [];
        const material = new TextureLoader().load("/8706.jpg");
        for (let i = 0; i < numCircles; i++) {
            const radius = Math.random() * 0.5 + 0.5;
            const angle = Math.random() * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            cloud.push(
                <mesh key={i} position={[x, y, 0]}>
                    <boxGeometry attach="geometry" args={[0.2, 0.2, 0.2, 16, 16, 16]} />
                    <meshStandardMaterial attach="material" color={"white"} />
                </mesh>
            );
        }
        return cloud;
    };

    return (
        <group ref={cloudGroup} position={[0, 0, -1]}>
            {[...Array(100)].map((_, i) => (
                <group key={i} position={[Math.random() * 10 - 5, Math.random() * 10 - 5, 0]}>
                    {createCloud()}
                </group>
            ))}
        </group>
    );
};

export default CloudsBackground;