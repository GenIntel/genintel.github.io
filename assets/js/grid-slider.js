// Function to initialize image cropping functionality for a given container
function initializeImageCropping(container) {

  console.log('initialize image ');
  const image = container.querySelector('.grid-image');
  const imageContainer = container.querySelector('.grid-image-container');

  const horizontalSlider = container.querySelector('.horizontal-slider');
  const verticalSlider = container.querySelector('.vertical-slider');
  const verticalSliderContainer = container.querySelector('.vertical-slider-container');

  updateCrop();

  //console.log(verticalSliderContainer.clientHeight);

  //await new Promise(r => setTimeout(r, 1000));
  var offsetWidth = parseInt(horizontalSlider.height);
  var offsetHeight = 0.9 * parseInt(imageContainer.height);

  //console.log("horizontal Slider height", offsetWidth);
  //console.log("image Container height", offsetHeight);

  console.log("vertical slider Container height", verticalSliderContainer.offsetHeight);
  console.log("vertical slider Container width", verticalSliderContainer.offsetWidth);

  //verticalSlider.style.width = parseInt(verticalSliderContainer.offsetHeight) + 'px';
  //verticalSlider.style.height = parseInt(verticalSliderContainer.offsetWidth) + 'px';

  // Add event listeners to the sliders
  horizontalSlider.addEventListener('input', updateCrop);
  verticalSlider.addEventListener('input', updateCrop);

// Listen to the window's size changes
  //verticalSliderContainer.addEventListener('onload', checkForChanges);

    //  function checkForChanges() {
    //    console.log("verticalSliderContainer resize event");
    //    verticalSlider.style.width = verticalSliderContainer.offsetWidth + 'px';
    //    verticalSlider.style.height = verticalSliderContainer.offsetHeight + 'px';
    //  }

  // Function to update image crop based on slider values
  function updateCrop() {

    var scale = (parseInt(horizontalSlider.max) + 1.);

    var horizontalValueMin = 100 * parseInt(horizontalSlider.value) / (parseInt(horizontalSlider.max) + 1.);
    var horizontalValueMax = 100 * (parseInt(horizontalSlider.value) + 1.) / (parseInt(horizontalSlider.max) + 1.);

    var verticalValueMax = 100 - 100 * parseInt(verticalSlider.value) / (parseInt(verticalSlider.max) + 1.);
    var verticalValueMin = 100 - 100 * (parseInt(verticalSlider.value) + 1.) / (parseInt(verticalSlider.max) + 1.);

    console.log(horizontalValueMin, horizontalValueMax);
    console.log(verticalValueMin, verticalValueMax);

    image.style.cssText = `clip-path: polygon(${horizontalValueMin}% ${verticalValueMin}%, ${horizontalValueMax}% ${verticalValueMin}%, ${horizontalValueMax}% ${verticalValueMax}%, ${horizontalValueMin}% ${verticalValueMax}%);`;
    image.style.transform = `scale(${scale * 100}%) translate(${(scale-1.) / (scale) * 50}%, ${(scale-1.)/ (scale) * 50}%) translate(-${horizontalValueMin}%, -${verticalValueMin}%)`; // You can adjust the percentage values as per your requirement

  }


}


console.log('initialize');

// Get all image cropping containers
const imageCroppingContainers = document.querySelectorAll('.grid-image-and-sliders');

imageCroppingContainers.forEach(container => {
  initializeImageCropping(container);
});



//
//const imageVerticalSliderContainers = document.querySelectorAll('.vertical-slider-container');
//imageVerticalSliderContainers.forEach(function(container) {
//    const verticalSlider = container.querySelector('.vertical-slider');
//
//    var containerWidth =
//    var containerHeight = container.clientHeight;
//
//    verticalSlider.style.width = containerHeight + 'px';
//    verticalSlider.style.height = containerWidth + 'px';
//});