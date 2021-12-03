Array.prototype.forEachRight = function (callback) {
    for (let i = this.length - 1; i >= 0; i--) {
        callback(this[i], i, this);
    }
}