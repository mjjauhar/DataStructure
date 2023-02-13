class Graph {
  constructor() {
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }
  addEdge(v, x) {
    this.AdjList.get(v).push(x);
    this.AdjList.get(x).push(v);
  }

  printGraph() {
    var keys = this.AdjList.keys();
    for (var key of keys) {
      var values = this.AdjList.get(key);
      var conc = "";

      for (var value of values) {
        conc += value + " ";
      }
      console.log(key + " -> " + conc);
    }
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "A");

g.printGraph()
