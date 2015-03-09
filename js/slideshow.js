var slideimages = new Array(); // create new array to preload images
slideimages[0] = new Image(); // create new instance of image object
slideimages[0].src = "images/slideshow/1.jpg"; // set image src property to image path, preloading image in the process
slideimages[1] = new Image();
slideimages[1].src = "images/slideshow/2.jpg";
slideimages[2] = new Image();
slideimages[2].src = "images/slideshow/3.jpg";

//variable that will increment through the images
var step = 0;

function slideit() {
    //if browser does not support the image object, exit.
    if (!document.images)
        return;
    document.getElementById('slide').src = slideimages[step].src;
    if (step < 2)
        step++;
    else
        step = 0;
    //call function "slideit()" every 2.5 seconds
    setTimeout("slideit()", 2500);
}

slideit();


