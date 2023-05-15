import * as THREE from 'three'
import {  MeshReflectorMaterial, Float, Text, Html, PivotControls ,TransformControls, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

export default function Experience()
{
    const cube = useRef()
    const sphere = useRef()
    return <>
        <OrbitControls makeDefault />
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        <Float
            speed={5}
            floatIntensity={10}
        >
            <Text 
                fontSize={1.5}
                color='#ff54ff'
                position-y = {3.5}
                maxWidth={10}
                textAlign='center'
                >
                I love Three js
            </Text>
        </Float>
        <PivotControls 
            anchor={ [ 0, 0, 0] }
            depthTest={ false }
            lineWidth={2.5}
            // axisColors={ [ '#f00', '#fff', '#000' ] }
            fixed={true}
            scale={100}
            
        >
            <mesh position-x={ - 2 } ref={sphere} >
                <Html 
                    wrapperClass='label'
                    position={[ 1, 1, 0]}
                    center
                    occlude={[ sphere, cube ]}
                    distanceFactor={7}
                >
                    Hello World!
                </Html>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
        </PivotControls>

        <mesh ref={cube} position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={cube} mode="translate" />

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <MeshReflectorMaterial
                resolution={1024}
                blur={ [1000, 1000 ] }
                mixBlur={1}
                mirror={0.7}
                color="greenyellow"
            />
        </mesh>

    </>
}