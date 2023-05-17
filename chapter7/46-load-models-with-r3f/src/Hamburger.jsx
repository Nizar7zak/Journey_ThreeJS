import { useGLTF } from "@react-three/drei"
const Hamburger = () => {

    // const model = useGLTF('./hamburger.glb')
    const model = useGLTF('./hamburger-draco.glb')
  return (
    <primitive object={model.scene} scale={0.35} />
   
  )
}
useGLTF.preload('./hamburger-draco.glb')
export default Hamburger