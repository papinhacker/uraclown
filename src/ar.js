import * as THREE from 'three';
import { addNose } from './nose.js';

let threeHelper = null;

export async function initAR() {

  return new Promise((resolve, reject) => {

    WebARRocksFaceThreeHelper.init({

      NNCPath: 'https://cdn.webar.rocks/face/dist/',

      callbackReady: (err, spec) => {

        if (err) {
          reject(err);
          return;
        }

        threeHelper = spec;

        setupLighting(spec.scene);
        addNose(spec.threeFaceFollowers[0], spec.scene);

        window.addEventListener('resize', () => {
          WebARRocksFaceThreeHelper.resize();
        });

        resolve();
      },

      callbackTrack: (detectState) => {
        // можно использовать detectState.isDetected
      }
    });
  });
}

function setupLighting(scene) {

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(0, 1, 1);
  scene.add(dirLight);
}