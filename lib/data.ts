export const siteData = {
  "featuredGames": [
    {
      "id": "1",
      "title": "Space Explorer",
      "genre": "Adventure",
      "rating": 4.8,
      "image": "/games/space-explorer.jpg",
      "description": "Explore the vastness of space in this thrilling adventure",
      "players": 1245,
      "difficulty": "Medium"
    },
    {
      "id": "2",
      "title": "Puzzle Master",
      "genre": "Puzzle",
      "rating": 4.6,
      "image": "/games/puzzle-master.jpg",
      "description": "Challenge your mind with complex puzzles",
      "players": 892,
      "difficulty": "Hard"
    },
    {
      "id": "3",
      "title": "Racing Thunder",
      "genre": "Racing",
      "rating": 4.9,
      "image": "/games/racing-thunder.jpg",
      "description": "High-speed racing action with stunning graphics",
      "players": 2156,
      "difficulty": "Easy"
    }
  ],
  "allGames": [
    {
      "id": "1",
      "title": "Space Explorer",
      "genre": "Adventure",
      "rating": 4.8,
      "image": "/games/space-explorer.jpg",
      "description": "Explore the vastness of space in this thrilling adventure",
      "players": 1245,
      "difficulty": "Medium",
      "releaseDate": "2024-01-15"
    },
    {
      "id": "2",
      "title": "Puzzle Master",
      "genre": "Puzzle",
      "rating": 4.6,
      "image": "/games/puzzle-master.jpg",
      "description": "Challenge your mind with complex puzzles",
      "players": 892,
      "difficulty": "Hard",
      "releaseDate": "2024-02-08"
    },
    {
      "id": "3",
      "title": "Racing Thunder",
      "genre": "Racing",
      "rating": 4.9,
      "image": "/games/racing-thunder.jpg",
      "description": "High-speed racing action with stunning graphics",
      "players": 2156,
      "difficulty": "Easy",
      "releaseDate": "2024-03-22"
    },
    {
      "id": "4",
      "title": "Mystic Quest",
      "genre": "RPG",
      "rating": 4.7,
      "image": "/games/mystic-quest.jpg",
      "description": "Embark on an epic fantasy adventure",
      "players": 1678,
      "difficulty": "Medium",
      "releaseDate": "2024-01-30"
    }
  ],
  "leaderboardData": [
    {
      "rank": 1,
      "username": "GameMaster2024",
      "score": 125400,
      "game": "Space Explorer",
      "avatar": "/avatars/player1.jpg"
    },
    {
      "rank": 2,
      "username": "PuzzleKing",
      "score": 98750,
      "game": "Puzzle Master",
      "avatar": "/avatars/player2.jpg"
    },
    {
      "rank": 3,
      "username": "SpeedDemon",
      "score": 87320,
      "game": "Racing Thunder",
      "avatar": "/avatars/player3.jpg"
    },
    {
      "rank": 4,
      "username": "MysticWarrior",
      "score": 76890,
      "game": "Mystic Quest",
      "avatar": "/avatars/player4.jpg"
    }
  ],
  "currentUser": {
    "id": "user123",
    "username": "Player1",
    "email": "player1@example.com",
    "avatar": "/avatars/current-user.jpg",
    "level": 15,
    "xp": 12450,
    "joinDate": "2023-12-01",
    "gamesPlayed": 28,
    "totalScore": 45670
  },
  "userStats": {
    "gamesPlayed": 28,
    "totalHours": 156,
    "averageScore": 1631,
    "achievements": 12,
    "favoriteGenre": "Adventure",
    "winRate": "68%"
  },
  "userAchievements": [
    {
      "id": "ach1",
      "title": "First Victory",
      "description": "Win your first game",
      "icon": "/achievements/first-victory.svg",
      "earned": true,
      "date": "2023-12-05"
    },
    {
      "id": "ach2",
      "title": "Speed Runner",
      "description": "Complete a game in under 5 minutes",
      "icon": "/achievements/speed-runner.svg",
      "earned": true,
      "date": "2023-12-15"
    },
    {
      "id": "ach3",
      "title": "High Scorer",
      "description": "Score over 10,000 points",
      "icon": "/achievements/high-scorer.svg",
      "earned": false,
      "date": null
    }
  ],
  "userProgress": [
    {
      "date": "2024-01-01",
      "score": 1200,
      "games": 2
    },
    {
      "date": "2024-01-15",
      "score": 2800,
      "games": 5
    },
    {
      "date": "2024-02-01",
      "score": 4200,
      "games": 8
    },
    {
      "date": "2024-02-15",
      "score": 5900,
      "games": 12
    },
    {
      "date": "2024-03-01",
      "score": 7800,
      "games": 18
    }
  ],
  "settings": {
    "appName": "GameHub",
    "description": "A comprehensive gaming platform for discovering, playing, and tracking games",
    "version": "1.0.0",
    "soundEnabled": true,
    "musicVolume": 0.7,
    "effectsVolume": 0.8,
    "notifications": true,
    "autoSave": true,
    "theme": "dark",
    "difficulty": "medium"
  }
};

export const navigation = {
  "main": [
    {
      "label": "Home",
      "href": "/",
      "icon": "home"
    },
    {
      "label": "Games",
      "href": "/games",
      "icon": "gamepad"
    },
    {
      "label": "Leaderboard",
      "href": "/leaderboard",
      "icon": "trophy"
    },
    {
      "label": "Profile",
      "href": "/profile",
      "icon": "user"
    }
  ],
  "footer": [
    {
      "label": "About",
      "href": "/about"
    },
    {
      "label": "Support",
      "href": "/support"
    },
    {
      "label": "Privacy",
      "href": "/privacy"
    },
    {
      "label": "Terms",
      "href": "/terms"
    }
  ]
};