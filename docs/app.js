const true_origin="https://myusernameismyusername.github.io",app_location="https://myusernameismyusername.github.io/A-O_documentation_maker/";var ao_loader=document.getElementById("loader"),pageScripts=document.getElementById("app_scripts_container"),pageStyles=document.getElementById("app_styles_container");function loadError(a){throw new URIError("The script "+a.target.src+" didn't load correctly.")}function loadScript(a,b){var c=document.createElement("script");c.onerror=loadError,b&&(c.onload=b),pageScripts.appendChild(c),c.src=app_location+a}function loadStyle(a){var b=document.createElement("link");b.setAttribute("rel","stylesheet"),b.setAttribute("type","text/css"),b.setAttribute("href",app_location+a),pageStyles.appendChild(b)}function finishLoading(){document.body.classList.add("loaded")}function startLoading(){document.body.classList.remove("loaded")}window.onload=function(){true_origin!==window.location.origin&&(console.log("Origin not cool. Mkey? "),window.location.replace(true_origin)),loadScript("/assets/scripts/ao_modal.js",function(){}),loadScript("/assets/scripts/ao_router.js",function(){findCurrentRoute()}),loadStyle("/assets/styles/app.css"),loadStyle("/assets/styles/modal.css")};