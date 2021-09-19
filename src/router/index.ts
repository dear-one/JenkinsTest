import { Component } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import cvRouter from './cv';

export interface IRouteItem {
  path: string;
  name: string;
  component: Component;
}

const routes: Array<IRouteItem> = [
  ...cvRouter
];

export default createRouter({
  history: createWebHistory(),
  routes
});