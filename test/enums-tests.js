/* global test */
/* global suite */

import * as assert from 'assert';
import enums from '../src/index';
import tests from './spec';

//-------------------------------------------------
suite('Enums: spread arguments', () => {

    test('basic', () => {
        const { input, expectation } = tests.BASIC;
        assert.ok(compareObjects(enums(...input), expectation));
    });

    test('handles objects', () => {
        const { input, expectation } = tests.OBJECTS;
        assert.ok(compareObjects(enums(...input), expectation));
    });

    test('handles overrides', () => {
        const { input, expectation } = tests.OVERRIDES;
        assert.ok(compareObjects(enums(...input), expectation));
    });

    test('considers only first argument if array', () => {
        const input = [tests.BASIC.input, tests.OBJECTS.input];
        const expectation = tests.BASIC.expectation;
        assert.ok(compareObjects(enums(...input), expectation));
    });
});

//-------------------------------------------------
suite('Enums: array argument', () => {

    test('basic', () => {
        const { input, expectation } = tests.BASIC;
        assert.ok(compareObjects(enums(input), expectation));
    });

    test('handles objects', () => {
        const { input, expectation } = tests.OBJECTS;
        assert.ok(compareObjects(enums(input), expectation));
    });

    test('handles overrides', () => {
        const { input, expectation } = tests.OVERRIDES;
        assert.ok(compareObjects(enums(input), expectation));
    });

    test('respects converter function', () => {
        const { input, expectation } = tests.CONVERTER;
        assert.ok(compareObjects(enums(input, val => val.toLowerCase()), expectation));
    });

});

//-------------------------------------------------
suite('Enums: result object', () => {

    test('is frozen', () => {
        const CONSTANTS = enums(tests.BASIC.input);
        let throws = false;
        try {
            CONSTANTS['A'] = 'C';
        } catch (e) {
            throws = true;
        }
        assert.ok(throws);
    });
});

//-------------------------------------------------
// Helpers
//-------------------------------------------------
function compareObjects(a, b) {
    return Object.keys(a).length === Object.keys(b).length &&
            Object.keys(a).every(val => a[val] === b[val]);
}