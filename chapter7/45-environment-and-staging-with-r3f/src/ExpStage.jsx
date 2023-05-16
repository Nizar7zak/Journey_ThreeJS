import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

import { 
    OrbitControls, Stage, 
} from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'



export default function ExpStage()
{
    const cube = useRef() 
    const { envMapIntensity } = useControls('EnvMapIntensity', {
        envMapIntensity: { value: 3.5, min: 0, max: 12},

    })
    useFrame((state, delta) =>
    {
        cube.current.rotation.y += delta * 0.2
    })

    return <>
    <Stage
        shadows={
            {type: 'contact', opacity: 0.2, blur: 3}
        }
        preset='portrait'
        environment='sunset'
        intensity={0.3}
        
    >

        <Perf position="top-left" />
        <OrbitControls makeDefault />

        <mesh castShadow position-x={ - 2 } position-y={ 1 } >
            <sphereGeometry />
            <meshStandardMaterial color="orange" envMapIntensity={envMapIntensity} />
        </mesh>

        <mesh castShadow ref={ cube } position-x={ 2 } position-y={ 1 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" envMapIntensity={envMapIntensity} />
        </mesh>

    </Stage>
    </>
}