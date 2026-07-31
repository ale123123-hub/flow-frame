window.onload = function() {
    async function loadTitles() {
        try {
            const response = await fetch("http://localhost:3000/articles");
            const data = await response.json();
            const titles = data.map(article => article.title);
            const divtitle = document.querySelector("#titles");

            titles.forEach(title => {
                const paragraph = document.createElement('p');
                paragraph.textContent = title;
                divtitle.appendChild(paragraph);
            });
        } catch (error) {
            console.error("Eroare la incarcarea titlurilor:", error);
        }
    }

    loadTitles();
};