/**
 * Using the new arrow functions syntax
 * understanding the following methods:
 * FroEach
 * map
 * filter
 * find
 * reduce
 * some 
 * every
 */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
 // expected output: Array ["exuberant", "destruction", "present"]