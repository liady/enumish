/**
 * Create constants object from descriptor
 */
export default function createConstants(...args) {
    const descriptor = args.length && Array.isArray(args[0]) ? args[0] : args;
    const converter = args.length && (typeof args[1] === 'function') ? args[1] : (val => val);
    return mergeArrayToObject(descriptor, converter);
}

/**
 * Create constants object from an array
 */
function mergeArrayToObject(origArr = [], converter) {
    const arr = [].concat(origArr || []);
    return Object.freeze(arr.reduce((obj, val) => Object.assign(obj, mirrorValue(val, converter)), {}));
}

/**
 * Create an object from a value
 */
function mirrorValue(val = {}, converter) {
    return typeof val === 'object' ? val : { [val]: converter(val) };
}
