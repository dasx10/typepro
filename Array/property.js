Object.defineProperty(Array.prototype, "tail", {
    get: function() {
        return this[this.length - 1];
    }
});

Object.defineProperty(Array.prototype, "head", {
    get: function() {
        return this[0];
    }
});


Object.defineProperty(Array.prototype, "even", {
    get: function() {
        return this.filter((e, i) => i % 2 === 0);
    }
});

Object.defineProperty(Array.prototype, "uneven", {
    get: function() {
        return this.filter((e, i) => i % 2 !== 0);
    }
});

Object.defineProperty(Array.prototype, "random", {
    get: function() {
        return this[~~(Math.random() * this.length)];
    }
});

// index

Object.defineProperty(Array.prototype, "lastIndex", {
    get: function() {
        return this.length - 1;
    }
});

Object.defineProperty(Array.prototype, "averageIndex", {
    get: function() {
        return Math.round(this.length / 2);
    }
});