
### Movies Collection

| Field        | Type            | Required | Description |
|--------------|----------------|----------|------------|
| _id          | ObjectId        | Yes      | Unique movie identifier |
| title        | String          | Yes      | Movie title |
| releaseDate  | Date            | Yes      | Cinema release date |
| genres       | Array<String>   | Yes      | List of genres (multiple allowed) |
| director     | String          | Yes      | Movie director |
| actors       | Array<String>   | Yes      | List of actors (no limit) |
| accessType   | String          | Yes      | "Premium" or "Public" |
| viewsCount   | Number          | Yes      | Number of times the movie was played |




### Reviews Collection

| Field      | Type      | Required | Description |
|------------|----------|----------|------------|
| _id        | ObjectId | Yes      | Unique review identifier |
| movieId    | ObjectId | Yes      | Reference to movie (_id from movies) |
| userId     | ObjectId | Yes      | Reference to user |
| rating     | Number   | Yes      | Rating from 1 to 10 |
| review     | String   | Yes      | Short text review |
| createdAt  | Date     | Yes      | Date when review was created |




### Movies Collection

| Field        | Type           | Description                              | Example                          |
|-------------|---------------|------------------------------------------|----------------------------------|
| _id         | ObjectId      | Unique movie identifier                  | ObjectId("65f1a2b3c4d5e6f7890a1b2c") |
| title       | String        | Movie title                              | "Inception"                     |
| releaseDate | Date          | Cinema release date                      | ISODate("2010-07-16")           |
| genres      | Array<String> | List of genres (multiple allowed)        | ["Sci-Fi", "Thriller"]          |
| director    | String        | Movie director                           | "Christopher Nolan"             |
| actors      | Array<String> | List of actors                           | ["Leonardo DiCaprio", "Tom Hardy"] |
| accessType  | String        | Access level ("Premium" or "Public")     | "Premium"                       |
| viewsCount  | Number (Int)  | Number of times the movie was played     | 1250000                         |

---

## Reviews Collection

| Field     | Type          | Description                              | Example                          |
|----------|--------------|------------------------------------------|----------------------------------|
| _id      | ObjectId     | Unique review identifier                 | ObjectId("75a1b2c3d4e5f6a7890b1c2d") |
| movieId  | ObjectId     | Reference to movie (_id from movies)     | ObjectId("65f1a2b3c4d5e6f7890a1b2c") |
| userId   | ObjectId     | Reference to user                        | ObjectId("85f1a2b3c4d5e6f7890a1b2d") |
| rating   | Number (Int) | Rating from 1 to 10                      | 9                                |
| review   | String       | Short text review                        | "Amazing movie with great visuals." |
| createdAt| Date         | Date when review was created             | ISODate("2024-01-15T10:30:00Z")  |
