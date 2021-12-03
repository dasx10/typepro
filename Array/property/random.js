Object.defineProperty(Array.prototype, "random", {
    get: function() {
        return this[~~(Math.random() * this.length)];
    }
});