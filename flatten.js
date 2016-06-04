function flatten(arr) {
  return arr.reduce(function(curr, next){
    return curr.concat(Array.isArray(next) ? flatten(next) : next);
  },[])
}
