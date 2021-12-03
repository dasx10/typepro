Array.prototype.someRight = function (callback) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (callback(this[i], i, this)) return true;
    }
    return false;
}