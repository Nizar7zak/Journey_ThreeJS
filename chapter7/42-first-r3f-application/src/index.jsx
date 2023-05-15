import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experince'
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        // flat
        dpr={[1,2]}
        gl={{ 
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputEncoding: THREE.sRGBEncoding,
        }}

        camera={{ 
            fov: 45,
            near: 0.1,
            far: 200,
            position: [3,2,6]
        }}
    >
        <Experience />
    </Canvas>
)

// npm install three@0.148 @react-three/fiber@8.9