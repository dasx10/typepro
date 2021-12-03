Array.prototype.before = function (before) {
    const filtered = [];
    if (before > 0) {
        for (let i = 0; i < before; i++) {
            filtered.push(this[i]);
        } 
    } else {
        for (let i = this.length + before; i < this.length; i++) {
            filtered.push(this[i]);
        }
    }

    return filtered;
}