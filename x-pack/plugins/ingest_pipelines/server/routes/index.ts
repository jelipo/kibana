/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { RouteDependencies } from '../types';

import { registerGetRoutes } from './api';

export class ApiRoutes {
  setup(dependencies: RouteDependencies) {
    registerGetRoutes(dependencies);
  }
}
