var io = io();
var json;

var icons = {
    c75z:               "http://vignette1.wikia.nocookie.net/cswikia/images/c/cf/C75a_hud_csgo.png",
    deagle:             "http://vignette1.wikia.nocookie.net/cswikia/images/7/7d/Deagle_hud_go.png",
    elites:             "http://vignette1.wikia.nocookie.net/cswikia/images/8/82/Elite_hud_csgo.png",
    fiveseven:          "http://vignette1.wikia.nocookie.net/cswikia/images/9/9c/Fiveseven_hud_csgo.png",
    glock:              "http://vignette1.wikia.nocookie.net/cswikia/images/3/33/Glock18_hud_csgo.png",
    p250:               "http://vignette1.wikia.nocookie.net/cswikia/images/5/57/P250_hud.png",
    hkp2000:            "http://vignette1.wikia.nocookie.net/cswikia/images/6/67/Hkp2000_hud.png",
    tec9:               "http://vignette1.wikia.nocookie.net/cswikia/images/5/55/Tec9_hud_csgo.png",
    usp_silencer:       "http://vignette1.wikia.nocookie.net/cswikia/images/7/73/Usps_hud_csgo.png",
    mag7:               "http://vignette1.wikia.nocookie.net/cswikia/images/2/2e/Mag7_hud_csgo.png",
    nova:               "http://vignette1.wikia.nocookie.net/cswikia/images/c/c8/Nova_hud_csgo.png",
    sawedoff:           "http://vignette1.wikia.nocookie.net/cswikia/images/9/94/Sawedoff_hud_csgo.png",
    xm1014:             "http://vignette1.wikia.nocookie.net/cswikia/images/a/ad/Xm1014_hud_csgo.png",
    mac10:              "http://vignette1.wikia.nocookie.net/cswikia/images/f/f7/Mac10_hud_csgo.png",
    mp7:                "http://vignette1.wikia.nocookie.net/cswikia/images/8/8d/Mp7_hud_csgo.png",
    mp9:                "http://vignette1.wikia.nocookie.net/cswikia/images/1/14/Mp9_hud_csgo.png",
    p90:                "http://vignette1.wikia.nocookie.net/cswikia/images/b/bd/P90_hud_csgo.png",
    bizon:              "http://vignette1.wikia.nocookie.net/cswikia/images/d/d5/Bizon_hud_csgo.png",
    upm45:              "http://vignette1.wikia.nocookie.net/cswikia/images/c/c4/Ump45_hud_csgo.png",
    ak47:               "http://vignette1.wikia.nocookie.net/cswikia/images/7/76/Ak47_hud_csgo.png",
    aug:                "http://vignette1.wikia.nocookie.net/cswikia/images/6/6f/Aug_hud_csgo.png",
    famas:              "http://vignette1.wikia.nocookie.net/cswikia/images/8/8f/Famas_hud_csgo.png",
    galilar:            "http://vignette1.wikia.nocookie.net/cswikia/images/4/4a/Galilar_hud.png",
    m4a1_silencer:      "http://vignette1.wikia.nocookie.net/cswikia/images/4/4f/M4a1s_hud_csgo.png",
    m4a4:               "http://vignette1.wikia.nocookie.net/cswikia/images/d/d9/M4a4_hud.png",
    sg556:              "http://vignette1.wikia.nocookie.net/cswikia/images/9/9b/Sg556_hud_csgo.png",
    awp:                "http://vignette1.wikia.nocookie.net/cswikia/images/e/eb/Awp_hud_csgo.png",
    g3sg1:              "http://vignette1.wikia.nocookie.net/cswikia/images/4/4a/G3sg1_hud_csgo.png",
    ssg08:              "http://vignette1.wikia.nocookie.net/cswikia/images/3/3c/Ssg08_hud_csgo.png",
    scar20:             "http://vignette1.wikia.nocookie.net/cswikia/images/c/c9/Scar20_hud_csgo.png",
    m249:               "http://vignette1.wikia.nocookie.net/cswikia/images/e/ea/M249_hud_csgo.png",
    negev:              "http://vignette1.wikia.nocookie.net/cswikia/images/b/be/Negev_hud.png",
    
    c4:                 "http://vignette1.wikia.nocookie.net/cswikia/images/f/fc/C4_ticking_source.png",
    hegrenade:          "http://vignette1.wikia.nocookie.net/cswikia/images/6/60/Ammo_hegrenade_css.png",
    molotov:            "http://vignette1.wikia.nocookie.net/cswikia/images/f/fc/Molotov_hud_csgo.png",
    flashbang:          "http://vignette1.wikia.nocookie.net/cswikia/images/a/af/Flashbang_hud_csgo.png",
    decoy:              "http://vignette1.wikia.nocookie.net/cswikia/images/7/78/Decoy_hud.png",
    smokegrenade:       "http://vignette1.wikia.nocookie.net/cswikia/images/4/48/Smokegrenade_hud_csgo.png",
    incgrenade:         "http://vignette1.wikia.nocookie.net/cswikia/images/4/45/Incgrenade_hud_csgo.png",
    
    knife:              "http://vignette1.wikia.nocookie.net/cswikia/images/b/b9/Inventory_icon_weapon_knife.png",
    knife_t:            "http://vignette1.wikia.nocookie.net/cswikia/images/a/ac/Inventory_icon_weapon_knife_t.png",
    knife_bayonet:      "http://vignette1.wikia.nocookie.net/cswikia/images/2/28/Csgo_knife_Bayonet.png",
    knife_butterfly:    "http://vignette1.wikia.nocookie.net/cswikia/images/d/df/Knife_butterfly_hud_outline_csgo.png",
    knife_falchion:     "http://vignette1.wikia.nocookie.net/cswikia/images/7/7e/Falchion_Knife_hud_outline_csgo.png",
    knife_flip:         "http://vignette1.wikia.nocookie.net/cswikia/images/a/a4/Knife_flip_hud_outline_csgo.png",
    knife_gut:          "http://vignette1.wikia.nocookie.net/cswikia/images/f/ff/Knife_gut_hud_outline_csgo.png",
    knife_huntsman:     "http://vignette1.wikia.nocookie.net/cswikia/images/5/53/Knife_hustman_hud_outline_csgo.png",
    knife_karambit:     "http://vignette1.wikia.nocookie.net/cswikia/images/5/57/Knife_karambit_hud_outline_csgo.png",
    knife_m9bayonet:    "http://vignette1.wikia.nocookie.net/cswikia/images/d/d3/Csgo_knife_M9_Bayonet.png",
    knife_shadowdagger: "http://vignette1.wikia.nocookie.net/cswikia/images/f/f1/Knife_push_hud_outline_csgo.png"
    
}


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
    console.log(json.player.name);
    $(".name").html(json.player.name);
    
    roundtime = parseInt(json.extra.round.time);
    bombtime = parseInt(json.extra.round.bomb.time);

    interval = setInterval(timer, 500);
    
    updateWeapons();

});

