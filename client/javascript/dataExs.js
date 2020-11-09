'use strict'

let games = [
    {
        'name' : 'gameEx',
        'id' : 0,
        'description' : "a game",
        'players' : [
            {
                'name' : 'Jim',
                'wins' : 0,
                'losses' : 0,
                'stats': {
                    'kills' : 0,
                    'deaths' : 0,
                    'assists' : 0
                }
            }, 
            {
                'name' : 'Bob',
                'wins' : 0,
                'losses' : 0,
                'stats': {
                    'kills' : 0,
                    'deaths' : 0,
                    'assists' : 0
                }
            }
        ],
        'custome-stats' : [
            'kills', 'deaths', 'assists'
        ],
        'matches' : [
            {
                'team1' : {
                    'won' : true,
                    'players' : [{
                        'name' : 'Jim',
                        'stats': {
                            'kills' : 10,
                            'deaths' : 8,
                            'assists' : 0
                        }
                    }]
                },
                'team2' : {
                    'won' : false,
                    'players' : [
                        {
                        'name' : 'Bobs',
                        'stats': {
                            'kills' : 8,
                            'deaths' : 10,
                            'assists' : 0
                        }
                    }
                ]
                }
            }
        ]
    }
];


let accounts = [
    {
        'username' : 'user123',
        'password' : 'badpassword123',
        'email' : 'example@gmail.com',
        'game-ids' : [0]
    }
];


