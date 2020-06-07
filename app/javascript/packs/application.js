import "bootstrap";

import Vue from 'vue'
import App from '../app.vue'

// Load application

import Application from "../app.vue";
if (document.querySelector("application"))
  new Vue(Object.assign({}, Application, {}));
