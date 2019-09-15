# NaMo Memes API

An archive of NaMo memes in the form of images.

Homepage: https://namo-memes.herokuapp.com/

## API Documentation

#### GET [`/`](https://namo-memes.herokuapp.com/)

Shows the current stable version

#### GET [`/memes/:n`](https://namo-memes.herokuapp.com/memes/10)

Shows randomly `n` memes

#### GET [`/memes/page/:page/:n`](https://namo-memes.herokuapp.com/memes/page/0/10)

Shows `n` memes with pagination

#### GET [`/memes/latest/:n`](https://namo-memes.herokuapp.com/memes/latest/10)

Shows `n` latest memes

## Contribute

The API uses `keywords` to scrape memes from Google Search. Feel free to contribute by commenting your own list in the `issues` page.
