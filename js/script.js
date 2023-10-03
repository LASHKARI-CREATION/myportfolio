const textContainer = document.getElementById("text-container");
        const texts = ["Web Designer.", "HTML Devloper.", "Photographer.", "Sketch Artist.", "Cricketer."];
        let currentIndex = 0;
        const delay = 100; // Delay in milliseconds between each text

        // Function to display and erase texts in an infinite loop
        function displayAndEraseTexts() {
            const text = texts[currentIndex];
            let index = 0;
            const interval = setInterval(() => {
                textContainer.textContent += text[index];
                index++;
                if (index === text.length) {
                    clearInterval(interval);
                    setTimeout(eraseText, 1500); // Wait for 1 second before erasing
                }
            }, delay);
        }

        // Function to erase text characters one by one
        function eraseText() {
            const currentText = textContainer.textContent;
            if (currentText.length === 0) {
                currentIndex = (currentIndex + 1) % texts.length;
                setTimeout(displayAndEraseTexts, 1000); // Wait for 1 second before displaying the next text
            } else {
                textContainer.textContent = currentText.slice(0, -1);
                setTimeout(eraseText, delay);
            }
        }

        // Start the loop by calling displayAndEraseTexts
        displayAndEraseTexts();