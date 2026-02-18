// Soft background floating geometry
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({canvas:document.querySelector("#bg"),alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.z=60;

const geometry=new THREE.IcosahedronGeometry(30,1);
const material=new THREE.MeshBasicMaterial({
color:0x3e2c23,
wireframe:true,
opacity:0.02,
transparent:true
});

const shape=new THREE.Mesh(geometry,material);
scene.add(shape);

function animate(){
requestAnimationFrame(animate);
shape.rotation.y+=0.0005;
renderer.render(scene,camera);
}
animate();

gsap.from(".hero-overlay",{opacity:0,y:50,duration:1.5});
gsap.from(".section",{opacity:0,y:60,duration:1.2,stagger:0.2});
