/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const nums = [2, 7, 11, 15]

// var twoSum = function (nums, target) {
//   const map = {}
//   console.log(map)

//   for (let i = 0; i < nums.length; i++) {
//     const another = target - nums[i]
//     console.log(another)
//     if (another in map) {
//       console.log(map)
//       return [map[another], i]
//     }

//     map[nums[i]] = i
//     console.log(map)
//   }

//   return null
// }

// console.log(twoSum(nums, 9))
const nums2 = [3, 2, 4]

var twoSum2 = function (nums, target) {
  const sums = []
  for (i = 0; i < nums.length; i++) {
    let numbers = target - nums[i]
    if (numbers in sums) {
      return [sums[numbers], i]
    }
    sums[nums[i]] = i
  }
  return null
}

console.log(twoSum2(nums2, 6))
