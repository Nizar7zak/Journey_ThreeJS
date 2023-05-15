import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import CustomObject from "./CutsomObject"
const Experience = () => {
    const groupRef = useRef()
    const {gl, camera} = useThree()

    extend( { OrbitControls } )

    useFrame((state, delta) => {
        // const angle = state.clock.elapsedTime
        // state.camera.position.x = Math.sin(angle) * 8
        // state.camera.position.z = Math.cos(angle) * 8
        // state.camera.lookAt(0,0,0)


        groupRef.current.rotation.y += delta;
    })
  return (
    <>
        <orbitControls args={ [ camera, gl.domElement ] } />
        <directionalLight position={[ 1,2,3 ] }  intensity={1} />
        <ambientLight intensity={0.4} />
        <group >
            <mesh
            
                ref={groupRef}
                position-x ={2}
                >
                <boxGeometry/>
                <meshStandardMaterial color="mediumpurple" />
            </mesh>

            <mesh
                position-x ={-2}
                >
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>

        </group>
            <mesh rotation-x={ - Math.PI * 0.5 } position-y= {-1}  scale={15} >
                <planeGeometry  />
                <meshStandardMaterial color="green" />
            </mesh>
            <CustomObject />
    </>
  )
}

export default Experience