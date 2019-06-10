/**
 * Copyright 2019 F5 Networks, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './do.datasource.json';

export class DoDataSource extends juggler.DataSource {
  static dataSourceName = 'do';

  constructor(
    @inject('datasources.config.do', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
