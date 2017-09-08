var app = angular.module('cytoscapeDrawer', []);

var GlyElements = {
  nodes: [],
  edges: []
};

app.controller('MainCtrl', function($scope) {
  $scope.title = 'Simple Cytoscape Drawer';
    
  $scope.fileChanged = function() {

      // define reader
      var reader = new FileReader();

      // A handler for the load event (just defining it, not executing it right now)
      reader.onload = function(e) {
          $scope.$apply(function() {
              $scope.csvFile = reader.result;
              console.log($scope.csvFile);
              
              // Parse the result string
              var elements = $scope.csvFile;
              var result = elements.replace(/\r\n|\r|\n/, ',');
              while (elements !== result) {
                    elements = result;
                    result = elements.replace(/\r\n|\r|\n/, ',');
              }
              elements = elements.split(',');
              var filtered = elements.filter(function(element) {
                return element !== '';
              });
              console.log(filtered);
              
              // ADD nodes & edges
              var i = 0;
              var edgeIndex = 0
              while (i < filtered.length) {
                  console.log(filtered[i]);
                  if (filtered[i] == 'node') {
                    i = i + 1;
                    GlyElements.nodes.push({data: { id: filtered[i]}});
                    i = i + 1;
                    continue;
                  }
                  if (filtered[i] == 'edge') {
                    i = i + 1;
                    GlyElements.edges.push({data: { id: "Step" + edgeIndex.toString(), description: filtered[i], source: filtered[i+1], target: filtered[i+2]}});
                    edgeIndex = edgeIndex + 1;
                    i = i + 3;
                    continue;
                  }
                  i = i + 1;
              }
              
              console.log(GlyElements.nodes)
              
              var cy = cytoscape({
                container: document.getElementById('cy'),
                elements: GlyElements,
                style: [
                      {
                        selector: 'node',
                        style: {
                          'label': 'data(id)',
                          'width': '10px',
                          'height': '10px',
                        }
                      }, {
                        selector: 'edge',
                        style: {
                            label: 'data(description)',
                            'curve-style': 'haystack',
                            'haystack-radius': 0,
                            'width': 3,
                            'opacity': 0.666,
                            'line-color': '#fcc694'
                        }
                      }
                    ],
                    layout: {
                        name: 'circle',
                        fit: true,
                        avoidOverlap: true,
                        avoidOverlapPadding: 100,
                        minDist: 50
                    }
                  });
                cy.autolock(false);
              
          });
      };

      // get <input> element and the selected file 
      var csvFileInput = document.getElementById('fileInput');    
      var csvFile = csvFileInput.files[0];
      
      // use reader to read the selected file
      // when read operation is successfully finished the load event is triggered
      // and handled by our reader.onload function
      reader.readAsText(csvFile);
      
  };
    

});