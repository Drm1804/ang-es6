import angular from 'angular';

import {some} from './some';

export const someModule = 'some';

angular
  .module(someModule, [])
  .component('some', some);
