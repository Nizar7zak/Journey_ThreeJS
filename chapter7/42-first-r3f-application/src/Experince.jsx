import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const Experience = () => {
    const groupRef = useRef()
    const {gl, camera} = useThree()

    extend( { OrbitControls } )

    useFrame((state, delta) => {
        groupRef.current.rotation.y += delta;
    })
  return (
    <>
        <orbitControls args={ [ camera, gl.domElement ] } />
        <directionalLight position={[ 1,2,3 ] }  intensity={1} />
        <ambientLight intensity={0.4} />
        <group ref={groupRef}>
            <mesh
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
    </>
  )
}

export default Experience