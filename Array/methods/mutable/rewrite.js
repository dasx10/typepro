Array.prototype.rewrite = function (newArray) {
    while (this.length) this.pop();
    if (newArray && newArray.length) for (let i = 0; i < newArray.length; i++) this.push(newArray[i]);
    return this;
}