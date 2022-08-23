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

function bubble_sort2(array) {
    let swipe_occured;
    do {
        swipe_occured = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array);
                swipe_occured = true;
            }
        }
    } while (swipe_occured)

    return array;
}

function bubble_sort_desc(array) {
    let swipe_occured;
    do {
        swipe_occured = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] < array[i + 1]) {
                swap(i, i + 1, array);
                swipe_occured = true;
            }

        }
    } while (swipe_occured);

    return array;
}

console.log(bubble_sort([3, 2, 0, 4, 6, 3]));
console.log(bubble_sort2([3, 2, 0, 4, 6, 3]));
console.log(bubble_sort_desc([3, 2, 0, 4, 6, 3]));