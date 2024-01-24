let isstatus = document.querySelector('h5')
let btn = document.querySelector('.btn')
let check = 0;
btn.addEventListener('click', () => {
    if (check == 0) {
        isstatus.innerHTML = "Friend"
        isstatus.style.color = "green"
        check=1;
        btn.innerHTML="Remove Friend"
    }
    else{
        isstatus.innerHTML = "Stranger"
        isstatus.style.color = "red"
        check=0;
        btn.innerHTML = "Add Friend"

    }
})