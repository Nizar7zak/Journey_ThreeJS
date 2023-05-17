import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

const Model = () => {
    const model = useLoader(
        GLTFLoader, 
        './hamburger.glb',
        (loader) => {
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath('./draco/')
            loader.setDRACOLoader(dracoLoader)
        }
    )
  return (
    <primitive 
    object={model.scene} 
    scale={0.35} 
    // position-y={ - 1 }
/>
  )
}

export default Model