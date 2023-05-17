import { useEffect } from "react"
import { useAnimations, useGLTF } from "@react-three/drei"
import { useControls } from "leva"

const Fox = () => {
    const fox = useGLTF('./Fox/glTF/Fox.gltf')
    const animations = useAnimations(fox.animations, fox.scene)

    const { animationSelected } = useControls('Animations Control', {
      animationSelected: { options: animations.names }
    })

    useEffect(() => {
      const action = animations.actions[animationSelected]
      action.reset().fadeIn(0.5).play()
      
      return (() => {
        action.fadeOut(0.5)
      })




      // window.setTimeout(() => {
      //   animations.actions.Walk.play()
      //   animations.actions.Walk.crossFadeFrom(animations.actions.Run, 1)
      // }, 3000)


    }, [animationSelected])
  return (
    <primitive 
        object={fox.scene} 
        scale={0.02}
        position={[ 0, -1, 0]}

    />
  )
}

export default Fox