import * as THREE from 'three'

const canvas = document.querySelector('.webgl')
const sizes = {
    width: 800,
    height: 600,
    
}
const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry( 1 ,1 ,1 )
const materials = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

const mesh = new THREE.Mesh(geometry, materials)
scene.add(mesh)

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100 )
camera.position.set(1, 1, 3)

scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)