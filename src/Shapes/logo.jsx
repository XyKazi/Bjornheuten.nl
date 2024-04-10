import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Box, Points } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { PointsMaterial, BufferGeometry, BufferAttribute, MeshBasicMaterial, LineDashedMaterial } from 'three';

const Logo = () => {
    const boxRef = useRef();
    const objRef = useRef();

    useEffect(() => {
        const animate = () => {
            boxRef.current.rotation.y += 0.005; // Update the rotation speed as desired
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    const objPath = 'cata.obj'; // Update the path to your OBJ file

    const obj = useLoader(OBJLoader, objPath, (loader) => {
        objRef.current = loader;
    });

    // Create a material for the OBJ model
    const material = new LineDashedMaterial({ color: 'gray', linewidth: 1, scale: 1, dashSize: 3, gapSize: 1 }); // Update the material properties as desired

    // Apply the material to the OBJ model
    obj.traverse((child) => {
            child.material = material;
    });


    return (
        <group scale={[0.5, 0.5, 0.5]} position={[0, 0, -1]}>
            <Box ref={boxRef}>
                <primitive object={obj} />
            </Box>
            <boxGeometry args={[1, 1, 1]} />

        </group>
    );
};

export default Logo;
