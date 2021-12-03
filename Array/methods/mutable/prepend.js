Array.prototype.prepend = function (...args) {
    this.shift(...args);
    return this;
}