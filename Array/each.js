Array.prototype.forEachRight = function (callback) {
    for (let i = this.length - 1; i >= 0; i--) {
        callback(this[i], i, this);
    }
}

Array.prototype.mapRight = function (callback) {
    const mapped = [];
    for (let i = this.length - 1; i >= 0; i--) {
        mapped.push(callback(this[i], i, this));
    }
    return mapped;
}

Array.prototype.someRight = function (callback) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (callback(this[i], i, this)) return true;
    }
    return false;
}

Array.prototype.everyRight = function (callback) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (!callback(this[i], i, this)) return false;
    }
    return true;
}

Array.prototype.count = function (callback) {
    let count = 0;
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) count++;
    }
    return count;
}

Array.prototype.countRight = function (callback) {
    let count = 0;
    for (let i = this.length - 1; i >= 0; i--) {
        if (callback(this[i], i, this)) count++;
    }
    return count;
}