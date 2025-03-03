function clickingfun(i){
    let currentUrl = window.location.href;

    let path = window.location.pathname;

    // Get the part before the last '/'
    let preURL = path.substring(0, path.lastIndexOf('/'));

    console.log(preURL);
    let newurl = "";
    // Example: Update an element's text with the modified value
    if(i == 1){
        newurl = "index.html";
    }else if(i== 7){
        newurl = "ContactUs.html";
    }else if(i== 3){
        newurl = "Locations.html";
    }else if(i== 2){
        newurl = "AboutUs.html";
    }else if(i== 4){
        newurl = "tournamentsfinal.html";
    }else if(i== 6){
        newurl = "blackbeltholders.html";
    }else if(i == 10){
        newurl = "Login.html";
    }
    window.open(preURL+'/'+newurl, "_self");
}