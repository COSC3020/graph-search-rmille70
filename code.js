// Referenced: 
// https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/
// https://en.wikipedia.org/wiki/Depth-first_search

function depthFirstSearch(adjMatrix, startNode, targetNode) {
    if (!adjMatrix || !adjMatrix.length) { return []; }
    let visited = []; 
    function dfsFinder(currentNode, path) {
        visited.push(currentNode);
        if (currentNode == targetNode) { return path.concat(currentNode); }
        for (let adj = 0; adj < adjMatrix[currentNode].length; adj++) {
            if (!visited.includes(adj) && adjMatrix[currentNode][adj] == 1) {
                const foundPath = dfsFinder(adj, path.concat(currentNode));
                if (foundPath) { return foundPath; }
            }
        }
        return [];
    }
    let sol = dfsFinder(startNode, []);
    return sol;
}

