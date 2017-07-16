// based on Cynthia Rubio's Mind Map

var GlyElements = {
  nodes: [
    { data: { id: 0, structure: 'Ketogenic Diet'} },
    { data: { id: 1, structure: 'High fat, high protein, low carbs'} },
    { data: { id: 2, structure: 'Treatment for epilepsy, Alzheimer, other neurodegenarative diseases/disorders' } },
    { data: { id: 3, structure: 'Increase pulinergic and GABAergic transmission'} }, 
    { data: { id: 4, structure: 'reduce glucose levels'} }, 
    { data: { id: 5, structure: 'ketore bodies'} }, 
    { data: { id: 6, structure: 'Liver'} }, 
    { data: { id: 7, structure: 'FG21'} }, 
    { data: { id: 8, structure: 'Decrease dopamine in nucleus accumbers'} }, 
    { data: { id: 9, structure: 'adipose tissue'} }, 
    { data: { id: 10, structure: 'suger intake'} }, 
    { data: { id: 11, structure: 'Increase energy expenditure'} }
  ],
  edges: [
    {
      data: {
        id: "Step1",
        description: 'leads to',
        source: 1, target: 0
      }
    }, {
      data: {
        id: "Step2",
        description: 'leads to',
        source: 0, target: 2
      }
    }, {
      data: {
        id: "Step3",
        description: 'leads to',
        source: 0, target: 3
      }
    }, {
      data: {
        id: "Step4",
        description: 'leads to',
        source: 0, target: 4
      }
    }, {
      data: {
        id: "Step5",
        description: 'leads to',
        source: 0, target: 5
      }
    }, {
      data: {
        id: "Step6",
        description: 'leads to',
        source: 5, target: 6
      }
    }, {
      data: {
        id: "Step7",
        description: 'leads to',
        source: 5, target: 7
      }
    }, {
      data: {
        id: "Step8",
        description: 'leads to',
        source: 7, target: 8
      }
    }, {
      data: {
        id: "Step9",
        description: 'leads to',
        source: 7, target: 9
      }
    }, {
      data: {
        id: "Step10",
        description: 'leads to',
        source: 9, target: 11
      }
    }, {
      data: {
        id: "Step11",
        description: 'leads to',
        source: 7, target: 10
      }
    }
  ]
};