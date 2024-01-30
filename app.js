let menubtn = document.querySelector('.menu')
let nav = document.getElementById('nav')
let navitem = document.querySelector('.nav-item')
let btncontainer = document.querySelector('.nav-slider')
let navbtns = document.querySelectorAll('.nav-btn')
let videos = document.querySelectorAll('.video-slid')
let contents = document.querySelectorAll('.contnt')















menubtn.addEventListener('click', menu )

function menu(){
    if (menubtn.classList.contains('fa-bars')) {
        menubtn.classList.remove('fa-bars')
        menubtn.classList.add('fa-xmark')

        

        nav.classList.add('active')
        navitem.classList.add('active')
    } else {
        menubtn.classList.remove('fa-xmark')
        menubtn.classList.add('fa-bars')
        nav.classList.remove('active')
        navitem.classList.remove('active')
    }
}




function slider(x){

    navbtns.forEach(navbtn => {
        navbtn.classList.remove('active')
    });
    navbtns[x].classList.add('active')

    videos.forEach(video=>{
        video.classList.remove('active')
    })
    videos[x].classList.add('active')

    contents.forEach(content =>{
        content.classList.remove('active')
    })
    contents[x].classList.add('active')

}







navbtns.forEach((navbtn,i)=>{
    navbtn.addEventListener('click',()=>{
        slider(i)
    } )
})