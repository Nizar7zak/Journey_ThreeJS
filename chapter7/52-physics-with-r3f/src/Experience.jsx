import { OrbitControls, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { CuboidCollider, Debug, RigidBody, Physics, CylinderCollider, InstancedRigidBodies } from '@react-three/rapier'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Experience()
{   
    const cube = useRef()
    const twister = useRef()
    const [hitSound] = useState(() => new Audio('./hit.mp3'))
    const model = useGLTF('./hamburger.glb')

    const cubesCount = 100
    const cubes = useRef()

    const cubesTransforms = useMemo(() => {
        const positions = []
        const rotations = []
        const scales = []

        for (let i = 0; i < cubesCount; i++) {
            positions.push([ 
                (Math.random() - 0.5) * 8,
                6 + i * 0.2,
                (Math.random() - 0.5) * 8,
            ])
            rotations.push([ 
                Math.random(),
                Math.random(),
                Math.random() 
            ])

            const scale = 0.2 + Math.random() * 0.8
            scales.push([ 
                scale,
                scale,
                scale 
            ])
        }

        return { positions, rotations, scales }

    }, [])
    // THis use effect if you want to handle initial position of Matrix.
    // useEffect(() => {
    //     const matrix = new THREE.Matrix4()
    //     for(let i = 0; i < cubesCount; i++) {
    //         matrix.compose(
    //             new THREE.Vector3( i * 2, 0, 0),
    //             new THREE.Quaternion(),
    //             new THREE.Vector3(1, 1, 1)
    //         )
    //         cubes.current.setMatrixAt(i, matrix)
    //     }
    // }, [])

    const handleJump = () => {
        const mass = cube.current.mass()
        cube.current.applyImpulse({ x: 0, y: 5 * mass, z: 0})
        cube.current.applyTorqueImpulse({ 
            x: Math.random() - 0.5,
            y: Math.random() - 0.5,
            z: Math.random() - 0.5
        })
    }

    const handleCollision = () => {
        // hitSound.currentTime = 0
        // hitSound.volume = Math.random()
        // hitSound.play()
    }

    useFrame((state) => {
        const time = state.clock.elapsedTime
        const eulerRotation = new THREE.Euler(0, time * 3, 0)
        const quaternionRotation = new THREE.Quaternion()
        quaternionRotation.setFromEuler(eulerRotation)
        twister.current.setNextKinematicRotation(quaternionRotation)

        const angle = time * 0.5
        const x = Math.cos(angle) * 2
        const z = Math.sin(angle) * 2
        twister.current.setNextKinematicTranslation({ x: x , y: 0, z: z })

    })
    return <>
        
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <Physics gravity={[ 0, -9.81, 0 ]}>
            <Debug />
            <RigidBody colliders='ball'>
                <mesh castShadow position={ [ -1.5, 2, 0 ] }>
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </RigidBody>

            <RigidBody 
                ref={cube} 
                gravityScale={1}
                restitution={0}
                friction={0.7}
                colliders={false}
                onCollisionEnter={handleCollision}
                // onCollisionExit={}
                // onSleep={}
                // onWake={}
            >
                <mesh 
                    castShadow 
                    position={ [ 1.5, 2, 0 ] } 
                    onClick={handleJump} 
                >
                    <CuboidCollider mass={2} args={[ 0.5, 0.5, 0.5 ]} />
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </RigidBody>


            {/* <RigidBody colliders={false} rotation-x={Math.PI * 0.5} position={ [ 0, 1, 0 ] }>
                <CuboidCollider args={[1.5, 1.5, 0.5]} />
                <CuboidCollider args={[1, 1, 1]} position={[ 0, 0, 1]} rotation={[ -Math.PI *0.35, 0, 0 ]} />
                <mesh 
                    castShadow
                >
                    <torusGeometry
                        args={[ 1, 0.5, 16, 32 ]}
                    />
                    <meshStandardMaterial color={'mediumpurple'} /> 
                </mesh>
            </RigidBody> */}

            <RigidBody 
                type='fixed'
                // restitution={1}
                friction={0.7}
            >
                <mesh
                     
                    receiveShadow 
                    position-y={ - 1.25 }
                >
                    <boxGeometry args={ [ 10, 0.5, 10 ] } />
                    <meshStandardMaterial color="greenyellow" />
                </mesh>
            </RigidBody>

            <RigidBody 
                ref={twister} 
                type='kinematicPosition' 
                friction={0}
            > 
                <mesh position-y={-0.8}>
                    <boxGeometry args={[ 0.4, 0.4, 3 ]}  />
                    <meshStandardMaterial color={'red'} />
                </mesh>
            </RigidBody>

            <RigidBody position={[ 0, 4, 0]} colliders={false}>
                <CylinderCollider args={[ 0.5, 1.25 ]} />
                <primitive object={model.scene} scale={0.25} />
            </RigidBody>

            <RigidBody type='fixed'>
                <CuboidCollider args={[ 5, 2, 0.5 ]} position={[ 0, 1, 5.25 ]} />
                <CuboidCollider args={[ 5, 2, 0.5 ]} position={[ 0, 1, - 5.25 ]} />
                <CuboidCollider args={[ 0.5, 2, 5 ]} position={[ 5.5, 1, 0 ]} />
                <CuboidCollider args={[ 0.5, 2, 5 ]} position={[ - 5.5, 1, 0 ]} />
            </RigidBody>

            <InstancedRigidBodies
                positions={ cubesTransforms.positions}
                rotations={ cubesTransforms.rotations}
                scales={ cubesTransforms.scales}
            >

                <instancedMesh castShadow args={[ null, null, cubesCount]} ref={cubes} >
                    <boxGeometry />
                    <meshStandardMaterial color='tomato' />
                </instancedMesh>

            </InstancedRigidBodies>
        </Physics>



    </>
}

//  value of colliders cuboid ball hull trimesh

// onCollisionEnter: when the RigidBody hit something.
// onCollisionExit: when the RigidBody separates from the object it just hit.
// onSleep: when the RigidBody starts sleeping.
// onWake: when the RigidBody stops sleeping.
