document.addEventListener("DOMContentLoaded", function() { 


    var cy = cytoscape({
    container: document.getElementById('cy'),
    elements: GlyElements,
    style: [
      {
        selector: 'node',
        style: {
          'label': 'data(structure)',
          'width': '200px',
          'height': '200px',
          'background-opacity': 0,
          'background-image': 'data(image)',
          'background-fit': 'contain',
          'background-clip': 'none'
        }
      }, {
        selector: 'edge',
        style: {
          label: 'data(description)'
        }
      }
    ],
    layout: {
        name: 'circle',
        fit: false,
        avoidOverlap: true,
        avoidOverlapPadding: 80,
    }
  });
//    cy.autolock(true);
    
//    function panIn(target) {
//        cy.animate({
//          fit: {
//            eles: target,
//            padding: 200
//          },
//          duration: 700,
//          easing: 'ease',
//          queue: true
//        });
//    }
    

});