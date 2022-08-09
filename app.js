var searchField=document.getElementById("search-field");
var searchBtn1a=document.getElementById("search-btn-1");
var searchBtn2b=document.getElementById("search-btn-2");

function searchBtn1(){
    searchBtn1a.style.display="none";
    searchBtn2b.style.display="block";
    searchField.style.width="200px";
    searchField.style.paddingLeft="10px";
}
searchField.addEventListener("keypress",function(){
    searchField.style.width="200px";
    if(searchField.style.width==="200px"){
        searchField.style.textAlign="center";
        searchField.style.paddingLeft="3px";
        setTimeout(function(){
            searchField.style.width="0px";
            searchBtn1a.style.display="block";
            searchBtn2b.style.display="none";
       }, 10000);
    
    }
})
