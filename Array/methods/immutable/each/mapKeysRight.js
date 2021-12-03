Array.prototype.mapKeysRight = function (callback) {
    const mapped = {};
    for (let i = this.length - 1; i >= 0; i--) mapped[callback(this[i], i, this)] = this[i];
    return mapped;
}