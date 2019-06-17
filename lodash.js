'use strict';
var _ = require('lodash');
const assert = require('assert');

let a = [1,2,3,4,5,6,7];

console.log("Original Array: ");
console.log(a);

console.log("Chunk into 2: ");
let chunked = _.chunk(a, 2);
console.log(chunked);

console.log("Reverse: ");
let reversed = _.reverse(a);
console.log(reversed);

console.log("Without 1, 2, and 3: ");
let without = _.without(a, 1,2,3);
console.log(without);

console.log("Shuffled: ");
let shuffled = _.shuffle(a);
console.log(shuffled);

console.log("Index of 4: ");
let indexOf = _.indexOf(a, 4);
console.log(indexOf);

if (typeof describe === 'function') {
    describe('chunk test', () => {
        it('should chunk data into arrays with length 2', () => {
        assert.deepEqual(chunked, [[1,2],[3,4],[5,6],[7]]);
        });
    describe('reverse test', () => {
        it('should reverse the array', () => {
        assert.deepEqual(reversed, [ 7, 6, 5, 4, 3, 2, 1 ]);
        });
    });
    describe('without test', () => {
        it('should remove specified items from the array', () => {
        assert.deepEqual(without, [ 7, 6, 5, 4 ]);
        });
    });
    describe('shuffle test', () => {
        it('should shuffle the items in the array', () => {
        assert.deepEqual(!shuffled, !a);
        });
    });
    describe('indexOf test', () => {
        it('should find the index of a specfic value', () => {
        assert.deepEqual(indexOf, 3);
        });
    });
})};
