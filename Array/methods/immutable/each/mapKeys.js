Array.prototype.mapKeys = function (callback) {
    const mapped = {};
    for (let i = 0; i < this.length; i++) mapped[callback(this[i], i, this)] = this[i];
    return mapped;
}