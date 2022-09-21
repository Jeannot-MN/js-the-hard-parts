var reverse = function(x) {
    const INTEGER32_MAX_VALUE = (2 ** 32) / 2 - 1;
    const INTEGER32_MIN_VALUE = -(INTEGER32_MAX_VALUE + 1);
    let num = Math.abs(x);
    let res = 0;
    while (num != 0) {
        res = (res * 10) + (num % 10);
        if (res > INTEGER32_MAX_VALUE || res < INTEGER32_MIN_VALUE) return 0;
        num = Math.floor(num / 10);
    }

    return res * (x < 0 ? -1 : 1);
};