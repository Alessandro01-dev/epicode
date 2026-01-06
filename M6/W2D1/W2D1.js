// QUERY DI MONGODB

// Esercizio 1
/*
Query:
{ isActive: true }

risorse trovate: 51
*/

// Esercizio 2
/*
Query:
{ age: { $gt: 26 } }

risorse trovate: 54
*/

// Esercizio 3
/*
Query:
{ age: { $gt: 26, $lte: 30 } }

risorse trovate: 19
*/

// Esecizio 4
/*
Query:
{ eyeColor: { $in: ["brown", "blue"] } }

risorse trovate: 66
*/

//Esercizio 5
/*
Query:
{ eyeColor: { $ne: "green" } }

risorse trovate: 66
*/

//Esercizio 6
/*
Query:
{ eyeColor: { $nin: ["green", "blue"] } }

risorse trovate: 35
*/

//Esercizio 7
/*
Query:
{ company: "FITCORE" }

Project:
{ email: 1, _id: 0 }

risultato trovato: email: "victoria.solis@fitcore.biz"
*/