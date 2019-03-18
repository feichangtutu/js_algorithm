/**
 * 题目来源NO.1 leetcode
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * @Author: Yanni Jia
 * @Email: jiayanni2008#gmail.com
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function testSum(pre,next, sum){
    if(sum === pre+next){
        return true
    }
}
var twoSum = function(nums, target) {
    let pre = null
    let next = null
    let newArr = []
    for(let i=0;i<nums.length; i++) {
        pre = nums[i]
        for(let j=i+1; j<nums.length;j++) {
            next = nums[j]
            if(testSum(pre,next,target)) {
            // when find the value, locate the index of the right value
                for(let key in nums){
                    if(nums[key] === pre||nums[key] === next) {
                    // key should be number
                        newArr.push(+key)
                    }
                }
            }
        }
    }
    return newArr
};
