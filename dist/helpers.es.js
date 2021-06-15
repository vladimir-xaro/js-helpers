function isObject(item) {
    return item && "object" == typeof item && null !== item && !Array.isArray(item);
}

function merge(target, source, options = {}) {
    const mergeObject = void 0 === options.mergeObjects || !!options.mergeObjects;
    if (isObject(target) && isObject(source)) for (const key of Object.keys(source)) mergeObject && isObject(source[key]) ? (target[key] && isObject(target[key]) || (target[key] = source[key]), 
    merge(target[key], source[key])) : options.mergeArrays && Array.isArray(source[key]) ? (console.log(key), 
    Array.isArray(target[key]) ? target[key].push(...source[key]) : Object.assign(target, {
        [key]: source[key]
    })) : Object.assign(target, {
        [key]: source[key]
    });
    return target;
}

export { isObject, merge };
//# sourceMappingURL=helpers.es.js.map
