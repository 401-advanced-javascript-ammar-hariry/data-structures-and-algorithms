'use stict';

let LinkedList = require('./linked-list');

class HashMap {
    constructor(size) {

        this.size = size;
        this.map = new Array(size);
    }
    hash(key) {

        return key.split('').reduce((p, n) => {
            return p + n.charCodeAt(0);
        }, 0) * 37 % this.size;
    }
    add(key, val) {

        let hash = this.hash(key);
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        let entery = {
            [key]: val
        }
        this.map[hash].addNode(entery);
    }
    get(key) {

        return this.map[this.hash(key)];
    }
    contains(key) {

        if (this.get(key)) {
            return true;
        } else {
            return false;

        }
    }
}

module.exports = HashMap;