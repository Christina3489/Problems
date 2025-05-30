/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merge = nums1.concat(nums2).sort((a, b) => a - b);

    let len = merge.length;
    let median;
    if(len%2 == 0){
        median = (merge[len/2-1] + merge[len/2] )/2;
    }else{
        median = merge[Math.floor(len/2)];
    }


    console.log(`the median : ${median}`);
    return median;
};

const nums1 = [1,3], nums2 = [2];
const result = findMedianSortedArrays(nums1, nums2);
console.log(`the result is ${result}`);
