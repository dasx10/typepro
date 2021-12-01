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

Array.prototype.between = function (start, end) {
    const filtered = [];
    for (let i = start; i < end; i++) {
        filtered.push(this[i]);
    }
    return filtered;
}