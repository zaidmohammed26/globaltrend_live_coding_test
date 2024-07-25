function shortestPath(graph, source) {
  (i = 0), (path = 0);
  result = {};
  while (i < Object.keys(graph).length) {
    if (graph[i] === source) {
      result[i] = 0;
    }
    path = Math.min(graph[source][i], path);
  }
}

shortestPath({ 0: { 1: 4, 2: 1 }, 1: { 3: 1 }, 2: { 1: 2, 3: 5 }, 3: {} }, 0);
