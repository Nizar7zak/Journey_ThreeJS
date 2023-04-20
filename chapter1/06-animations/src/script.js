import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)




// Finally use Library called GSAP to  handle time  @3.5.1
gsap.to(mesh.position, {duration: 2, delay: 5, x: 1.5})
gsap.to(mesh.position, {duration: 2, delay: 9, x: 0})


// let time = Date.now()
// const clock = new THREE.Clock()

// Tick with requestAnimationFrame
const tick = () => {
    // // console.log('tick')
    // mesh.position.x += 0.01
    // mesh.rotation.y += 0.01
    // mesh.scale.z += 0.001


    // Rotate based on Date.now timeStamp
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime
    // mesh.rotation.x += 0.001 * deltaTime
    // mesh.position.x += 0.001 * deltaTime
    // mesh.position.y += 0.001 * deltaTime

    // Rotate based on Clock (THREE JS)
    // const elapsedTime = clock.getElapsedTime()
    // // console.log(elapsedTime)
    // mesh.position.x = Math.tan(elapsedTime)
    // mesh.position.y = Math.sin(elapsedTime)



    


    window.requestAnimationFrame(tick)
    renderer.render(scene, camera)
}

tick()