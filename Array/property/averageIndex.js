Object.defineProperty(Array.prototype, "averageIndex", {
    get: function() {
        return Math.round(this.length / 2);
    }
});