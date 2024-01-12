//     // Étape 1: Initié une requête pour récupérer le fichier JSON
// fetch('list.json')

// // Étape 2: Une fois la requête résolue, exécute la fonction callback avec la réponse
//   .then((response) => {
//     // Affiche dans la console que la requête a été résolue et log la réponse
//     console.log('Résolu :', response);

//     // Retourne la promesse de la réponse JSON parsée pour la prochaine étape
//     return response.json();
//   })

// // Étape 3: Une fois la réponse JSON parsée, exécute la fonction callback avec les données
//   .then(data => {
//     // Affiche dans la console les données JSON parsées
//     console.log(data);
//   });

    // fetch('list.json').then((response)=>{
    //     console.log('resolved', response);
    //     return response.json();
    //  }).then(data =>{
    //     console.log(data);
    //  })
    //  .catch((err) =>{
    //     console.log('rejected', err);
    //  })


// const getTodos = async () => {
//   const response = await fetch('list.json');
// };
// const test = getTodos();
// console.log(test);
// When you assign the result of getTodos() to the variable test (const test = getTodos();), test will be a promise because getTodos is an asynchronous function that returns a promise. The value logged for test will be the promise itself, which is why you see the Promise object in the console.

// const getTodos = async () => {
//     const response = await fetch('list.json');
//     const data = await response.json();
//     return data;
//   };
// console.log(getTodos());// contient une promesse avec la data mais la promesse n'est pas encore résolue
// console.log(1);
// getTodos()
// .then(data => console.log('resolved', data));
// console.log(2);
// .then(data=> console.log('resolved:', data));
// .then(data => console.log('resolved:', data)); : C'est une continuation de la chaîne de promesses. Une fois que la promesse retournée par getTodos() est résolue, cette fonction de rappel est exécutée avec les données retournées. Elle logge les données dans la console avec le message 'resolved:'.


    
  