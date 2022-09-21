var findDuplicates = function(nums) {
    const result = []

    let index;
    for (let i = 0; i < nums.length; i++) {
        index = Math.abs(nums[i]) - 1;

        if (nums[index] < 0) {
            result.push(Math.abs(nums[i]));
        } else {
            nums[index] *= -1;
        }
    }

    return result;
};