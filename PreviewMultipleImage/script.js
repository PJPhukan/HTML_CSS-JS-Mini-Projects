console.log("Multiple Image preview")

let filesInput = document.getElementById('file-input')
let imgContainer = document.getElementById('images')
let numOfFiles = document.getElementById('num-of-files')

filesInput.addEventListener('change',()=>{
    imgContainer.innerHTML='';
    numOfFiles.innerText=`${filesInput.files.length} Files Selected`

    for ( i of filesInput.files) {
        let reader=new FileReader();
        let figure=document.createElement('figure')
        let figCap=document.createElement('figcaption')
        figCap.innerText=i.name;
        figure.appendChild(figCap);
        reader.onload=()=>{
            let img=document.createElement('img')
            img.setAttribute("src",reader.result)
            figure.insertBefore(img,figCap)
            console.log(img.src)
        }
        console.log(reader)
        console.log(figCap)
        console.log(figure)
        imgContainer.appendChild(figure);
        reader.readAsDataURL(i);
    }
    imgContainer.style.padding='10px';
})
