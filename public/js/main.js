var io = io();
var json;

var icons = {
    c75za: "http://vignette3.wikia.nocookie.net/cswikia/images/c/cf/C75a_hud_csgo.png/revision/latest/scale-to-width-down/400",
    deagle: "http://vignette2.wikia.nocookie.net/cswikia/images/7/7d/Deagle_hud_go.png/revision/latest/scale-to-width-down/400",
    elite: "http://vignette2.wikia.nocookie.net/cswikia/images/8/82/Elite_hud_csgo.png/revision/latest/scale-to-width-down/400",
    fiveseven: "http://vignette2.wikia.nocookie.net/cswikia/images/9/9c/Fiveseven_hud_csgo.png/revision/latest/scale-to-width-down/400",
    glock: "http://vignette2.wikia.nocookie.net/cswikia/images/3/33/Glock18_hud_csgo.png/revision/latest/scale-to-width-down/400",
    p250: "http://vignette2.wikia.nocookie.net/cswikia/images/5/57/P250_hud.png/revision/latest/scale-to-width-down/400",
    hkp2000: "http://vignette1.wikia.nocookie.net/cswikia/images/6/67/Hkp2000_hud.png/revision/latest/scale-to-width-down/400",
    tec9: "http://vignette3.wikia.nocookie.net/cswikia/images/5/55/Tec9_hud_csgo.png/revision/latest/scale-to-width-down/400",
    usp_silencer: "http://vignette2.wikia.nocookie.net/cswikia/images/7/73/Usps_hud_csgo.png/revision/latest/scale-to-width-down/400",
    mag7: "http://vignette2.wikia.nocookie.net/cswikia/images/2/2e/Mag7_hud_csgo.png/revision/latest/scale-to-width-down/400",
    revolver: "http://vignette2.wikia.nocookie.net/cswikia/images/7/7d/Deagle_hud_go.png/revision/latest/scale-to-width-down/400",
    nova: "http://vignette4.wikia.nocookie.net/cswikia/images/c/c8/Nova_hud_csgo.png/revision/latest/scale-to-width-down/400",
    sawedoff: "http://vignette1.wikia.nocookie.net/cswikia/images/9/94/Sawedoff_hud_csgo.png/revision/latest/scale-to-width-down/400",
    xm1014: "http://vignette2.wikia.nocookie.net/cswikia/images/a/ad/Xm1014_hud_csgo.png/revision/latest/scale-to-width-down/400",
    mac10: "http://vignette2.wikia.nocookie.net/cswikia/images/f/f7/Mac10_hud_csgo.png/revision/latest/scale-to-width-down/400",
    mp7: "http://vignette4.wikia.nocookie.net/cswikia/images/8/8d/Mp7_hud_csgo.png/revision/latest/scale-to-width-down/400",
    mp9: "http://vignette2.wikia.nocookie.net/cswikia/images/1/14/Mp9_hud_csgo.png/revision/latest/scale-to-width-down/400",
    p90: "http://vignette3.wikia.nocookie.net/cswikia/images/b/bd/P90_hud_csgo.png/revision/latest/scale-to-width-down/400",
    bizon: "http://vignette1.wikia.nocookie.net/cswikia/images/d/d5/Bizon_hud_csgo.png/revision/latest/scale-to-width-down/400",
    ump45: "http://vignette3.wikia.nocookie.net/cswikia/images/c/c4/Ump45_hud_csgo.png/revision/latest/scale-to-width-down/400",
    ak47: "http://vignette1.wikia.nocookie.net/cswikia/images/7/76/Ak47_hud_csgo.png/revision/latest/scale-to-width-down/400",
    aug: "http://vignette2.wikia.nocookie.net/cswikia/images/6/6f/Aug_hud_csgo.png/revision/latest/scale-to-width-down/400",
    famas: "http://vignette2.wikia.nocookie.net/cswikia/images/8/8f/Famas_hud_csgo.png/revision/latest/scale-to-width-down/400",
    galilar: "http://vignette1.wikia.nocookie.net/cswikia/images/4/4a/Galilar_hud.png/revision/latest/scale-to-width-down/400",
    m4a1_silencer: "http://vignette3.wikia.nocookie.net/cswikia/images/4/4f/M4a1s_hud_csgo.png/revision/latest/scale-to-width-down/400",
    m4a1: "http://vignette2.wikia.nocookie.net/cswikia/images/d/d9/M4a4_hud.png/revision/latest/scale-to-width-down/400",
    sg556: "http://vignette1.wikia.nocookie.net/cswikia/images/9/9b/Sg556_hud_csgo.png/revision/latest/scale-to-width-down/400",
    awp: "http://vignette3.wikia.nocookie.net/cswikia/images/e/eb/Awp_hud_csgo.png/revision/latest/scale-to-width-down/400",
    g3sg1: "http://vignette4.wikia.nocookie.net/cswikia/images/4/4a/G3sg1_hud_csgo.png/revision/latest/scale-to-width-down/400",
    ssg08: "http://vignette4.wikia.nocookie.net/cswikia/images/3/3c/Ssg08_hud_csgo.png/revision/latest/scale-to-width-down/400",
    scar20: "http://vignette4.wikia.nocookie.net/cswikia/images/c/c9/Scar20_hud_csgo.png/revision/latest/scale-to-width-down/400",
    m249: "http://vignette2.wikia.nocookie.net/cswikia/images/e/ea/M249_hud_csgo.png/revision/latest/scale-to-width-down/400",
    negev: "http://vignette2.wikia.nocookie.net/cswikia/images/b/be/Negev_hud.png/revision/latest/scale-to-width-down/400",

    c4: "http://vignette1.wikia.nocookie.net/cswikia/images/f/fc/C4_ticking_source.png/revision/latest/scale-to-width-down/400",
    hegrenade: "http://vignette1.wikia.nocookie.net/cswikia/images/6/60/Ammo_hegrenade_css.png/revision/latest/scale-to-width-down/400",
    molotov: "http://vignette3.wikia.nocookie.net/cswikia/images/f/fc/Molotov_hud_csgo.png/revision/latest/scale-to-width-down/400",
    flashbang: "http://vignette2.wikia.nocookie.net/cswikia/images/a/af/Flashbang_hud_csgo.png/revision/latest/scale-to-width-down/400",
    decoy: "http://vignette1.wikia.nocookie.net/cswikia/images/7/78/Decoy_hud.png/revision/latest/scale-to-width-down/400",
    smokegrenade: "http://vignette3.wikia.nocookie.net/cswikia/images/4/48/Smokegrenade_hud_csgo.png/revision/latest/scale-to-width-down/400",
    incgrenade: "http://vignette2.wikia.nocookie.net/cswikia/images/4/45/Incgrenade_hud_csgo.png/revision/latest/scale-to-width-down/400",

    knife: "http://vignette2.wikia.nocookie.net/cswikia/images/4/4b/Knife_ct_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
    knife_t: "http://vignette3.wikia.nocookie.net/cswikia/images/2/28/Knife_t_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
    knife_bayonet: "http://vignette2.wikia.nocookie.net/cswikia/images/2/28/Csgo_knife_Bayonet.png/revision/latest/scale-to-width-down/400",
    knife_butterfly: "http://vignette2.wikia.nocookie.net/cswikia/images/d/df/Knife_butterfly_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
    knife_falchion: "http://vignette4.wikia.nocookie.net/cswikia/images/7/7e/Falchion_Knife_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
    knife_flip: "http://vignette3.wikia.nocookie.net/cswikia/images/a/a4/Knife_flip_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
    knife_gut: "http://vignette2.wikia.nocookie.net/cswikia/images/f/ff/Knife_gut_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
    knife_tactical: "http://vignette2.wikia.nocookie.net/cswikia/images/5/53/Knife_hustman_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
    knife_karambit: "http://vignette4.wikia.nocookie.net/cswikia/images/5/57/Knife_karambit_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
    knife_m9_bayonet: "http://vignette4.wikia.nocookie.net/cswikia/images/d/d3/Csgo_knife_M9_Bayonet.png/revision/latest/scale-to-width-down/400",
    knife_shadow_dagger: "http://vignette4.wikia.nocookie.net/cswikia/images/f/f1/Knife_push_hud_outline_csgo.png/revision/latest/scale-to-width-down/400"

}


