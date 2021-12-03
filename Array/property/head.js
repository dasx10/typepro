Object.defineProperty(Array.prototype, "head", {
    get: function() {
        return this[0];
    }
});