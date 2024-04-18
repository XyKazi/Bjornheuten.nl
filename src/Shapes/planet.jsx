import {
    useFrame,
    useLoader,
} from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Reactimg from '../assets/react.svg';

const Planet = () => {
    const planetRef = useRef();
    const texture = useLoader(THREE.TextureLoader, Reactimg);
    const image = useLoader(THREE.ImageLoader, Reactimg);

    useEffect(() => {
        const animate = () => {
            planetRef.current.rotation.y += 0.005;
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    useFrame(() => {
        planetRef.current.rotation.y += 0.005;
    });

    return (
        <mesh ref={planetRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial map={new THREE.Texture(image)} />
        </mesh>
    );
}

export default Planet;