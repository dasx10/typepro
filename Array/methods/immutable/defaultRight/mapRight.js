Array.prototype.mapRight = function (callback) {
    const mapped = [];
    for (let i = this.length - 1; i >= 0; i--) {
        mapped.push(callback(this[i], i, this));
    }
    return mapped;
}