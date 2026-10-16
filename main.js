
  //recap
 // esercizio 1
let liste = [
    {
        firstName: "Marco",
        lastName: "M.",
        country: "Switzerland",
        continent: "Europe",
        age: 19,
        language: "JavaScript"
    },
    {
        firstName: "Simone",
        lastName: "S.",
        country: "Tahiti",
        continent: "Oceania",
        age: 28,
        language: "JavaScript"
    },
    {
        firstName: "Matteo",
        lastName: "L.",
        country: "Taiwan",
        continent: "Asia",
        age: 35,
        language: "HTML"
    },
    {
        firstName: "Ettore",
        lastName: "M.",
        country: "Tajikistan",
        continent: "Asia",
        age: 30,
        language: "CSS"
    },
    { 
        firstName: 'Michael', 
        lastName: 'D.', 
        country: 'USA', 
        continent: 'America', 
        age: 30, 
        language: 'CSS' },
    { 
        firstName: 'Oliver', 
        lastName: 'K.', 
        country: 'Germania', 
        continent: 'Europe', 
        age: 44, 
        language: 'JavaScript' },
    { 
        firstName: 'Lamine', 
        lastName: 'Y.', 
        country: 'Marocco', 
        continent: 'Africa', 
        age: 20, 
        language: 'HTML' }
];

function contaSviluppatori(list) {
    let sviluppatoriTrovati = list.filter(
        sviluppatore => sviluppatore.language === "JavaScript" &&
                        sviluppatore.continent === "Europe"
    );

    return sviluppatoriTrovati.length;
}

console.log(contaSviluppatori(liste));


// esercizio 2

let lista =  [

    { firstName: "Sofia", lastName: "I.", country: "Argentina", continent: "Americas", age: 35, language: "Java" },
    { firstName: "Lukas", lastName: "X.", country: "Croatia", continent: "Europe", age: 35, language: "Python" },
    { firstName: "Madison", lastName: "U.", country: "United States", continent: "Americas", age: 32, language: "Ruby" }
];

function Greeting(list) {   // saluto
    list.forEach(sviluppatore => {   // per ognni elemento di un array
        sviluppatore.greeting = `Mi chiamo ${sviluppatore.firstName} e lavoro con ${sviluppatore.language}, ma effettivamente è meglio javascript`;
    });

    return list;
}

console.log(Greeting(lista));



// esecizio 3

let list = [

 { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },

 { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },

 { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Green' }

];

function occhi(list) {
    return list.some(persona => persona.eyes === "Green");  //some controlla se almeno un elemento dell' array soddisfa una condizione
}

console.log(occhi(list)); 


// esercizio 4

let list4 = [
    { firstName: "Mark", lastName: "G.", country: "Scotland", continent: "Europe", age: 22, language: "JavaScript" },
    { firstName: "Victoria", lastName: "T.", country: "Puerto Rico", continent: "Americas", age: 30, language: "Python" },
    { firstName: "Emma", lastName: "B.", country: "Norway", continent: "Europe", age: 19, language: "Clojure" }
];

function trovaSviluppatorePython(list) {
    let sviluppatore = list.find(persona => persona.language === "Python"); //find() restituisce il primo oggetto che ha language: "Python". Se non lo trova, restituisce undefined e viene eseguito il ramo else

    if (sviluppatore) {
        return `${sviluppatore.firstName}, ${sviluppatore.country}`;
    } else {
        return "Non ci sono sviluppatori Python";
    }
}

console.log(trovaSviluppatorePython(list4));
// Risultato : Victoria, Puerto Rico.


// esercizio 5

let list5 = [
    { firstName: "Emma", lastName: "Z.", country: "Netherlands", continent: "Europe", age: 29, logged: true },
    { firstName: "Piotr", lastName: "B.", country: "Poland", continent: "Europe", age: 128, logged: false },
    { firstName: "Jayden", lastName: "P.", country: "Jamaica", continent: "Americas", age: 42, logged: true }
];

function mostraRegistrazione(list) {
    list.forEach(persona => {
        if (persona.logged) {
            alert("L'utente è stato registrato.");
        } else {
            alert("L'utente non è registrato.");
        }
    });
}

mostraRegistrazione(list5);