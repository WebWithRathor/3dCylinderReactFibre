import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Scene from './Scene'
import { Bloom, BrightnessContrast, EffectComposer } from '@react-three/postprocessing'


const Cyl = () => {


  return (
    <Canvas  flat camera={{ fov: 30,focus:true }}>
      <OrbitControls enableZoom={false} rotateSpeed={0.2} />
      <EffectComposer
      >
         <BrightnessContrast
    brightness={0.032} // brightness. min: -1, max: 1
    contrast={.125} // contrast: min -1, max: 1
  />
        <Bloom
          mipmapBlur
          intensity={1} // The bloom intensity.
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
        />
      </EffectComposer>
      <Scene />
    </Canvas>
  )
}

export default Cyl