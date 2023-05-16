import { useFrame } from '@react-three/fiber'
import { 
    SoftShadows, 
    BakeShadows, 
    useHelper, 
    OrbitControls, 
    AccumulativeShadows, 
    RandomizedLight 
} from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'



export default function Experience()
{
    const cube = useRef()
    const directionalLight = useRef()

    useHelper(directionalLight, THREE.DirectionalLightHelper, 1, 'red')

    
    useFrame((state, delta) =>
    {
        // cube.current.position.x = 2 + Math.sin(state.clock.elapsedTime)
        cube.current.rotation.y += delta * 0.2
    })

    return <>
        <Perf position="top-left" />

        {/* <SoftShadows         
            frustum= {3.75}
            size={0.005} 
            near={9.5} 
            samples={17}  
            rings={11} 
        /> */}

        {/* <BakeShadows /> */}
{/* 
        <AccumulativeShadows
            position={[ 0, -0.999, 0]}
            scale={10}
            color='#316d39'
            opacity={0.8}
            frames={Infinity}
            temporal
            blend={100}

        >
            <RandomizedLight 
                amount={8}
                radius={1}
                ambient={0.5}
                intensity={1}
                position={[1,2,3]}
                bias={0.001}
            />

        </AccumulativeShadows> */}

        <OrbitControls makeDefault />

        <directionalLight 
            ref={directionalLight}
            position={ [ 1, 2, 3 ] } 
            intensity={ 1.5 } 
            castShadow
            shadow-mapSize = {[1024, 1024]}
            shadow-camera-top = {5}
            shadow-camera-right = {5}
            shadow-camera-bottom = {-5}
            shadow-camera-left = {-5}
            shadow-camera-near = {0}
            shadow-camera-far = {10}
        />
        <ambientLight intensity={ 0.5 } />

        <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow ref={ cube } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh 
            position-y={ - 1 } 
            rotation-x={ - Math.PI * 0.5 } 
            scale={ 10 }
            // receiveShadow 
        >
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" side={THREE.DoubleSide} />
        </mesh>

    </>
}