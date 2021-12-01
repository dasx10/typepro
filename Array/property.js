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

Object.defineProperty(Array.prototype, "lastIndex", {
    get: function() {
        return this.length - 1;
    }
});
