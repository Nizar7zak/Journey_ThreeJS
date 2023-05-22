import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Vignette, EffectComposer } from '@react-three/postprocessing'


// npm i @react-three/postprocessing@2.6
export default function Experience()
{
    return <>
        <EffectComposer >
            <Vignette 
                offset={0.3}
                darkness={0.9}
            />
        </EffectComposer>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}