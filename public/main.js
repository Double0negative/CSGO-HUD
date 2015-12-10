var io = io();
var json;

var interval;

var roundtime = 0;
var bombtime = 0;

io.on("update", function(status) {
    json = JSON.parse(status);

    $(".t-score").html(json.map.team_t.score);
    $(".ct-score").html(json.map.team_ct.score);

    if (interval) {
        clearInterval(interval);
    }

    roundtime = parseInt(json.extra.round.time);
    bombtime = parseInt(json.extra.round.bomb.time);

    interval = setInterval(timer, 500);

});

var flashing = false;

function timer() {
    console.log("timer");

    var intbomb = parseInt(bombtime);
    var inttime = parseInt(roundtime);

    if (json.extra.round.bomb.planted) {
        $(".time").html(intbomb);
        $(".time").css("font-size", "17em");
        $(".timelabel").html("Bomb Planted");

        if (bombtime < 0) {
            flashing = false;
        } else if (bombtime <= 5) {
            flash();
        } else if (bombtime <= 10) {
            $(".wrap").css('background-color', "red");
        } else {
            $(".wrap").css('background-color', 'orange');
        }
    } else {
        var min = 0;
        var sec = 0;

        if (roundtime > 59) {
            min = 1;
            sec = inttime - 59;
        } else {
            sec = inttime;
        }

        $(".time").css("font-size", "10em");

        if (json.round.phase === 'freezetime') {
            $(".timelabel").html("Freeze Time");
        } else if (json.round.phase === 'live') {
            $(".timelabel").html("Round Time");
        } else if (json.round.phase === 'over') {
            $(".timelabel").html("Round Over");
        }

        $(".time").html(min > 0 ? min + ":" + sec : sec);
        $(".wrap").css('background-color', 'lightblue');
    }

    bombtime -= 0.5;
    roundtime -= 0.5;
}

function flash() {
    $(".wrap").css('background-color', function() {
        this.switch = !this.switch;
        return this.switch ? "red" : "orange";
    });
    /*if (json.extra.round.bomb.planted) {
    	setTimeout(flash, 200);
    }*/
}