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
