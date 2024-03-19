let camera = document.getElementById('camera')
let result = document.getElementById('result')
let btn = document.getElementById('btn')

//load webcam
Webcam.set({
    width: 400,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
})

Webcam.attach('#camera')


btn.addEventListener('click', (() => {
    Webcam.snap((data_uri) => {
        result.innerHTML = '<img src="' + data_uri + '"/>';
    })
}))