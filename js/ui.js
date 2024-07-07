export class Ui {
    constructor() {

    }
    display(data) {

        let box = ``
        for (let i = 0; i < data.length; i++) {
            box += `
            <div class="col-lg-3 col-md-4 col-sm-12 d-flex    ">
                    <div class="inner ">
                        <div data-id="${data[i].id}" class="card  backgroundcolorgrey border border-1 border-black h-100" style="width: 18rem;">
                            <img src="${data[i].thumbnail}" class="card-img-top  w-100" alt="card">
                            <div class="card-body">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6 class="card-title text-white">${data[i].title}</h6>
                                            </td>
                                            <td class="paddingleft">
                                                <button class="btn hovercolor">Free</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p class="card-text text-center pt-2 colorgrey ">
                                    ${data[i].short_description}
                                </p>
                            </div>
                            <hr class="text-black">
                            <div class="card-body d-flex justify-content-around align-items-center">
                                <button class="btn grey text-white ">${data[i].genre
                }</button>
                                <button class="btn grey marginleft text-white">${data[i].platform}r</button>
                            </div>
                        </div>
                    </div>
                </div>
           `
        }
        document.getElementById("gamedata").innerHTML = box
    }
    appeardetails(data) {
      const detailsbox = `
          <div class="item">
                    <img src="${data.thumbnail}" class=" ps-5 pt-3" alt="">
                </div>
                <div class="item ms-5 align-self-center">
                    <h3 class="text-white">
                        Title: ${data.title}</h3>
                    <h4 class="text-white">Category: <span class="bg-primary rounded-2">${data.genre}</span> </h4>
                    <h4 class="text-white">Platform: <span class="bg-primary rounded-2">${data.platform}</span></h4>
                    <h4 class="text-white">Status: <span class="bg-primary rounded-2">${data.status}</span> </h4>
                    <p class="text-white">${data.description}</p>
              <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">show game</a>
                </div>
        `

        document.getElementById("deatailscontent").innerHTML=detailsbox
    }

}