import { Details } from "./details.js"
import { Ui } from "./ui.js"

export class Home {
    constructor() {
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", (e) => {
                this.changelink(link)
                const category = link.getAttribute("data-category")
                this.getgames(category)
            })
        })
        this.loader = document.querySelector(".lds-roller")
        this.ui = new Ui()

        this.getgames("MMORPG")
    }

    async changelink(link) {
        document.querySelector('.navbar-nav .active').classList.replace("text-primary", "text-white")
        link.classList.add("active")

    }

    async getgames(cat) {
        this.loader.classList.replace("d-none", "d-flex")
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '16cf43b093msha9e94986fb33118p132524jsnc13ccd01a363',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options)
        const resp = await api.json()
        this.loader.classList.add("d-none")

        console.log(resp);
        this.ui.display(resp)
        document.querySelectorAll(".card").forEach(item => {
            item.addEventListener("click", function () {
                document.querySelector(".appear").classList.remove("d-none")
                document.querySelector(".navbar").classList.add("d-none")
                document.querySelector(".row ").classList.add("d-none")
                document.getElementById("hideimage").classList.add("d-none")
                new Details(item.getAttribute("data-id"))
            })

        })

    }



}