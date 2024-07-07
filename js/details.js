import { Ui } from "./ui.js";

export class Details {
    constructor(id) {
        document.querySelector(".close").addEventListener("click", function () {
            document.querySelector(".appear").classList.add("d-none")
            document.querySelector(".navbar").classList.remove("d-none")
            document.querySelector(".row ").classList.remove("d-none")
            document.getElementById("hideimage").classList.remove("d-none")
        })
        this.getapidetails(id)
    }
    async getapidetails(id) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '16cf43b093msha9e94986fb33118p132524jsnc13ccd01a363',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        const responce = await api.json()
        console.log(responce);
        new Ui().appeardetails(responce)
    }
}
