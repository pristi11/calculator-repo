const button=document.querySelector('button')
//let create result div in js
let resultdiv=document.createElement('div')
//give result div id and it also helps to style on css
resultdiv.id ='result'
//we can also style others in js like
//resultdiv.style.background
//next tell where you want to store resultdiv
document.getElementById('wrapper').appendChild(resultdiv)


//one problem is there if we give it down it shows on inspect many result div.so add it front

//event listener
button.addEventListener('click',displaystats)
function displaystats(){
   // console.log("clicked")//its for checking the button that it was clicked
    const input=document.getElementById('input')
   let city = input.options[input.selectedIndex].value
   let population=0, language='',literacyrate=0
   switch(city) {
    case 'vellore':
    population=601000
    language='tamil'
    literacyrate=87.7
    break
    case 'chennai':
      population=4646732
      language='tamil'
      literacyrate=90.9
      break
      case 'pondicherry':
        population=898000
        language='tamil'
        literacyrate=85.12
        break
        case 'ranipet':
          population=387000
          language='tamil'
          literacyrate=86.42
          //if u want default u can add it down
   }
 let text=`the indian city of ${city} has a population of ${population}.language spoken is ${language} and literacy rate is ${literacyrate}`
console.log(text)
//showing test on result ,add another document
document.getElementById('result').innerHTML=text




  }