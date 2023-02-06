class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.Adjlist = new Map();
  }

  addVertex(v) {
    this.Adjlist.set(v, []);
  }

  addEdge(v, m) {
    this.Adjlist.get(v).push(m);
    this.Adjlist.get(m).push(v);
  }

  printGraph() {
    var keys = this.Adjlist.keys();
    for (var i of keys) {
      var values = this.Adjlist.get(i);
      var conc = "";
      for (var j of values) {
        conc += j + " ";
      }
      console.log(i + " -> " + conc);
    }
  }
}

let g = new Graph(4);
g.addVertex("q");
g.addVertex("w");
g.addEdge("q", "w");
g.printGraph();
