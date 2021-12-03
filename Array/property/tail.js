Object.defineProperty(Array.prototype, "tail", {
    get: function() {
        return this[this.length - 1];
    }
});