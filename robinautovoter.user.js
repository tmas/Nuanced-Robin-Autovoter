// ==UserScript==
// @name         Robin Autovoter
// @namespace    http://compileand.run
// @version      1.9-mod
// @description  Autovotes via text on /robin
// @author       /u/keythkatz with modifications by /u/tmaspoopdek
// @match        https://www.reddit.com/robin*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';
var use_stay_cutoff = true; // Should the bot start voting stay after the room reaches stay_cutoff participants?
var stay_cutoff = 100; // The number of participants at which the bot should start voting stay

function sendMessage(message){
    $("#robinSendMessage > input[type='text']").val(message);
    $("#robinSendMessage > input[type='submit']").click();
}

setTimeout(function(){
    var participants = $(".robin-room-participant").length;
    var partiText = "";
    if (participants == 200) partiText = 200 + " " + $(".robin-user-list-overflow-indicator").text();
    else partiText = participants;
    
    var advChance = 0.8 / participants;
    
    if (!use_stay_cutoff || participants < stay_cutoff) {
        sendMessage("/vote grow");
        if(Math.random() < advChance) sendMessage("[Robin Autovoter 1.9-mod] Autovoted grow! https://www.reddit.com/r/joinrobin/comments/4cx02w/better_working_automatic_grow_script/d1mhlzo");
    } else {
        sendMessage("/vote stay");
        if(Math.random() < advChance) sendMessage("[Robin Autovoter 1.9-mod] Autovoted stay because participant count >= " + stay_cutoff + ". https://www.reddit.com/r/joinrobin/comments/4cx02w/better_working_automatic_grow_script/d1mhlzo");
    }
    setTimeout(function(){if(Math.random() < (4.0 / participants)) sendMessage("[Robin Autovoter 1.9-mod] " + partiText + " in this room! " + $("span:contains('Voting will end')").first().text());}, 10000);
    setTimeout(function(){
        window.location.reload();
    }, 300000);
}, 5000);
