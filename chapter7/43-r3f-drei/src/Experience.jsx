import * as THREE from 'three'
import { Html, PivotControls ,TransformControls, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

export default function Experience()
{
    const cube = useRef()
    const sphere = useRef()
    return <>
        <OrbitControls makeDefault />
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

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
                    distanceFactor={10}


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
            <meshStandardMaterial color="greenyellow" side={THREE.DoubleSide} />
        </mesh>

    </>
}