# Team Yod
## Game Tracker
## Fall 2020
- Conner Nelson (cenelson52), Joseph O'Leary (jpoleary), Dang Le Nguyen (dang592)

## Overview:
    For our project, we created a game tracker that allows users to create an account, create games w/ custom statistics, and create and track matches, teams, and players through each game. This allows users to decide exactly what they wish to track for their own performance, as well as others, and shape their experience accordingly.

## User Interface:

## APIs:

## Database:

### User Table
| Column        | Counter Name | Data Type | Description                    |
|---------------|--------------|-----------|--------------------------------|
| User ID       | userid       | Integer   | ID for the user                |
| Username      | username     | Text      | Name set by user               |
| Password      | password     | Text[]    | Salt & (encoded) password      |
| Date of Birth | dob          | Text      | Date of birth                  |
| Game IDs      | gameids      | Text[]    | Holds ids for the user's games |

### Game Table
| Column        | Counter Name | Data Type | Description                    |
|---------------|--------------|-----------|--------------------------------|
| Game ID       | gameid       | Integer   | ID for the game                |
| Game Name     | name         | Text      | Name of the game               |
| Description   | descrip      | Text      | Short description of game      |
| Matches       | matches      | Integer[] | All matches for the game       |
| Stats         | stats        | Text[]    | Custom statistics for matches  |

 ### Match Table
| Column        | Counter Name | Data Type | Description                    |
|---------------|--------------|-----------|--------------------------------|
| Match ID      | matchid      | Integer   | ID for the match               |
| Game ID       | gameid       | Integer   | ID for game it belongs to      |
| Match Object  | match        | Text      | Match object containing info   |

## URL Routes / Mapping

## Authentication/Authorization

## Division of Labor
- Joseph O'Leary
    - Markdown docs
    - CSS
    - HTML on Homepage, GameCreate, Match, and Game
    - Javascript for server.js, accountcreate.js, homepage.js
    - .gitignore
    - Setting up and (trying to) connect database
    - Starting miniCrypt.js + Passport.js
    - Heroku
- Dang Le Nguyen
    - Wireframes
    - CSS
    - HTML for Account, AccountCreate
    - server.js, database.js, dataExs.js
    - tourney.js, tourneycreate.js, account.js, accountcreate.js
    - package.json
- Connor Nelson
    - 

## Conclusion

## [Heroku Link](https://cs326final-yod.herokuapp.com/)

