document.addEventListener("DOMContentLoaded", function() { 


    var cy = cytoscape({
    container: document.getElementById('cy'),
    elements: GlyElements,
    style: [
          {
            selector: 'node',
            style: {
              'label': 'data(structure)',
              'width': '10px',
              'height': '10px',
            }
          }, {
            selector: 'edge',
            style: {
//              label: 'data(description)'
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