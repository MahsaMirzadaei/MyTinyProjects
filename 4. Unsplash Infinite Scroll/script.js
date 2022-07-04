
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

//unsplash API
const count = 7;
const apiKey = 'o-LcxrpIV6Si3dTsugmZMxDeTajdA24g4ym5HRwRFaM';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=portrait`;

// check if all image loaded
function imageLoaded(){
    imagesLoaded++;
    if (imagesLoaded === totalImages){
        loader.hidden = true;
        ready = true;
        const count = 30;
    }
}

const setAttribute = (element,attributes)=>{
    for(const key in attributes){
        element.setAttribute(key,attributes[key]);
    };
};
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;

    photosArray.forEach((photo)=>{
        // creat a element
        const item = document.createElement('a');
        setAttribute(item,{
            herf:photo.links.html,
            target:'_blanck',
        });
        // creat img element
        const img = document.createElement('img');
        setAttribute(img,{
            alt:photo.alt_description,
            src:photo.urls.regular,
            title:photo.alt_description
        });
        img.addEventListener('load',imageLoaded);
        // put img into a and both in imgcontainer
        item.appendChild(img);
        imageContainer.appendChild(item);
        
    });
};

// get photos from unsplash
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }catch(error){
        //catch error
    }
}

// LOAD MORE photo
window.addEventListener('scroll',()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        getPhotos();
    }
});
getPhotos();