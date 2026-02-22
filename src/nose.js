import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function addNose(faceFollower, scene) {

  const loader = new GLTFLoader();

  loader.load(
    '/assets/clownNose.glb',

    (gltf) => {

      const nose = gltf.scene;

      nose.scale.set(0.12, 0.12, 0.12);
      nose.position.set(0, -0.05, 0.55);

      nose.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = false;
          child.receiveShadow = false;
          child.frustumCulled = false;
        }
      });

      faceFollower.add(nose);
    },

    undefined,

    (error) => {
      console.error('GLTF load error:', error);
    }
  );
}