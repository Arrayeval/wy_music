// 数组拆分 [1,2,3,4,5,6] ==> [[1,2,3],[4,5,6]]
export function splitArr (arr, n = 2) { //n: 每一个子arr的item数量
  if (!Array.isArray(arr) || arr.length <= 0 || n > arr.length) {
    return arr
  }
  let _arrLength = arr.length
  let _newArr = []
  let _initIndex = 0
  for (let i = 0; i < arr.length; i++) {
    _newArr.push(arr.slice(n*_initIndex, n*(_initIndex + 1)))
    _initIndex = _initIndex+1
    if ((_initIndex+1)*n >=_arrLength) {
      _newArr.push(arr.slice(_initIndex *n, n*(_initIndex + 1)))
      break
    }
  }
  return _newArr
}
