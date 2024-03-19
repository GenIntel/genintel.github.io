// Function to initialize image cropping functionality for a given container
function initializeImageCropping(container) {

  console.log('initialize image ');
  const image = container.querySelector('.grid-image');
  const imageContainer = container.querySelector('.grid-image-container');

  const horizontalSlider = container.querySelector('.horizontal-slider');
  const verticalSlider = container.querySelector('.vertical-slider');
  const verticalSliderContainer = container.querySelector('.vertical-slider-container');

  updateCrop();

  console.log(verticalSliderContainer.clientHeight);

  //await new Promise(r => setTimeout(r, 1000));
  var offsetWidth = parseInt(horizontalSlider.height);
  var offsetHeight = parseInt(imageContainer.style.height);

  verticalSlider.style.width = offsetHeight + 'px';
  verticalSlider.style.height = offsetWidth + 'px';
  //await new Promise(r => setTimeout(r, 1000));

  // Add event listeners to the sliders
  horizontalSlider.addEventListener('input', updateCrop);
  verticalSlider.addEventListener('input', updateCrop);

  // Function to update image crop based on slider values
  function updateCrop() {

    var horizontalValueMin = 100 * parseInt(horizontalSlider.value) / (parseInt(horizontalSlider.max) + 1.);
    var horizontalValueMax = 100 * (parseInt(horizontalSlider.value) + 1.) / (parseInt(horizontalSlider.max) + 1.);

    var verticalValueMax = 100 - 100 * parseInt(verticalSlider.value) / (parseInt(verticalSlider.max) + 1.);
    var verticalValueMin = 100 - 100 * (parseInt(verticalSlider.value) + 1.) / (parseInt(verticalSlider.max) + 1.);

    console.log(horizontalValueMin, horizontalValueMax);
    console.log(verticalValueMin, verticalValueMax);

    // Calculate the new width of the image
    image.style.cssText = `clip-path: polygon(${horizontalValueMin}% ${verticalValueMin}%, ${horizontalValueMax}% ${verticalValueMin}%, ${horizontalValueMax}% ${verticalValueMax}%, ${horizontalValueMin}% ${verticalValueMax}%);`;
    image.style.transform = `translate(-${horizontalValueMin}%, -${verticalValueMin}%)`; // You can adjust the percentage values as per your requirement

    var scale = (parseInt(horizontalSlider.max) + 1.);
    image.style.width = scale * 100 + '%';
    console.log(image.naturalHeight);
    console.log(image.naturalWidth);
    console.log(parseInt(image.width));
    console.log(parseInt(imageContainer.offsetWidth));
    var imageHeight = (parseInt(imageContainer.offsetWidth)) * (image.naturalHeight/image.naturalWidth) + 'px';
    console.log(imageHeight);
    imageContainer.style.height = imageHeight;
  }


}

console.log('initialize');

// Get all image cropping containers
const imageCroppingContainers = document.querySelectorAll('.grid-image-and-sliders');

// Initialize image cropping functionality for each container
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