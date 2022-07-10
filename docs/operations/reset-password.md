FORMAT: A1

# Movies API

This is an API Blueprint example describing a movies API.

# Group Movies

Resources related to movies in the API.

## Movie collection [/movies]

### List all Movies [GET]

List movies in reverse order of publication.

+ Response 200 (application/json)

    + Attributes (array[Movie])

## Data structures

### Movie
+ id: 810b43d0-fc0d-4199-8a79-25b471c880bf (string, required)
+ title: Avengers: Endgame (string, required)
+ description (string)