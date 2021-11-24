let response; 

const http = new XMLHttpRequest()

http.open("GET", "https://project-apis.codespace.co.za/api/list")
http.send()

http.onload = () => {
    response = http.responseText; 

    const config = {
        el: "#myApp",
        data: response,  
    };
    
    // new Vue(config);
    
    console.log(http.responseText)
}


