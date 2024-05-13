let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");
setInterval(() => {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  // let s=d.slice(4,6)
  s1.innerHTML = h;
  s2.innerHTML = m;
  s3.innerHTML = s;
}, 1000);
