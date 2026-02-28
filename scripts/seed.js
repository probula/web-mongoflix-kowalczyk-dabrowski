db.createCollection("movies", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["title","releaseDate","genres","director","actors","accessType","viewsCount"],
            properties: {
                title: { bsonType: "string" },
                releaseDate: { bsonType: "date" },
                genres: { bsonType: "array", items: { bsonType: "string" } },
                director: { bsonType: "string" },
                actors: { bsonType: "array", items: { bsonType: "string" } },
                accessType: { enum: ["Premium","Public"] },
                viewsCount: { bsonType: "int" }
            }
        }
    }
});

db.createCollection("reviews", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["movieId","userId","rating","review","createdAt"],
            properties: {
                movieId: { bsonType: "objectId" },
                userId: { bsonType: "objectId" },
                rating: { bsonType: "int" },
                review: { bsonType: "string" },
                createdAt: { bsonType: "date" }
            }
        }
    }
});

db.reviews.createIndex({ movieId: 1, userId: 1 }, { unique: true });

const movies = db.movies.insertMany([
    {
        title: "Action Storm",
        releaseDate: new Date("2021-05-12"),
        genres: ["Action","Adventure"],
        director: "John Strong",
        actors: ["Actor A","Actor B"],
        accessType: "Premium",
        viewsCount: NumberInt(1500)
    },
    {
        title: "Laughing Dead",
        releaseDate: new Date("2022-10-31"),
        genres: ["Comedy","Horror"],
        director: "Jane Dark",
        actors: ["Actor C","Actor D"],
        accessType: "Public",
        viewsCount: NumberInt(900)
    },
    {
        title: "Cyber Future",
        releaseDate: new Date("2024-01-10"),
        genres: ["Sci-Fi","Action"],
        director: "Mark Galaxy",
        actors: ["Actor E","Actor F"],
        accessType: "Premium",
        viewsCount: NumberInt(3200)
    },
    {
        title: "Romantic Escape",
        releaseDate: new Date("2019-02-14"),
        genres: ["Romance","Drama"],
        director: "Anna Heart",
        actors: ["Actor G","Actor H"],
        accessType: "Public",
        viewsCount: NumberInt(600)
    },
    {
        title: "Mystery Lake",
        releaseDate: new Date("2020-09-09"),
        genres: ["Thriller","Mystery"],
        director: "Clara Deep",
        actors: ["Actor I","Actor J"],
        accessType: "Public",
        viewsCount: NumberInt(500)
    }
]);

const ids = Object.values(movies.insertedIds);

db.reviews.insertMany([
    {
        movieId: ids[0],
        userId: ObjectId(),
        rating: NumberInt(8),
        review: "Super akcja i fajne efekty!",
        createdAt: new Date()
    },
    {
        movieId: ids[0],
        userId: ObjectId(),
        rating: NumberInt(7),
        review: "Dobrze zrealizowany film akcji.",
        createdAt: new Date()
    },
    {
        movieId: ids[1],
        userId: ObjectId(),
        rating: NumberInt(6),
        review: "Śmieszny, ale trochę przerażający.",
        createdAt: new Date()
    },
    {
        movieId: ids[2],
        userId: ObjectId(),
        rating: NumberInt(9),
        review: "Świetne efekty sci-fi!",
        createdAt: new Date()
    },
    {
        movieId: ids[3],
        userId: ObjectId(),
        rating: NumberInt(5),
        review: "Trochę nudny romans.",
        createdAt: new Date()
    },
    {
        movieId: ids[4],
        userId: ObjectId(),
        rating: NumberInt(8),
        review: "Wciągający thriller z zagadką.",
        createdAt: new Date()
    }
]);