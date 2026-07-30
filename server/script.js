window.onload=function(){
async function loadTitles() {
  try {
    const response=await fetch("http://localhost:3000/articles")
    const data=await response.json()
    const titles=data.map(data=>data.title)
    const divtitle=document.querySelector("#titles")
    titles.forEach(title=>{
        const paragraph=document.createElement('p')
        paragraph.textContent=title
        divtitle.appendChild(paragraph)
    })
    // fetch + await response.json() here
    // map the articles down to just their titles
    // create a <p> per title and append it into #titles
  } catch (error) {
    console.error("Error loading titles", error)
    // what should happen if the fetch fails or the server is down?
  }
}

loadTitles();}
