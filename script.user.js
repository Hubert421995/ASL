﻿// ==UserScript==
// @name        Allgemeines Script für Leitstellenspiel NEU
// @namespace   Leitstellenspiel
// @include     http*://www.leitstellenspiel.de/*
// @version     dev
// @author      Eagle
// @grant       none
// ==/UserScript==

var scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "https://lss.hassels.eu/ASL/script.dev.js";
document.body.appendChild(scriptElement);
