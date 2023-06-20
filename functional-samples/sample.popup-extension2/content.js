console.log("side-panel script loaded");


chrome.runtime.onMessage.addListener(function(msg, sender){
    if(msg == "toggle"){
        console.log("message received");
        toggle();
    }
})


var iframe = document.createElement('iframe'); 
iframe.style.background = "green";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.style.border = "0px"; 
iframe.src = chrome.runtime.getURL("popup.html")
//iframe.src = "https://www.bing.com/chat"
//param = "?key=dmywSbpKA6Xk2eqL7Qtk9Hs"
//iframe.src = "https://httbin.org/get?{param}"
//iframe.src = "https://jsonviewer.stack.hu/#http://httpbin.org/get?key=1234567"

document.body.appendChild(iframe);

const accessToken = getAccessToken();
//TODO: Access to Tab DOM content
alert (accessToken)

function toggle(){
    if(iframe.style.width == "0px"){
        iframe.style.width="400px";
    }
    else{
        iframe.style.width="0px";
    }
}

function getAccessToken() {

    const resp = fetch("https://chat.openai.com/api/auth/session",
        {
            method: 'GET',
            credentials: 'include'
        }
    )
    credentials: 'include'
    if (resp.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = resp.json();
      } else {
        alert("HTTP-Error: " + resp.status);
      }
    if (!resp.accessToken) {
      throw new Error("UNAUTHORIZED");
    }
    return resp.accessToken;
  }