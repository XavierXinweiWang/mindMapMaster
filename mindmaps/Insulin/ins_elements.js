// based on Cynthia Rubio's Mind Map

var GlyElements = {
  nodes: [
    { data: { id: 0, structure: 'Glucose', image: 'assets/Glucose.png', url: 'https://en.wikipedia.org/wiki/Glucose'} },
    { data: { id: 1, structure: 'Pancereas', image: 'assets/Illu_pancreas_duodenum.jpg', url: 'https://en.wikipedia.org/wiki/Pancreas' } },
    { data: { id: 2, structure: 'Islets', image: 'assets/Langerhanssche_Insel.jpg', url: 'https://en.wikipedia.org/wiki/Pancreatic_islets' } },
//    { data: { id: 3, structure: 'Norepinephrine', image: 'assets/Norepinephrine.png', url: 'https://en.wikipedia.org/wiki/Norepinephrine' } },
//    { data: { id: 4, structure: 'Cholecystokinin', image: null, url: 'https://en.wikipedia.org/wiki/Cholecystokinin' } },
    { data: { id: 3, structure: 'Beta-cell', image: 'assets/diabetic-researchers-pinpoint-gene-key-to-reactivating-insulin-producing-beta-cells-healthinnovations.jpg', url: 'https://en.wikipedia.org/wiki/Beta_cell' } }, 
    { data: { id: 4, structure: 'Insulin', image: 'assets/insulin.png', url: 'https://en.wikipedia.org/wiki/Insulin' } }
  ],
  edges: [
    {
      data: {
        id: "Step1",
        description: 'enters',
        source: 0, target: 1
      }
    }, {
      data: {
        id: "Step2",
        description: 'contains',
        source: 1, target: 2
      }
    }, {
      data: {
        id: "Step3",
        description: 'NE',
        source: 2, target: 3
      }
    }, {
      data: {
        id: "Step4",
        description: 'CCK',
        source: 2, target: 4
      }
    }, {
      data: {
        id: "Step5",
        description: 'connect to',
        source: 3, target: 4
      }
    }
  ]
};