const ul=document.querySelector('ul')

const animation=document.querySelector('#animation')
const classic=document.querySelector('#classic')
const comedy=document.querySelector('#comedy')
const drama=document.querySelector('#drama')
const horror=document.querySelector('#horror')
const family=document.querySelector('#family')
const mystery=document.querySelector('#mystery')
const western=document.querySelector('#western')


const animationUrl='https://api.sampleapis.com/movies/animation'
const classicUrl='https://api.sampleapis.com/movies/classic'
const comedyUrl='https://api.sampleapis.com/movies/comedy'
const dramaUrl='https://api.sampleapis.com/movies/drama'
const horrorUrl='https://api.sampleapis.com/movies/horror'
const familyUrl='https://api.sampleapis.com/movies/family'
const mysteryUrl='https://api.sampleapis.com/movies/mystery'
const westernUrl='https://api.sampleapis.com/movies/western'




function ShowAnimation() {
    fetch(animationUrl)
    .then(res=>res.json())
    .then(data=>{
         console.log(data);
         ShowUssers(data)
    })
}

animation.onclick=()=>{
    ShowAnimation()
}


function ShowClassic() {
    fetch(classicUrl)
    .then(res=>res.json())
    .then(data=>{
         console.log(data);
         ShowUssers(data)
    })
}

classic.onclick=()=>{
    ShowClassic()
}


function ShowComedy() {
    fetch(comedyUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        ShowUssers(data)
    })
}

comedy.onclick=()=>{
    ShowComedy()
}


function ShowDrama() {
    fetch(dramaUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        ShowUssers(data)
    })
}

drama.onclick=()=>{
    ShowDrama()
}


function ShowHorror() {
    fetch(horrorUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        ShowUssers(data)
    })
}
horror.onclick=()=>{
    ShowHorror()
}


function ShowFamily() {
    fetch(familyUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        ShowUssers(data)
    })
}

family.onclick=()=>{
    ShowFamily()
}


function ShowMystery() {
    fetch(mysteryUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        ShowUssers(data)
    })
}

mystery.onclick=()=>{
    ShowMystery()

}




function ShowWestern() {
    fetch(westernUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        ShowUssers(data)
    })
}
western.onclick=()=>{
    ShowWestern()
}



function ShowUssers(arr) {
    ul.innerHTML=''
    for (const user of arr) {
        ul.innerHTML+=`
        <li>
        
        <img  src="${user.posterURL}" />
        <h3>Name: ${ user.title}</h3>
        </li>
        `
    }
}