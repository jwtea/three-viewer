/* eslint-disable import/prefer-default-export */
import { RepeatWrapping } from 'three';

/**
 * Helper to map HDR Texture to materials
 * @param {*} gltf
 */
export const mapEnv = (gltf, HDRTexture) => {
  /* eslint no-underscore-dangle: ["error", { "allow": ["__$"] }] */
  gltf.__$.map(obj => {
    if (obj.material) {
      /* eslint no-param-reassign: "error" */
      obj.material.envMap = HDRTexture;
      obj.material.needsUpdate = true;
      if (obj.material.aoMap) {
        obj.material.aoMap.flipY = true;
        obj.material.aoMap.wrapS = RepeatWrapping;
        obj.material.aoMap.wrapT = RepeatWrapping;
      }
    }
    return obj;
  });
};
