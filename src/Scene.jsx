import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import * as THREE from 'three'


const Scene = () => {

    const tex = useTexture('./Frame 1.png');
    const cylMesh = useRef(null);
    useFrame((state, delta) => {
        cylMesh.current.rotation.y +=  delta;
    })

    return <group rotation={[0, 1.2, 0.4]}>
        <mesh position={[0, 0.3, 0]} ref={cylMesh}  >
            <ambientLight />
            <cylinderGeometry args={[1.5, 1.5, 1.1, 60, 60, true]} />
            <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>
    </group>
}

export default Scene