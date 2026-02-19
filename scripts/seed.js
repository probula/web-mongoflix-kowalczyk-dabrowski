probula
probula
Dostępny

alvarez enrique — 14:20
h
// ==============================
// Mongoflix Database Seeder
// ==============================

use("mongoflix");

text.txt
5 KB
﻿
alvarez enrique
sentinoalvarez._38461
// ==============================
// Mongoflix Database Seeder
// ==============================

use("mongoflix");

print("Cleaning old collections...");

db.movies.drop();
db.reviews.drop();

// ==============================
// Create Movies Collection
// ==============================

db.createCollection("movies", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "title",
                "releaseDate",
                "genres",
                "director",
                "actors",
                "accessType",
                "viewsCount"
            ],
            properties: {
                title: { bsonType: "string", minLength: 1 },
                releaseDate: { bsonType: "date" },
                genres: {
                    bsonType: "array",
                    minItems: 1,
                    items: { bsonType: "string" }
                },
                director: { bsonType: "string", minLength: 1 },
                actors: {
                    bsonType: "array",
                    minItems: 1,
                    items: { bsonType: "string" }
                },
                accessType: { enum: ["Premium", "Public"] },
                viewsCount: { bsonType: "int", minimum: 0 }
            }
        }
    }
});

// ==============================
// Create Reviews Collection
// ==============================

db.createCollection("reviews", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["movieId", "userId", "rating", "review", "createdAt"],
            properties: {
                movieId: { bsonType: "objectId" },
                userId: { bsonType: "objectId" },
                rating: { bsonType: "int", minimum: 1, maximum: 10 },
                review: { bsonType: "string", minLength: 1 },
                createdAt: { bsonType: "date" }
            }
        }
    }
});

// Unique index (one user, one review per movie)
db.reviews.createIndex(
    { movieId: 1, userId: 1 },
    { unique: true }
);

print("Collections and indexes created.");

// ==============================
// Insert Movies
// ==============================

const movies = db.movies.insertMany([
    {
        title: "Action Storm",
        releaseDate: new Date("2021-05-12"),
        genres: ["Action", "Adventure"],
        director: "John Strong",
        actors: ["Actor A", "Actor B"],
        accessType: "Premium",
        viewsCount: 1500
    },
    {
        title: "Laughing Dead",
        releaseDate: new Date("2022-10-31"),
        genres: ["Comedy", "Horror"],
        director: "Jane Dark",
        actors: ["Actor C", "Actor D"],
        accessType: "Public",
        viewsCount: 900
    },
    {
        title: "Cyber Future",
        releaseDate: new Date("2024-01-10"),
        genres: ["Sci-Fi", "Action"],
        director: "Mark Galaxy",
        actors: ["Actor E", "Actor F"],
        accessType: "Premium",
        viewsCount: 3200
    },
    {
        title: "Romantic Escape",
        releaseDate: new Date("2019-02-14"),
        genres: ["Romance", "Drama"],
        director: "Anna Heart",
        actors: ["Actor G", "Actor H"],
        accessType: "Public",
        viewsCount: 600
    },
    {
        title: "Fast Wheels",
        releaseDate: new Date("2021-07-20"),
        genres: ["Action"],
        director: "John Strong",
        actors: ["Actor I", "Actor J"],
        accessType: "Premium",
        viewsCount: 2100
    },
    {
        title: "Mystery Lake",
        releaseDate: new Date("2020-09-09"),
        genres: ["Thriller", "Mystery"],
        director: "Clara Deep",
        actors: ["Actor K", "Actor L"],
        accessType: "Public",
        viewsCount: 500
    },
    {
        title: "Fantasy Kingdom",
        releaseDate: new Date("2023-08-08"),
        genres: ["Fantasy", "Action"],
        director: "Anna Heart",
        actors: ["Actor M", "Actor N"],
        accessType: "Premium",
        viewsCount: 2800
    },
    {
        title: "Ghost Town",
        releaseDate: new Date("2018-11-11"),
        genres: ["Horror"],
        director: "Jane Dark",
        actors: ["Actor O", "Actor P"],
        accessType: "Public",
        viewsCount: 400
    },
    {
        title: "Stand Up Night",
        releaseDate: new Date("2022-06-01"),
        genres: ["Comedy"],
        director: "Funny Guy",
        actors: ["Actor Q", "Actor R"],
        accessType: "Public",
        viewsCount: 1000
    },
    {
        title: "Galactic War",
        releaseDate: new Date("2023-03-15"),
        genres: ["Sci-Fi", "Action"],
        director: "Mark Galaxy",
        actors: ["Actor S", "Actor T"],
        accessType: "Premium",
        viewsCount: 3500
    }
]);

print("Movies inserted: " + movies.insertedIds.length);

// ==============================
// Insert Sample Reviews
// ==============================

const movieIds = Object.values(movies.insertedIds);

db.reviews.insertMany([
    {
        movieId: movieIds[0],
        userId: ObjectId(),
        rating: 8,
        review: "Great action scenes!",
        createdAt: new Date()
    },
    {
        movieId: movieIds[1],
        userId: ObjectId(),
        rating: 7,
        review: "Funny but a bit scary.",
        createdAt: new Date()
    },
    {
        movieId: movieIds[2],
        userId: ObjectId(),
        rating: 9,
        review: "Amazing sci-fi visuals!",
        createdAt: new Date()
    }
]);

print("Reviews inserted successfully.");
print("Seeding completed.");

text.txt
5 KB
