import {Clone, useGLTF } from "@react-three/drei"
const Hamburger = () => {

    // const model = useGLTF('./hamburger.glb')
    const model = useGLTF('./hamburger-draco.glb')
  return <>
    <Clone object={model.scene} scale={0.35} position-x={5} />
    <Clone object={model.scene} scale={0.35} />
    <Clone object={model.scene} scale={0.35} position-x={-5} /> 
  </>
  
}
useGLTF.preload('./hamburger-draco.glb')
export default Hamburger