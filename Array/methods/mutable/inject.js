Array.prototype.inject = function () {
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            this.push(arguments[i][j]);
        }
    }
}