function updateWeapons() {
    var html = "";
    var g = 1;
    $("td.pic").html("");
    $("td.ammo").html("");
    for (var key in json.player.weapons) {
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
                g++;
            }
            else
                clazz = ".rifle";
            $(clazz + " td.pic").html("<img src='" + icons[name] + "'>");
            $(clazz + " td.ammo").html(weapon.ammo_clip+ "/" + weapon.ammo_reserve);
            $(clazz + " td.reload").html(weapon.ammo_clip < 7 ? "Reload" : "");

        }
    }
}


var flashing = false;

function timer() {
    var intbomb = parseInt(bombtime);
    var inttime = parseInt(roundtime);

    if (json.extra.round.bomb.planted) {
        $(".time").html(intbomb);
        $(".time").css("font-size", "15em");
        $(".timelabel").html("Bomb Planted");

        if (bombtime <= 0) {
            flashing = false;
            $(".time").html("BOOM!");
        } else if (bombtime <= 5) {
            flash();
        } else if (bombtime <= 10) {
            $("body").css('background-color', "red");   
        } else {
            $("body").css('background-color', 'Green');
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

        $(".time").css("font-size", "7em");

        if (json.round.phase === 'freezetime') {
            $(".timelabel").html("Freeze Time");
        } else if (json.round.phase === 'live') {
            $(".timelabel").html("Round Time");
        } else if (json.round.phase === 'over') {
            $(".timelabel").html("Round Over");
        }

        $(".time").html(min > 0 ? min + ":" + sec : sec);
        $("body").css('background-color', 'white');
    }

    bombtime -= 0.5;
    roundtime -= 0.5;
}

function flash() {
    $("body").css('background-color', function() {
        this.switch = !this.switch;
        return this.switch ? "red" : "orange";
    });
    /*if (json.extra.round.bomb.planted) {
    	setTimeout(flash, 200);
    }*/
}
