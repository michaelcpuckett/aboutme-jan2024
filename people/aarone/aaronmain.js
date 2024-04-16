const favoriteBtn = document.querySelector(".favorite-btn");
const favoriteItems = " I enjoy memes, video games, music, and programming.";
//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
favoriteBtn.addEventListener("click",(e)=>{
    console.log("Hello");
    alert(favoriteItems);
});