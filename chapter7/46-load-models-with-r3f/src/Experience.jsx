import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
import Hamburger from './Hamburger'
import Model from './Model'
import PlaceHolder from './PlaceHolder'
import { ToR3F } from './ToR3f'

export default function Experience()
{
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={ 0.04 } />
        <ambientLight intensity={ 0.5 } />
        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
        <Suspense fallback={ <PlaceHolder position-y={0.5} scale={[2,3,2]} />}>
            {/* <Model /> */}
            {/* <Hamburger /> */}
            <ToR3F scale={0.35} />
        </Suspense>

    </>
}