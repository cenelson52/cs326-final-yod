# Milestone 3

## Division of Labor
- Joseph O'Leary
    - secrets.json + .gitignore
    - Markdown doc (Server Documentation, Heroku Link, Division of Labor)
    - Database Setup
    - 

- Connor Nelson
    - Finished front-end work missing from milestone 2
    - 
    
- Dang Le Nguyen
    - 

## Server Documentation

### User Table
| Column        | Counter Name | Data Type      | Description                    |
|---------------|--------------|----------------|--------------------------------|
| User ID       | userid       | Integer        | ID for the user                |
| Username      | username     | String         | Name set by user               |
| Password      | password     | String         | (Encoded) password             |
| Date of Birth | dob          | String         | Date of birth                  |
| Game IDs      | gameids      | Array (INT)    | Holds ids for the user's games |

### Game Table
| Column        | Counter Name | Data Type      | Description                    |
|---------------|--------------|----------------|--------------------------------|
| Game ID       | gameid       | Integer        | ID for the game                |
| Game Name     | name         | String         | Name of the game               |
| Description   | desc         | String         | Short description of game      |
| Matches       | matches      | Array (INT)    | All matches for the game       |
| Stats         | stats        | Array (STRING) | Custom statistics for matches  |


 ### Match Table
| Column        | Counter Name | Data Type      | Description                    |
|---------------|--------------|----------------|--------------------------------|
| Match ID      | matchid      | Integer        | ID for the match               |
| Game ID       | gameid       | Integer        | ID for game it belongs to      |
| Match Object  | match        | Object         | Match object containing info   |


## [Heroku Link](https://cs326final-yod.herokuapp.com/)
