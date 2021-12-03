Array.prototype.filterRight = function (callback) {
    const filtered = [];
    for (let i = this.length - 1; i >= 0; i--) {
        if(callback(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
}