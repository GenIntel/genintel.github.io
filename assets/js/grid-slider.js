// Function to initialize image cropping functionality for a given container
function initializeImageCropping(container) {
  const image = container.querySelector('.croppable-image');
  const horizontalSlider = container.querySelector('.horizontal-slider');
  const verticalSlider = container.querySelector('.vertical-slider');

  // Add event listeners to the sliders
  horizontalSlider.addEventListener('input', updateCrop);
  verticalSlider.addEventListener('input', updateCrop);

  // Function to update image crop based on slider values
  function updateCrop() {

    const horizontalValue = horizontalSlider.value / 3 * 100;
    const verticalValue = verticalSlider.value / 3 * 100;

    console.log(horizontalValue);
    console.log(verticalValue);

    // Calculate crop percentages
    const horizontalCrop = `left: ${horizontalValue}%`;
    const verticalCrop = `top: ${verticalValue}%`;

    // Apply crop styles to the image
    image.style.cssText = `clip-path: polygon(${horizontalCrop} ${verticalCrop}, 100% ${verticalCrop}, 100% 100%, ${horizontalCrop} 100%);`;
  }
}

// Get all image cropping containers
const imageCroppingContainers = document.querySelectorAll('.image-cropping-container');

// Initialize image cropping functionality for each container
imageCroppingContainers.forEach(container => {
  initializeImageCropping(container);
});