var tickinterval;

var roundtime = 0;
var bombtime = 0;

io.on("update", function(status) {
    json = JSON.parse(status);
    if (typeof json.extra == "undefined") return;

    $(".t-score").html(json.map.team_t.score);
    $(".ct-score").html(json.map.team_ct.score);

    $(".name").html(json.player.name);

    roundtime = json.extra.round.timestart;
    bombtime = json.extra.round.bomb.timestart;

    updateWeapons();

    if(!tickinterval) {
        tickinterval = setInterval(tick, 300);
    }

});


function updateWeapons() {
    var html = "";
    var g = 1;

    $("td.pic").html("");
    $("td.ammo").html("");

    for (var key in json.player.weapons) {
        var gren = false;
        if (json.player.weapons.hasOwnProperty(key)) {
            var weapon = json.player.weapons[key];
            var name = weapon.name.replace("weapon_", "");
            console.log(weapon);
            var type = weapon.type.toLowerCase();
            var clazz = ".rifle";
            if(type === "pistol")
                clazz = ".pistol";
            else if(type === "c4")
                clazz = ".c4";
            else if(type === "knife")
                clazz = ".knife";
            else if(type === "grenade") {
                clazz = ".g" + g;
                gren = true;
                g++;
            }
            else
                clazz = ".rifle";

            $(clazz + " td.pic").html("<img src='" + icons[name] + "'>");
            if(gren) {
                if(weapon.ammo_reserve > 1) {
                        $(clazz + " td.ammo").html("x"+weapon.ammo_reserve);
                }
            } else {
                $(clazz + " td.ammo").html(weapon.ammo_clip+ "/" + weapon.ammo_reserve);
            }
            $(clazz + " td.reload").html(weapon.ammo_clip < 7 ? "Reload" : "");

        }
    }
}


