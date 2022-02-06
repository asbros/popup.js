const as = {};
 as.stylePopup = function(){
   var sa = '@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");@keyframes AsPopup-popup--animation{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes AsPopup-popup-icon--rotate{to{transform: rotateY(720deg)}}@keyframes AsPopup-toast--shake{0% { transform: translate(1px, 1px) rotate(0deg); }10% { transform: translate(-1px, -2px) rotate(-1deg); }20% { transform: translate(-3px, 0px) rotate(1deg); }30% { transform: translate(3px, 2px) rotate(0deg); }40% { transform: translate(1px, -1px) rotate(1deg); }50% { transform: translate(-1px, 2px) rotate(-1deg); }60% { transform: translate(-3px, 1px) rotate(0deg); }70% { transform: translate(3px, 1px) rotate(-1deg); }80% { transform: translate(-1px, -1px) rotate(1deg); }90% { transform: translate(1px, 2px) rotate(0deg); }100% { transform: translate(1px, -2px) rotate(-1deg); }}@keyframes AsPopup-toast-toast--animation{25%{right: 150px}50%{right: 30px;}75%{right: 40px;}100%{right: 15px;}}.AsPopup-popup-style-class{width: 32em;max-width: 90%;max-height: 95%;background: #fff;padding: 20px 0 20px 0;transform: scale(0);transition: all 0.3s;position: relative;border-radius: 5px;box-sizing: border-box;text-align: center;overflow: auto;animation: AsPopup-popup--animation 1 0.75s forwards;scrollbar-color: #d4aa70 #e4e4e4;scrollbar-width: thin;}.AsPopup-popup-style-class::-webkit-scrollbar {width: 8px;}.AsPopup-popup-style-class::-webkit-scrollbar-track {background-color: #e4e4e4;border-radius: 0px;}.AsPopup-popup-style-class::-webkit-scrollbar-thumb{border-radius: 0px;background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%);box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);}.AsPopup-popup-style-class *{box-sizing: border-box;font-family: "Lato";line-height: normal;}.AsPopup-popup-title-style-class{display: block;text-align: center;font-weight: 600;font-size: 32px;color: rgb(84,84,84);overflow-wrap: break-word;padding: 0 20px 0 20px;}.AsPopup-popup-text-style-class{color: #545454;font-size: 18px;max-height: 70%;word-wrap: break-word;overflow: auto;margin: 1em 1.6em .3em;font-weight: normal;}.AsPopup-popup-overlay-style-class{position: fixed;bottom: 0px;right: 0px;top: 0px;left: 0px;height: 100%;width: 100vw;background: rgba(0,0,0,0.4);display: flex;justify-content: center;align-items: center;transition: all 0.2s;z-index: 999999999999999999999999999;}';
   var sb = '.AsPopup-popup-footer-style-class{display: flex;flex-wrap: wrap;justify-content: center;user-select: none;-ms-user-select: none;padding-top: 6px;}.AsPopup-popup-footer-style-class button{background-color: #7066e0;border: 0;color: #fff;padding: 9px 22px 12px;font-size: 15px;border-radius: 5px;margin-left: 10px;margin-top: 10px;cursor: pointer;display: flex;justify-content: center;align-items: center;transition: all 0.3s;}.AsPopup-popup-footer-style-class button:active{transform: scale(0.8);}.AsPopup-popup-icon-style-class{height: 120px !important;width: 100% !important;user-select: none;-ms-user-select: none;display: flex;justify-content: center;text-align: center;transition: all 1s;animation: AsPopup-popup-icon--rotate 1 2s forwards;font-size: 30px;}.AsPopup-popup-icon-style-class svg{height: auto !important;width: auto !important;fill: auto !important;stroke: auto !important;}.AsPopup-popup-image-style-class{width: 100%;margin-bottom: 10px;}.AsPopup-toast-container-style-class{position: fixed;top: 0;left: 0;width: 100%;display: flex;justify-content: center;flex-direction: column;z-index: -999999999999999999999999999999}.AsPopup-toast-div-style-class{flex-grow: 1;display: flex;justify-content: center;z-index: -9999999999999999999999}.AsPopup-toast-toast-style-class{font-family: "Lato";width: fit-content;position: relative;padding: 6px 15px;background-color: rgba(255,255,255,0.85);margin: 5px;opacity: 0;display: flex;justify-content: center;align-items: center;transition: all 0.5s;border-radius: 5px;box-shadow: rgba(0,0,0,0.2) 0 4px 12px 0;animation: Aspopup-toast--shake 1 1s;z-index: 99999999}';
   if (document.head) {
     document.head.innerHTML += "<style>"+sa+sb+"</style>"
   } else {
     document.documentElement.innerHTML += "<style>"+sa+sb+"</style>";
   }
 }
 as.stylePopup();
 as.popup = function(o){
  var popup = document.createElement("div");
  popup.setAttribute("class","AsPopup-popup-style-class");
  var title = document.createElement("div");
  title.setAttribute("class","AsPopup-popup-title-style-class");
  var html = document.createElement("div");
  html.setAttribute("style","margin-top: 8px; margin-bottom: 5px;");
  var text = document.createElement("div");
  text.setAttribute("class","AsPopup-popup-text-style-class");
  var overlay = document.createElement("div");
  overlay.setAttribute("class","AsPopup-popup-overlay-style-class");
  var closeIcon = document.createElement("button");
  closeIcon.setAttribute("style","position: absolute;top: 0;right: 5px;background: none;border: 0;height: 40px;width: 40px;display: flex;justify-content: center;align-items: center;cursor: pointer;");
  closeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#545454"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>';
  var footer = document.createElement("div");
  footer.setAttribute("class","AsPopup-popup-footer-style-class");
  if(o.color){
   title.style.color = o.color;
   text.style.color = o.color;
  }
  if(o.titleColor){
   title.style.color = o.titleColor;
  }
  if(o.textColor){
   text.style.color = o.textColor;
  }
  if(o.font){
   title.style.fontFamily = o.font;
   text.style.fontFamily = o.font;
   html.style.fontFamily = o.font;
  }
  if(o.position){
   if(o.position == "top"){
    overlay.style.alignItems = "flex-start";
    popup.style.marginTop = "20px";
   }
   if(o.position == "center"){
    overlay.style.alignItems = "center";
    popup.style.marginTop = "0px";
   }
   if(o.position == "bottom"){
    overlay.style.alignItems = "flex-end";
    popup.style.marginBottom = "20px";
   }
  }
  if(o.background){
   popup.style.background = o.background;
  }
  if(o.overlayBackground){
   overlay.style.background = o.overlayBackground;
  }
   var icon = document.createElement("div");
   icon.setAttribute("class","AsPopup-popup-icon-style-class");
  if(o.icon){
    var img = o.icon;
    var h;
    if(img == "success"){
      h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(16,185,129)"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>';
    }else if(img == "error"){
      h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(239,68,68)"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /></svg>';
    }else if(img == "warning"){
      h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(245,158,11)"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>'
    }else if(img == "info"){
        h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#0088ff"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>';
    }else if(img == "question"){
      h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(249,168,212)"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg>';
    }else if(img == "none"){
      h = '';
      icon.style.display = "none";
    }else{
      h = '<img src="'+img+'" style="margin-bottom: 5px;"/>';
    }
    icon.innerHTML = h;
    popup.appendChild(icon);
  }
  if(o.emoji){
    var ico = document.createElement("div");
    ico.setAttribute("style","text-align: center;font-size: 64px  ;margin-bottom: 8px;user-select: none;-ms-user-select: none;");
    ico.innerText = o.emoji;
    popup.appendChild(ico);
  }
  if(o.image){
   var img = document.createElement("img");
   img.setAttribute("src",o.image);
   img.setAttribute("class","AsPopup-popup-image-style-class");
   if (o.imageHeight) {
     img.style.height = o.imageHeight+"px";
   }
   if (o.imageWidth) {
     img.style.width = o.imageWidth+"px";
   }
   popup.appendChild(img);
  }
  if(o.title){
   title.innerText = o.title;
   popup.appendChild(title);
  }
  if(o.text){
   text.innerText = o.text;
   popup.appendChild(text);
  }
  if(o.buttons){
   var btns = o.buttons;
   for(x in btns){
    var b = btns[x];
    var btn = document.createElement("button");
    if(b.html){
    btn.innerHTML = b.html;
    }  
    if(b.color){
     btn.style.color = b.color;
    }
    if(o.font){
     btn.style.fontFamily = o.font;
    }
    if(b.bg){
     btn.style.backgroundColor = b.bg;
    }
    if(b.width){
     btn.style.width = b.width+"px";
    }
    if(b.height){
     btn.style.height = b.height+"px";
    }
    if(b.type){
     var bg;
     if(b.type == "success"){
      bg = "rgb(16,185,129)";
     }else if(b.type == "info"){
       bg = "#0088ff";
     }else if(b.type == "warning"){
       bg = "rgb(245,158,11)";
     }else if(b.type == "error"){
       bg = "#dc3741";
     }else if(b.type == "dark"){
       bg = "#637881";
     }else{
     }
     btn.style.backgroundImage = "none";
     btn.style.backgroundColor = bg;
    }
    if(b.click){
      btn.addEventListener("click",b.click);
    }
    if(b.close != false){
      btn.addEventListener("click", function(){
        close.click();
      });
    }
    footer.appendChild(btn);
   }
  }
  if(o.padding){
   popup.style.padding = o.padding;
  }
  if(o.titleSize){
  title.style.fontSize = o.titleSize;
  }
  if(o.textSize){
  text.style.fontSize = o.textSize;
  }
   var close = document.createElement("button");
   close.innerHTML = "Close";
   if(o.closeBtnHtml){
    close.innerHTML = o.closeBtnHtml;
   }
   close.addEventListener("click", function(){
     overlay.style.opacity = "0";
     overlay.style.visibility = "hidden";
   });
  if(o.closeIcon){
    closeIcon.addEventListener("click",function (){
      close.click();
    });
    popup.appendChild(closeIcon);
    popup.style.paddingTop = "43px";
  }
  if(o.html){
   if(typeof o.html == "object"){
    html.innerHTML = o.html.outerHTML;
    popup.appendChild(html);
   }else{
    html.innerHTML = o.html;
    popup.appendChild(html);
   }
  }
  if(o.script){
    var script = document.createElement("script");
    script.innerText = o.script;
    popup.appendChild(script);
  }
  if(o.closeBtn != false){
   footer.appendChild(close);
  }
  if(o.timer){
    setTimeout(function (){
     close.click();
    },o.timer);
  }
  popup.addEventListener("click",function(event){
    event.stopPropagation();
  });
  overlay.addEventListener("click",function(){
  if(o.overlayClick != false){
    close.click();
  }
  });
  popup.appendChild(footer);
  document.addEventListener("keyup", function(e){
   if (e.keyCode == 27){
     overlay.click();
   }
  });
  overlay.appendChild(popup);
  document.documentElement.appendChild(overlay);
  popup.focus();
 };
 as.alert = function(o){
  var txt,ic,tt;
   if(typeof o == "object"){
    if(o.title){tt = o.title}
    if(o.text){txt = o.text}
    if(o.icon == false){ic = "none";}else{ic = "warning"}
       as.popup({
        title: tt,
        text: txt,
        image: o.image,
        closeBtn: false,
        icon: ic,
        buttons: [{html: "OK",click: o.onOk,type:"success"}],
        overlayClick: false
       });
     }
 }
 as.confirm = function(o){
  var i,cbt,obt;
  if(o.icon == false){i = "none";}else{i = "question"}
  if(o.cancelBtnHtml == undefined || o.cancelBtnHtml.trim() == ""){cbt = "Cancel"}else{cbt = o.cancelBtnHtml;}
  if(o.okBtnHtml == undefined || o.okBtnHtml.trim() == ""){obt = "OK"}else{obt = o.okBtnHtml;}
  as.popup({
    title: o.title,
    text: o.text,
    image: o.image,
    closeBtn: false,
    icon: i,
    image: o.image,
    buttons: [{ html: cbt, click: o.oncancel,type: "error"}, { html: obt, click: o.onconfirm,type: "success"}],
    overlayClick: false
  });
 }
 as.prompt = function(o){
  if(o.value == undefined){o.value = ""}
  if(o.placeholder == undefined){o.placeholder = ""}
  var cbt,obt,cos;
  if(o.closeOnSubmit == false){cos = false}else{cos = true}
  if(o.cancelBtnHtml == undefined || o.cancelBtnHtml.trim() == ""){cbt = "Cancel"}else{cbt = o.cancelBtnHtml;}
  if(o.submitBtnHtml == undefined || o.submitBtnHtml.trim() == ""){obt = "Submit"}else{obt = o.submitBtnHtml;}
  as.popup({
    title: o.title,
    html: "<div><input type='text' style='width: 100%;display: block;padding: 8px 10px;border-radius: 7px;border: 1px solid #000;' id='Aspopup-popup--prompt--input' placeholder='"+o.placeholder+"' value='"+o.value+"'/></div>",
    image: o.image,
    text: o.text,
    overlayClick: false,
    closeBtn: false,
    buttons: [{ html: cbt, click: o.oncancel,type: "error"}, { html: obt, click: function() { o.onsubmit(document.getElementById("Aspopup-popup--prompt--input").value); }, type: "success" , close: cos}]
  });
  document.getElementById("Aspopup-popup--prompt--input").addEventListener("keyup", function(event){
     if(event.keyCode == 13){
      event.preventDefault();
      o.onsubmit(this.value);
      if(cos == true){
      this.parentElement.parentElement.parentElement.style.opacity = "0";
      this.parentElement.parentElement.parentElement.style.visibility = "hidden";
     }
     }
  });
 }
 as.loader = function() {
   var p = document.createElement("div");
   p.setAttribute("class", "AsPopup-popup-style-class");
   p.style.padding = "10px";
   var ov = document.createElement("div");
   ov.setAttribute("class", "AsPopup-popup-overlay-style-class");
   var loader = {};
   loader.hide = function() {
     ov.style.opacity = "0";
     ov.style.visibility = "hidden";
   }
   loader.show = function(o) {
     if (!o) {
       var o = {};
     } else {
       if (typeof o == "string" || typeof o == "number") {
         var t = o;
         o = {};
         o.title = t;
       }
     }
     var d = document.createElement("div");
     d.setAttribute("style", "display: flex;");
     var i = document.createElement("img");
     if (o.icon) {
       i.setAttribute("src", o.icon);
       i.setAttribute("style", "max-width: 75px;max-height: 75px;");
       d.appendChild(i);
     } else {
       d.innerHTML += '<div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background: none;margin-left: 5px;shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" fill="none" stroke="#0088ff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform></circle></svg></div>';
     }
     var s = document.createElement("span");
     s.setAttribute("style", "margin-left: 7px;");
     if (o.title) {
       s.innerText = o.title;
     } else {
       s.innerText = "Loading...";
     }
     var sd = document.createElement("div");
     sd.setAttribute("style", "display: flex;align-items: center;");
     sd.appendChild(s);
     d.appendChild(sd);
     p.appendChild(d);
     ov.appendChild(p);
     document.documentElement.appendChild(ov);
     if (typeof o.timer == "number") {
       if(typeof o.onhide == "function"){
        setTimeout(function (){
          loader.hide();
          o.onhide();
        },o.timer);
       }else{
         setTimeout(loader.hide, o.timer);
       }
     }
   }
   return loader;
 }
 var tc = document.createElement("div");
 tc.setAttribute("class","AsPopup-toast-container-style-class");
 document.documentElement.appendChild(tc);
 as.toaste = function(o){
  var to = document.createElement("div");
  to.setAttribute("class","AsPopup-toast-div-style-class");
  var t = document.createElement("div");
  t.setAttribute("class","AsPopup-toast-toast-style-class");
  var p = document.createElement("span");
  p.setAttribute("style","color: #343a40;user-select: none;-ms-user-select: none;");
  p.innerText = o.text;
  if(o.type){
    var img = o.type.trim();
    var h;
    if(img == "success"){
      h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>';
      b = "rgb(16,185,129)";
    }else if(img == "error"){
      h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /></svg>';
      b = "rgb(239,68,68)";
    }else if(img == "warning"){
      h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>';
      b = "rgb(245,158,11)";
    }else if(img == "info"){
      h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>';
      b = "#0088ff";
    }else if(img == "question"){
      h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg>';
      b = "rgb(249,168,212)";
    }else{
      h = '';
      b = '#fff';
    }
    var icon = document.createElement("div");
    icon.innerHTML = h;
    icon.setAttribute("style","height: 40px;width: 40px;margin-left: -6px;");
    p.style.color = "#fff";
    p.style.marginLeft = "3px";
    t.appendChild(icon);
    t.style.backgroundColor = b;
  }
  /*if(o.position){
    if (o.position == "top-left") {
     to.style.justifyContent = "flex-start";
    }
    if (o.position == "top-center") {
     to.style.justifyContent = "center";
    }
    if (o.position == "top-right") {
     to.style.justifyContent = "flex-end";
    }
    if (o.position == "bottom-left") {
     tc.style.removeProperty("top");
     tc.style.bottom = "0";
     tc.style.alignItems = "flex-start";
    }
    if (o.position == "bottom-center") {
     tc.style.removeProperty("top");
     tc.style.bottom = "0";
     tc.style.alignItems = "center";
    }
    if (o.position == "bottom-right") {
     tc.style.removeProperty("top");
     tc.style.bottom = "0";
     tc.style.alignItems = "flex-end";
    }
  }*/
  if(o.color){
   p.style.color = o.color;
  }
  if(o.background){
   t.style.background = o.background;
  }
  t.appendChild(p);
  to.appendChild(t);
  tc.appendChild(to);
  setTimeout(function(){
    t.style.opacity = 1;
  },1);
  function toff(a){
   setTimeout(function(){
    t.style.opacity = 0;
   },a);
   setTimeout(function(){
    tc.removeChild(to);
   },a+500);
  }
  if(o.click){
   t.addEventListener("click", o.click);
  }
  if(o.url){
   t.style.cursor = "pointer";
   t.addEventListener("click",function(){
   if(o.newWindow){
    window.open(o.url,"_blank");
   }else{
    window.open(o.url,"_self");
   }
   });
  }
  /*if(o.close){
   var c = document.createElement("button");
   var s = document.createElement("svg");
   s.setAttribute("xmlns","http://www.w3.org/2000/svg");
   s.setAttribute("viewBox","0 0 16 16");
   s.setAttribute("fill","#343a40");
   s.innerHTML = '<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />';
   if(o.type){
    s.setAttribute("fill","#fff");
   }
   if(o.color){
    p.style.color = o.color;
    s.setAttribute("fill",o.color);
   }
   c.innerHTML = s.outerHTML;
   c.setAttribute("style","position: absolute;right: 2;top: 0;border: 0;background: none;font-size: 20px;height: 25px;width: 25px;cursor: pointer;");
   p.style.marginRight = "18px";
   c.addEventListener("click", function(){
    toff(1);
   });
   t.appendChild(c);
  }*/
  if(o.clickToClose){
   t.addEventListener("click", function(){
     toff(1);
   });
  }
  if(o.timer){
   toff(o.timer);
  }
 }
 as.toaster = function(o){
  if(o.text){
   var t =  document.createElement("div");
   t.setAttribute("style","width: fit-content;position: fixed;right: -100vw;bottom: 20px;padding: 10px 30px;background: rgb(0,255,0,0.5);animation: AsPopup-toast-toast--animation 1 0.8s forwards;transition: all 0.4s;z-index: 9999999999999999999999999999;");
   t.innerText = o.text;
   document.documentElement.appendChild(t);
   if(o.timer){
    setInterval(function(){t.style.opacity = 0;},o.timer);
   }
  }
 }
 as.toast = function(o){
   if(typeof o == "string"){
     as.toaster({
       text: o
     });
   }else{
     as.toaster(o);
   }
 }
