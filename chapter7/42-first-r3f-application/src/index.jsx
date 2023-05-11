import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experince'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas>
        <Experience />
    </Canvas>
)

// npm install three@0.148 @react-three/fiber@8.9