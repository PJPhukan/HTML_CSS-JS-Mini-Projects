console.log("Custom cursor");

let body = document.getElementsByTagName('body')[0]
let cursor=document.getElementsByClassName('cursor')[0]


body.addEventListener('mousemove',(e)=>{
    cursor.style.left=e.x+'px';
    cursor.style.top=e.y+'px';
    cursor.style.opacity=1;
})