url="https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/plombier-a-velo.json"

const title = document.querySelector("h1")
const accroche = document.querySelector(".accroche")
const avantage = document.querySelector(".avantage")
const button = document.querySelector(".button")
const cards = document.querySelector(".cards")
const articles = document.querySelector(".articles")

fetch (url) 
    .then (response => response.json())
    .then(data => {
        title.innerText=data.entreprise.nomCommercial
        accroche.innerText=data.entreprise.phraseAccroche
        avantage.innerText=data.entreprise.avantagesClients
        button.innerText=data.entreprise.texteAppelAction
        const services = data.entreprise.services
        const temoignages = data.entreprise.temoignages

        services.forEach(service => {
          console.log(service)
    
          const card = document.createElement("div")
          card.classList.add("card")
    
          const h2 = document.createElement("h2")
          h2.innerText = service.nom
          card.appendChild(h2)
    
          const p = document.createElement("p")
          p.innerText = service.description
          card.appendChild(p)
    
          cards.appendChild(card)
        })

        temoignages.forEach(temoignage =>{
            console.log(temoignage)

            const article = document.createElement("div")
            article.classList.add("article")

            const h2 = document.createElement("h2")
            h2.innerText = temoignage.prenom
            article.appendChild(h2)

            const h3 = document.createElement("h3")
            h3.innerText = temoignage.typeIntervention
            article.appendChild(h3)

            const p = document.createElement("p")
            p.innerText = temoignage.commentaire
            article.appendChild(p)

            articles.appendChild(article)

        })
    })
    
   
  