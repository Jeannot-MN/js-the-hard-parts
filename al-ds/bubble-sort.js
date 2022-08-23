import { swap } from "./utils.js";

function bubble_sort(array) {
    for (let sorted_index = array.length - 1; sorted_index > 0; sorted_index--) {
        let swipe_occured = false;
        for (let i = 0; i < sorted_index; i++) {
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array);
                swipe_occured = true;
            }
        }
        if (!swipe_occured) break;
    }

    return array;
}

console.log(bubble_sort([3, 2, 0, 4, 6, 3]));