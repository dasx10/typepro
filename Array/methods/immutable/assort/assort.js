Array.prototype.assort = function (callback) {
    const sorted = [];
    for (let i = 0; i < this.length; i++) sorted.push(this[i]);
    return sorted.sort(callback);
}