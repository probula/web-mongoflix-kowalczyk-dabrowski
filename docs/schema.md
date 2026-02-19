
## Movies Collection

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
