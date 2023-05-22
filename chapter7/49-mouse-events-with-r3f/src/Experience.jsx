import { useFrame } from '@react-three/fiber'
import { useBVH, meshBounds, OrbitControls, useGLTF } from '@react-three/drei'
import { useRef } from 'react'

export default function Experience()
{
    const cube = useRef()
    
    useFrame((state, delta) =>
    {
        cube.current.rotation.y += delta * 0.2
    })

    const model = useGLTF('./hamburger.glb')


    const eventHandler = (event) => {
        cube.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`)
    }

    const stopPropagation = (event) => {
        event.stopPropagation()
    }

    const handlePointerEnter = () => {
        document.body.style.cursor = 'pointer'
    }
    const handlePointerLeave = () => {
        document.body.style.cursor = 'default'
    }

    return <>

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh 
            position-x={ - 2 }
            onClick={stopPropagation}    
        >
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh 
            raycast={meshBounds}
            ref={ cube } 
            position-x={ 2 } 
            scale={ 1.5 }
            onClick={eventHandler}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            // onClick left
            // onContextMenu right
            // onDoubleClick
            // onPointerUp
            // onPointerDown
            // onPointerOver & onPointerEnter -> when you enter
            //  onPointerOut & onPointerLeave -> when you leave
            // onPointerMove
            // onPointerMissed => when the user click outside of the object


        >
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <primitive 
            object={model.scene}
            scale={0.25}
            position-y={0.5}
            onClick={(event) => {
                event.stopPropagation()
            }}
        />

    </>
}