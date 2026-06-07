/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { getFilterValueForDisplay } from './utils';

test('getFilterValueForDisplay returns "0" for numeric zero', () => {
  expect(getFilterValueForDisplay(0)).toBe('0');
});

test('getFilterValueForDisplay returns stringified number for non-zero numbers', () => {
  expect(getFilterValueForDisplay(1)).toBe('1');
  expect(getFilterValueForDisplay(-1)).toBe('-1');
  expect(getFilterValueForDisplay(3.14)).toBe('3.14');
});

test('getFilterValueForDisplay returns empty string for null', () => {
  expect(getFilterValueForDisplay(null)).toBe('');
});

test('getFilterValueForDisplay returns empty string for undefined', () => {
  expect(getFilterValueForDisplay(undefined)).toBe('');
});

test('getFilterValueForDisplay returns empty string for empty string', () => {
  expect(getFilterValueForDisplay('')).toBe('');
});

test('getFilterValueForDisplay returns the string for non-empty strings', () => {
  expect(getFilterValueForDisplay('hello')).toBe('hello');
});

test('getFilterValueForDisplay joins array values with comma', () => {
  expect(getFilterValueForDisplay(['a', 'b', 'c'])).toBe('a, b, c');
});

test('getFilterValueForDisplay returns JSON for objects', () => {
  expect(getFilterValueForDisplay({ key: 'val' })).toBe('{"key":"val"}');
});
