function isMonotonic(array) {
    let previousElement = array[0];
    let previousTrend;

    for (let i = 1; i < array.length; i++) {
        let newTrend;
        if (array[i] - previousElement > 0) {
            newTrend = 1;
        } else if (array[i] < previousElement) {
            newTrend = -1;
        }

        if (previousTrend && newTrend && previousTrend !== newTrend) return false;

        previousElement = array[i];
        previousTrend = newTrend ? newTrend : previousTrend;
    }
}