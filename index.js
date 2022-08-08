const flat = item => Array.isArray(item) ? item.reduce((res, x) => [...res, ...flat(x)], []) : [item];

module.exports = flat;
