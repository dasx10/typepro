Object.defineProperty(Array.prototype, "uneven", {
    get: function() {
        return this.filter((e, i) => i % 2 !== 0);
    }
});