const brain = require('brain.js'),
    mnist = require('mnist');
var net = new brain.NeuralNetwork();
const set = mnist.set(0, 1);
const testSet = set.test;
net.fromJSON(require('./mnistTrain'));
var output = net.run(testSet[0].input);
console.log(testSet[0].output);
console.log(output);