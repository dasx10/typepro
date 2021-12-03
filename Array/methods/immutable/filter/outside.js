Array.prototype.outside = function (start, end) {
    const filtered = [];
    for (let i = 0; i < start; i++) {
        filtered.push(this[i]);
    }
    for (let i = end; i < this.length; i++) {
        filtered.push(this[i]);
    }

    return filtered;
}