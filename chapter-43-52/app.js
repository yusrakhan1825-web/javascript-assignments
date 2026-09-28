// Q-1

// Q-2

// 1. Select all mobile image elements using var
var mobileImages = document.querySelectorAll('.mobile-img');

// 2. Loop through the images using a standard loop with var
for (var i = 0; i < mobileImages.length; i++) {
    mobileImages[i].onclick = function() {
        // Displays the message shown in the preview popup
        alert('Thanks for purchasing a phone from us');
    };
}

// Q-3
