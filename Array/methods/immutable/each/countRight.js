Array.prototype.countRight = function (callback) {
    let count = 0;
    for (let i = this.length - 1; i >= 0; i--) {
        if (callback(this[i], i, this)) count++;
    }
    return count;
}