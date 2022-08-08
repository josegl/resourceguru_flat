const flat = item => {
  if(item != null && Array.isArray(item)){
    return item.reduce((res, x) => [...res, ...(x === null ? [x] : flat(x))], []); //Here we handle the null values nested in arrays
  }
  return item != null ? [item] : item; //Here we handle the null and undefined input
};

module.exports = flat;
