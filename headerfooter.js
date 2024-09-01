document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and insert HTML content, then execute scripts
    function fetchAndInsertHtml(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const container = document.getElementById(elementId);
                container.innerHTML = data;
                // Find all script tags in the inserted content
                const scripts = container.querySelectorAll('script');
                // For each script, create a new script element and execute it
                scripts.forEach(oldScript => {
                    const newScript = document.createElement('script');
                    if (oldScript.src) {
                        newScript.src = oldScript.src;
                    } else {
                        newScript.textContent = oldScript.textContent;
                    }
                    // Replace the old script with the new script in the document
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                });
            });
    }

    // Load header and footer with script execution
    fetchAndInsertHtml('https://shreyanshanchlia.github.io/SquareDragon.github.io/header.html', 'header');
    fetchAndInsertHtml('https://shreyanshanchlia.github.io/SquareDragon.github.io/footer.html', 'footer');
});
