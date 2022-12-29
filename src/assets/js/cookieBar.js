/*! * Simple JS plugin for generating a basic cookie consent notice easily * * Copyright (c) 2022 @louisho5 * Under the MIT license. * * @version 1.0.0 */
var cookieBar=function(t){this.options=t,null==this.options&&(this.options={}),null==this.options.selector&&(this.options.selector="#cookieBar"),null==this.options.message&&(this.options.message="By using our site you agree to our use of cookies to give you the best experience on our website."),null==this.options.button&&(this.options.button="GOT IT"),null==this.options.theme&&(this.options.theme="#666"),null==this.options.expire&&(this.options.expire=24);var e=this.options.expire,o=document.querySelector(this.options.selector),i=document.createElement("div");i.classList.add("cc-bar-col"),i.innerHTML=this.options.message,o.appendChild(i);var n=document.createElement("div");n.classList.add("cc-bar-col"),n.innerHTML='<a class="cc-bar-btn" href="#">'+this.options.button+"</a>",o.appendChild(n),window.onload=function(){"accepted"!=a("cc-bar-cookies")&&(o.style.display="flex",o.style.animation="cc-bar-fadeIn 0.5s ease both"),n.querySelector(".cc-bar-btn").addEventListener("click",(function(t){t.preventDefault(),s("cc-bar-cookies","accepted",e),o.style.animation="cc-bar-fadeOut 0.5s ease both",setTimeout((function(){o.style.display="none"}),500)}))};var s=function(t,e,o){var i=new Date;i.setTime(i.getTime()+60*o*60*1e3),document.cookie=t+"="+e+";expires="+i.toUTCString()+";path=/"},a=function(t){var e=document.cookie.match(RegExp("(?:^|;\\s*)"+(t.replace(/([.*+?\^$(){}|\[\]\/\\])/g,"\\$1")+"=([^;]*)")));return e?e[1]:null};document.head.insertAdjacentHTML("beforeend","<style>"+this.options.selector+" {\t\tdisplay: none;\t\tposition: fixed;\t\tleft: 0;\t\tbottom: 0;\t\tz-index: 1;\t\talign-items: center;\t\tflex-direction: row;\t\tjustify-content: space-between;\t\tcolor: black;\t\tbackground-color: white;\t\tfont-family: inherit;\t\tfont-size: 14px;\t\tline-height: 1.5;\t\tpadding: 15px 15px;\t\tmargin: 15px;\t\twidth: calc(100% - 30px);\t\tbox-shadow: 0 -1px 10px 0 rgba(170, 170, 170, 0.3);\t\tbox-sizing: border-box;\t\tborder: 3px solid "+this.options.theme+";\t\tborder-radius: 7px;\t}"+this.options.selector+" .cc-bar-col {\t\twidth: auto;\t}"+this.options.selector+" .cc-bar-col .cc-bar-btn {\t\tdisplay: block;\t\tfont-size: 14px;\t\tpadding: 7px 15px;\t\tmargin: 0 0 0 10px;\t\tcolor: white;\t\tbackground-color: "+this.options.theme+";\t\ttext-decoration: none;\t\twhite-space: nowrap;\t\ttext-align: center;\t}\t@keyframes cc-bar-fadeIn {\t\tfrom { opacity:0; transform:translateY(50px); }\t\tto { opacity:1; transform:translateY(0); }\t}\t@keyframes cc-bar-fadeOut {\t\tfrom { opacity:1; transform:translateY(0); }\t\tto { opacity:0; transform:translateY(50px); }\t}\t@media only screen and (max-width: 991px) {"+this.options.selector+" {\t\t\tfont-size: 16px;\t\t\tflex-direction: column;\t\t\tmargin: 0;\t\t\twidth: 100%;\t\t\tborder-radius: 0;\t\t}"+this.options.selector+" .cc-bar-col {\t\t\twidth: 100%;\t\t}"+this.options.selector+" .cc-bar-col .cc-bar-btn {\t\t\tfont-size: 16px;\t\t\tmargin: 10px 0 0 0;\t\t}\t}\t</style>")};