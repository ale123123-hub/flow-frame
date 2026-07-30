async function loadtitles(){
   
    try{ const response = await fetch('http://localhost:3000/articles');
    const articles = await response.json();
    const titles = articles.map(article => article.title);
    const titlesDiv = document.getElementById('titles');
    titles.forEach((title) => {
        const titleElement = document.createElement('p');
        titleElement.textContent = title;
        titlesDiv.appendChild(titleElement);
    })
}
    catch (error) {
        console.error('Error fetching articles:', error);
    }
}
loadtitles();
