Array.prototype.between = function (start, end) {
    const filtered = [];
    for (let i = start; i <= end; i++) {
        filtered.push(this[i]);
    }
    return filtered;
}