import * as THREE from "three";

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvas: HTMLDivElement
) {
  const canvas3d = canvas.getBoundingClientRect();
  if (!canvas3d.width || !canvas3d.height) return;
  const width = canvas3d.width;
  const height = canvas3d.height;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

}
