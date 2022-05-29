const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text1.textContent = "pattern";
            }, 0);
            setTimeout(() => {
                text1.textContent = "Blogger";
            }, 4000);
            setTimeout(() => {
                text1.textContent = "YouTuber";
            }, 8000); 
        }

        textLoad();
        setInterval(textLoad, 12000);