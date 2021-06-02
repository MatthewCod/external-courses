let calculator = {
    result: 0,
    setState: function (number) {
        if (number !== undefined) {
            calculator.result = +number;
        }
        return this;
    },

    add: function (number) {
        if (number !== undefined) {
            calculator.result = +calculator.result + +number;
        }
        return this;
    },

    subtract: function (number) {
        if (number !== undefined) {
            calculator.result = +calculator.result - +number;
        }
        return this;
    },

    divide: function (number) {
        if (number !== undefined) {
            calculator.result = +calculator.result / +number;
        }
        return this;
    },

    multiply: function (number) {
        if (number !== undefined) {
            calculator.result = +calculator.result * +number;
        }
        return this;
    },

    getResult: function () {
        return this.result;
    },

    reset: function () {
        this.result = 0;
        return this;
    },

    fetchData: function (callback) {
        setTimeout(callback, 5000, state = 500);
        this.result = state;
        return this;
    }
};

module.exports = calculator;