var flashing = false;

function tick() {
    if (typeof json.extra == "undefined") return;

    var btime = json.extra.round.bomb.maxTime - parseInt(new Date().getTime() / 1000 - bombtime);
    var rtime = json.extra.round.maxTime - parseInt(new Date().getTime() / 1000 - roundtime);

    if (json.extra.round.bomb.planted) {
        $(".time").html(btime);
        $(".time").css("font-size", "15em");
        $(".timelabel").html("Bomb Planted");

        if (btime < 0) {
            flashing = false;
        } else if (btime <= 5) {
            flash();
        } else if (btime <= 10) {
            $(".color").css('background-color', "red");
        } else {
            $(".color").css('background-color', 'orange');
        }
    } else {
        var min = 0;
        var sec = 0;

        if (rtime > 59) {
            min = 1;
            sec = rtime - 59;
        } else {
            sec = rtime;
        }

        $(".time").css("font-size", "7em");

        if (json.round.phase === 'freezetime') {
            $(".timelabel").html("Freeze Time");
        } else if (json.round.phase === 'live') {
            $(".timelabel").html("Round Time");
        } else if (json.round.phase === 'over') {
            $(".timelabel").html("Round Over");
        }

        $(".time").html(min > 0 ? min + ":" + sec : sec);
        $(".color").css('background-color', 'lightblue');
    }
}

function flash() {
    $(".color").css('background-color', function() {
        this.switch = !this.switch;
        return this.switch ? "red" : "orange";
    });
    /*if (json.extra.round.bomb.planted) {
    	setTimeout(flash, 200);
    }*/
}
