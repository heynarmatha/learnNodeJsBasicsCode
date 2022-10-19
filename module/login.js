console.log(module);
function greet(name) {
  console.log(name);
}

module.exports = greet;

//output

// Module {
//   id: '/Users/narmatha/Desktop/node/npm /learnNodeJsBasicsCode/module/login.js',
//   path: '/Users/narmatha/Desktop/node/npm /learnNodeJsBasicsCode/module',
//   exports: {},
//   parent: Module {
//     id: '.',
//     path: '/Users/narmatha/Desktop/node/npm /learnNodeJsBasicsCode',
//     exports: {},
//     parent: null,
//     filename: '/Users/narmatha/Desktop/node/npm /learnNodeJsBasicsCode/index.js',
//     loaded: false,
//     children: [ [Circular *1] ],
//     paths: [
//       '/Users/narmatha/Desktop/node/npm /learnNodeJsBasicsCode/node_modules',
//       '/Users/narmatha/Desktop/node/npm /node_modules',
//       '/Users/narmatha/Desktop/node/node_modules',
//       '/Users/narmatha/Desktop/node_modules',
//       '/Users/narmatha/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   },
//   filename: '/Users/narmatha/Desktop/node/npm /learnNodeJsBasicsCode/module/login.js',
//   loaded: false,
//   children: [],
//   paths: [
//     '/Users/narmatha/Desktop/node/npm /learnNodeJsBasicsCode/module/node_modules',
//     '/Users/narmatha/Desktop/node/npm /learnNodeJsBasicsCode/node_modules',
//     '/Users/narmatha/Desktop/node/npm /node_modules',
//     '/Users/narmatha/Desktop/node/node_modules',
//     '/Users/narmatha/Desktop/node_modules',
//     '/Users/narmatha/node_modules',
//     '/Users/node_modules',
//     '/node_modules'
//   ]
// }
//   Testingg ************** THIS IS COMING FROM INDEX.JS
