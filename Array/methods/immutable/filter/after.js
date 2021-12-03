Array.prototype.after = function (after) {
    const filtered = [];
    if (after > 0) {
        for (let i = after; i < this.length; i++) {
            filtered.push(this[i]);
        }
    } else {
        for (let i = 0; i < this.length + after; i++) {
            filtered.push(this[i]);
        }
    }


    return filtered;
}