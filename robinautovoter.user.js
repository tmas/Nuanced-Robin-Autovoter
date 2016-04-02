// ==UserScript==
// @name         Build a Ladder in Robin
// @namespace    http://compileand.run
// @version      1.0
// @description  Autovotes via text on /robin
// @author       /u/tmaspoopdek (based on code by /u/keythkatz)
// @match        https://www.reddit.com/robin*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function sendMessage(message){
    $("#robinSendMessage > input[type='text']").val(message);
    $("#robinSendMessage > input[type='submit']").click();
}

setTimeout(function(){
    sendMessage("╠═══╣Lets build a ladder╠═══╣");
}, 5000);
