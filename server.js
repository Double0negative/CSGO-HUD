    http = require('http');
    fs = require('fs');

    var app = require('express')();
    var express = require('http').Server(app);
    var io = require('socket.io')(express);

    app.set('view engine', 'jade');

    app.get('/', function(req, res) {
    	res.render('index');
    });

    app.get('/main.js', function(req, res) {
    	res.sendfile('public/main.js');
    });

    app.get('/style.css', function(req, res) {
    	res.sendfile('public/style.css');
    });

    io.on('connection', function(socket) {
    	console.log('a user connected');
    });

    express.listen(2626, function() {
    	console.log('listening on *:3030');
    });

    port = 3000;
    host = '127.0.0.1';

    server = http.createServer(function(req, res) {

    	if (req.method == 'POST') {
    		console.log("Handling POST request...");
    		res.writeHead(200, {
    			'Content-Type': 'text/html'
    		});

    		var body = '';
    		req.on('data', function(data) {
    			body += data;
    		});
    		req.on('end', function() {
    			//console.log("POST payload: " + body);
    			update(JSON.parse(body));
    			res.end('');
    		});

    	} else {
    		res.writeHead(200, {
    			'Content-Type': 'text/html'
    		});
    		var html = 'yes';
    		res.end(html);
    	}

    });

    var map;
    var player;

    var round = {
    	phase: "",
    	timestart: 0,
    	time: 0,
    	bomb: {
    		planted: false,
    		timestart: 0,
    		time: 0
    	}
    };

    function update(json) {
    	if (json.round) {
    		if (!(round.phase === json.round.phase)) {
    			round.timestart = json.provider.timestamp;
    			round.phase = json.round.phase;
    		}

    		var maxTime = 0;
    		if (json.round.phase === 'live') {
    			maxTime = 115;
    		} else if (round.phase === 'freezetime') {
    			maxTime = 15;
    		} else {
    			maxTime = 7;
    		}
    		round.time = maxTime - (new Date().getTime() / 1000 - round.timestart);

            
            console.log(round.bomb.planted + " " + json.round.bomb + "  " + round.bomb.time);
    		if (!round.bomb.planted && json.round.bomb === 'planted') {
    			round.bomb.planted = true;
    			round.bomb.timestart = json.provider.timestamp ;
    		} else if (round.bomb.planted && json.round.bomb !== 'planted') {
    			round.bomb.planted = false;
    		} 
            
            if(round.bomb.planted) {
                round.bomb.time = 40 - (new Date().getTime() / 1000 - round.bomb.timestart);
            }

    		json.extra = {};
    		json.extra.round = round;
    	}

    	io.emit("update", JSON.stringify(json));
    }

    server.listen(port, host);
    console.log('Listening at http://' + host + ':' + port);