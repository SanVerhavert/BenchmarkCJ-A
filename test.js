/**
 * Created by SVerhavert on 24/03/2015.
 */

var CP = require('./NearestCuttingPoint');

var myBenchmarks = [ { _id:"AAAAAAAAA", ability:1.236}, { _id:"BBBBBBBBB", ability:-.65 } ];

console.log(CP(1,myBenchmarks));