Object.defineProperty(Array.prototype, "lastIndex", {
    get: function() {
        return this.length - 1;
    }
});