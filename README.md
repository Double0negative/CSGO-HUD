#CSGO HUD GameState Integration

https://www.youtube.com/watch?v=FM1-iapbEtc

# How to install (Users)
Pre-Made packages will be assembled once the project is more complete. For now, if you are developer you can follow the instructions below to install/modifiy on *nix systems

# How to Install & Edit (Developers)

Requirements: 
* NodeJS
* NPM

First, Clone the repo
```sh
git clone https://github.com/Double0negative/CSGO-HUD.git
cd CSGO-HUD
```

Then install all dependencies 
```
npm install
```

Create a file named `gamestate_integration_hud.cfg` in your csgo cfg folder (`steamapps/common/Counter-Strike Global Offensive/csgo/cgf/`)

Paste the following into the file

```
"Console Sample v.1"
{
 "uri" "http://127.0.0.1:3000"
 "timeout" "5.0"
 "buffer"  "0.1"
 "throttle" "0.1"
 "heartbeat" "60.0"
 "data"
 {
   "provider"            "1"
   "map"                 "1"
   "round"               "1"
   "player_id"           "1"
   "player_state"        "1"
   "player_weapons"      "1"
   "player_match_stats"  "1"
   "allplayers_match_stats"  "1"
 }
}
```


then run your server with the following command

```
node server.js
```

You should then be able to connect in a web browser by going to `http://localhost:2626`. Start up your game and connect to a match and data should begin streaming
