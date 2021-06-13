import React from 'react';
import ReactDOM from 'react-dom';
import {THREE} from 'three.js';

ReactDOM.render(
  <React>
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
  </React>,
  document.getElementById('root')
);



