Object.defineProperty(Array.prototype, "even", {
    get: function() {
        return this.filter((e, i) => i % 2 === 0);
    }
});