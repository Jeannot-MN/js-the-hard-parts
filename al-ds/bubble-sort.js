import { Array } from "./utils.js";

function bubble_sort(array) {
    for (let sorted_index = array.size - 1; sorted_index > 0; sorted_index--) {
        let swipe_occured = false;
        for (let i = 0; i < sorted_index; i++) {
            if (array.at(i) > array.at(i + 1)) {
                array.swap(i, i + 1);
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
        for (let i = 0; i < array.size - 1; i++) {
            if (array.at(i) > array.at(i + 1)) {
                array.swap(i, i + 1);
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
        for (let i = 0; i < array.size - 1; i++) {
            if (array.at(i) < array.at(i + 1)) {
                array.swap(i, i + 1);
                swipe_occured = true;
            }

        }
    } while (swipe_occured);

    return array;
}

const array = new Array(10);
array.randomize();
console.log(array);
console.log(bubble_sort(array));
console.log(bubble_sort2(array));
console.log(bubble_sort_desc(array));