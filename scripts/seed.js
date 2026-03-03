print("start seed")

db = db.getSiblingDB("mongoflix");

db.movies.drop();
db.reviews.drop();
console.log("kolekcje movis i reviews wyczyszczone");


const fs = require("fs");
const rawData = fs.readFileSync("../data/movies.json", "utf8");
print("plik wczytany");

const moviesList = JSON.parse(rawData);
print("json parse");

//data stringi na obiekty ISOdate
const moviesData = moviesList.map(movie => ({
    ...movie,
        releaseDate: ISODate(movie.releaseDate)
}))

const moviesResult = db.movies.insertMany(moviesData);
printjson(moviesResult);

db.reviews.insertMany([
    { movieId: moviesResult.insertedIds[0], userId: ObjectId(), rating: 8, review: "Super akcja!", createdAt: new Date() },
    { movieId: moviesResult.insertedIds[1], userId: ObjectId(), rating: 7, review: "Dobrze zrealizowany film.", createdAt: new Date() },
    { movieId: moviesResult.insertedIds[2], userId: ObjectId(), rating: 6, review: "Śmieszny, ale trochę straszny.", createdAt: new Date() },
    { movieId: moviesResult.insertedIds[3], userId: ObjectId(), rating: 9, review: "Świetne efekty sci-fi!", createdAt: new Date() },
    { movieId: moviesResult.insertedIds[4], userId: ObjectId(), rating: 5, review: "Trochę nudny romans.", createdAt: new Date() },
    { movieId: moviesResult.insertedIds[5], userId: ObjectId(), rating: 8, review: "Wciągający thriller.", createdAt: new Date() },
    { movieId: moviesResult.insertedIds[6], userId: ObjectId(), rating: 7, review: "Fantastyczna kraina!", createdAt: new Date() },
    { movieId: moviesResult.insertedIds[7], userId: ObjectId(), rating: 6, review: "Straszny horror.", createdAt: new Date() },
    { movieId: moviesResult.insertedIds[8], userId: ObjectId(), rating: 7, review: "Dobre komediowe żarty.", createdAt: new Date() },
    { movieId: moviesResult.insertedIds[9], userId: ObjectId(), rating: 9, review: "Wojna w kosmosie!", createdAt: new Date() }
]);

console.log("dodano rezencje")


