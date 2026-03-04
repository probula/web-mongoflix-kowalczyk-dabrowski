db = db.getSiblingDB("mongoflix");

print("\n1. wyszukiwanie filmow z konkretnego gatunku");
const gatunek = db.movies.find({
    genres: "Action"
})
printjson(gatunek);

print("$gt i $and");
const gtand = db.movies.find({
    $and: [
        { releaseDate: { $gt: new Date("2022-01-01") } },
        { viewsCount: { $gt: 2000 } }
    ]
})
printjson(gtand);

print("srednia");
const avg = db.movies.aggregate([
    { $unwind: "$genres" },
    {
        $group: {
            _id: "$genres",
            averageViews: { $avg: "$viewsCount" }
        }
    },
    {
        $sort: { averageViews: -1 }
    }
])
printjson(avg)

print("aktualizacja danych")
const update = db.movies.updateMany(
    { viewsCount: { $gt: 3000 } },
    { $set: { featured: true } }
)
printjson(update)