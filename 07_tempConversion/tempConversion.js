const convertToCelsius = function(f) {
    if (f == 32) {
        return 0
    } else {
        let x = (f - 32) * (5 / 9);
        x = (Math.round(x * 10) / 10)
        return x;
    }

};

const convertToFahrenheit = function(c) {
    if (c == 0) {
        return 32
    } else {
        let x = (c * (9 / 5) + 32);
        x = (Math.round(x * 10) / 10)
        return x;
    }
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};