const mobileImages = ['1.jpg', '2.jpg']; // Portrait images in /Assets/Jpeg/Mobile/
const desktopImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']; // Landscape images in /Assets/Jpeg/Desktop/


const fallbackBg = 'Assets/Jpeg/Desktop/3.jpg';

// Function to get a random image from an array
function getRandomImage(images) {
    if (images.length === 0) return fallbackBg; // Fallback if array is empty
    const randomIndex = Math.floor(Math.random() * images.length);
    const path = `./Assets/Jpeg/${window.innerWidth < 768 ? 'Mobile' : 'Desktop'}/${images[randomIndex]}`;
    console.log('Generated path:', path); // Debug: Log the full path
    return path;
}

// Set the background on page load
window.addEventListener('load', () => {
    const backgroundDiv = document.querySelector('.background');
    const isMobile = window.innerWidth < 768;
    const images = isMobile ? mobileImages : desktopImages;
    const randomBg = getRandomImage(images);

    console.log('Device type:', isMobile ? 'Mobile' : 'Desktop'); // Debug: Check device detection
    console.log('Selected image:', randomBg); // Debug: Check selected path

    // Set the background image
    backgroundDiv.style.backgroundImage = `url('${randomBg}')`;

    // Optional: Add error handling for image load failure
    const img = new Image();
    img.src = randomBg;
    img.onload = () => console.log('Image loaded successfully'); // Debug: Confirm load
    img.onerror = () => {
        console.log('Image failed to load, using fallback'); // Debug: Log fallback
        backgroundDiv.style.backgroundImage = `url('${fallbackBg}')`; // Fallback on error
    };
});