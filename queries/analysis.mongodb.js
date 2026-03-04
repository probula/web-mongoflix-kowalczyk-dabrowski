db = db.getSiblingDB("mongoflix");

print("\n1. wyszukiwanie filmow z konkretnego gatunku");
const gatunek = db.movies.find({
    genres: "Action"
})
printjson(gatunek);
