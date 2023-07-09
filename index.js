function changeH1Content(newContent) {
    document.getElementsByTagName('h1')[0].innerHTML = 'newContent';
  }

function returnH1Content(oldContent) {
    document.getElementsByTagName('h1')[0].innerHTML = 'Phone Mania'
}
        

function h1Change(){
    document.getElementById('myh1').innerHTML = 'non vuol cambiare'
}

function backgroundColor(){
    document.querySelector('body').style.backgroundColor = 'green'
}

function footerAddress(){
    document.getElementById('address').innerHTML = 'Via piazza strada'
}

const switchClass = function cssSwitch() {
    let tags = document.querySelectorAll('a')
    for (let i = 0; i < tags.length; i++) {
      tags[i].classList.add('newLink')
    }
} 

const toggleImagesClass = function () {
    let images = document.querySelectorAll('img')
    for (let i = 0; i < images.length; i++) {
      const singleImg = images[i]
      singleImg.classList.toggle('hidden')
    }
}





