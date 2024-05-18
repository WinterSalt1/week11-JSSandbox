const myButton = document.querySelector('button');
const image = document.querySelector('img')
const images = ["golf1.jpg", "golf2.jpg", "golf3.jpg", "golf4.jpg" ];

myButton.addEventListener('click', changeImage);

function changeImage (){
    
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "images/" + images[randomIndex] ;

}