
const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testCases = [
  {
    description: 'Empty adjacency matrix',
    adjacencyMatrix: [],
    startNode: 0,
    targetNode: 1,
    expectedPath: [],
  },

  {
    description: 'Single node graph (no path possible)',
    adjacencyMatrix: [[0]],
    startNode: 0,
    targetNode: 1,
    expectedPath: [],
  },

  {
    description: 'Disconnected graph (no path possible)',
    adjacencyMatrix: [[0, 0], [0, 0]],
    startNode: 0,
    targetNode: 1,
    expectedPath: [],
  },

  {
    description: 'Simple connected graph (path exists)',
    adjacencyMatrix: [[0, 1], [1, 0]],
    startNode: 0,
    targetNode: 1,
    expectedPath: [0, 1],
  },

  {
    description: 'Graph with multiple paths (should find one)',
    adjacencyMatrix: [[0, 1, 0], [1, 0, 1], [0, 1, 0]],
    startNode: 0,
    targetNode: 2,
    expectedPath: [0, 1, 2],
  },

  {
    description: 'Target Node is Starting Node',
    adjacencyMatrix: [[1, 0], [0, 1]],
    startNode: 0,
    targetNode: 0,
    expectedPath: [0],
  },

  {
    description: 'Target Node unreachable (no path possible)',
    adjacencyMatrix: [[0, 1, 0], [0, 0, 0], [0, 0, 1]],
    startNode: 0,
    targetNode: 2,
    expectedPath: [],
  },

  {
    description: 'Directed graph with a path',
    adjacencyMatrix: [[0, 1, 0], [0, 0, 1], [0, 0, 0]],
    startNode: 0,
    targetNode: 2,
    expectedPath: [0, 1, 2],
  },
];

function runTest(testCase) {
  const actualPath = depthFirstSearch(testCase.adjacencyMatrix, testCase.startNode, testCase.targetNode);
  const passed = JSON.stringify(actualPath) === JSON.stringify(testCase.expectedPath);
  console.log(`Test Case: ${testCase.description} - ${passed ? 'Passed' : 'Failed'}`);
  console.log(`  Adjacency Matrix: ${JSON.stringify(testCase.adjacencyMatrix)}`);
  console.log(`  Start Node: ${testCase.startNode}`);
  console.log(`  Target Node: ${testCase.targetNode}`);
  console.log(`  Expected Path: ${JSON.stringify(testCase.expectedPath)}`);
  console.log(`  Actual Path: ${JSON.stringify(actualPath)}`);
  console.log('------------------------------------');
  return passed;
}

for(let c = 0; c < testCases.length; c++){
	if(runTest(testCases[c]) == false) { throw "One or More Tests Failed"; }
}

