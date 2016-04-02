// ==UserScript==
// @name         Build a Ladder in Robin
// @namespace    http://compileand.run
// @version      1.2
// @description  Autovotes via text on /robin
// @author       /u/tmaspoopdek (based on code by /u/keythkatz)
// @match        https://www.reddit.com/robin*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function sendMessage2(message){
    $("#robinSendMessage > input[type='text']").val(message);
    $("#robinSendMessage > input[type='submit']").click();
}

setInterval(function(){
    sendMessage2("╠═══╣Lets build a ladder╠═══╣     Want the bot? https://goo.gl/oUKmTK");
}, 5000);
