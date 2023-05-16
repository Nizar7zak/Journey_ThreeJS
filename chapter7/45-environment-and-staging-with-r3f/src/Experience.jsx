import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { 
    SoftShadows, 
    BakeShadows, 
    useHelper, 
    OrbitControls, 
    AccumulativeShadows, 
    RandomizedLight, 
    ContactShadows,
    Sky,
    Environment,
    Lightformer
} from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'



export default function Experience()
{
    const cube = useRef()
    const directionalLight = useRef()

    const { color, opacity, blur } = useControls('Contact Shadows', {
        color: "#50ff00",
        opacity: { value: 0.40, min: 0, max: 1 },
        blur: { value: 2.2, min: 0, max: 20 }    
    })

    const { sunPosition } = useControls('SunPosition', {
        sunPosition: [1, 2, 3]
    })

    const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } = useControls('EnvMapIntensity', {
        envMapIntensity: { value: 3.5, min: 0, max: 12},
        envMapHeight: { value: 7, min: 0, max: 20},
        envMapRadius: { value: 28, min: 0, max: 50},
        envMapScale: { value: 100, min: 0, max: 500},
    })

    useHelper(directionalLight, THREE.DirectionalLightHelper, 1, 'red')

    
    useFrame((state, delta) =>
    {
        // cube.current.position.x = 2 + Math.sin(state.clock.elapsedTime)
        cube.current.rotation.y += delta * 0.2
    })

    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />

        <Environment 
            background
            ground={{
                height: envMapHeight,
                radius: envMapRadius,
                scale: envMapScale,
            }}
            // files={[
            //     './environmentMaps/2/px.jpg',
            //     './environmentMaps/2/nx.jpg',
            //     './environmentMaps/2/py.jpg',
            //     './environmentMaps/2/nx.jpg',
            //     './environmentMaps/2/pz.jpg',
            //     './environmentMaps/2/nx.jpg',
            // ]}
            // files={'./environmentMaps/the_sky_is_on_fire_2k.hdr'}
            preset='sunset'
        >
            {/* <color attach='background' args={['#000000']} />
            <Lightformer   
                color='red'
                intensity={50}
                scale={10} 
                position={[0, 2.5, -5]}
            />
            <mesh scale={10} position={[0, 2.5, -5]}>
                <planeGeometry />
                <meshBasicMaterial color={[15, 0, 0]} />
            </mesh> */}
        </Environment>

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

        {/* <Sky sunPosition={sunPosition} /> */}

        {/* <ContactShadows
            position={[0, -0.999, 0]}
            scale={10}
            resolution={1024}
            far={4}
            color={color}
            opacity={opacity}
            blur={blur}
        /> */}

{/* 
        <directionalLight 
            ref={directionalLight}
            position={ sunPosition } 
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
        <ambientLight intensity={ 0.5 } /> */}

        <mesh castShadow position-x={ - 2 } position-y={ 1 } >
            <sphereGeometry />
            <meshStandardMaterial color="orange" envMapIntensity={envMapIntensity} />
        </mesh>

        <mesh castShadow ref={ cube } position-x={ 2 } position-y={ 1 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" envMapIntensity={envMapIntensity} />
        </mesh>

        {/* <mesh 
            position-y={ 0 } 
            rotation-x={ - Math.PI * 0.5 } 
            scale={ 10 }
            // receiveShadow 
        >
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" envMapIntensity={envMapIntensity} />
        </mesh> */}

    </>
}