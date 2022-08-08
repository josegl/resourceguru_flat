const flat = item => {
  if(item != null && Array.isArray(item)){
    return item.reduce((res, x) => [...res, ...flat(x)], []);
  }
  return item != null ? [item] : item;
};

module.exports = flat;
