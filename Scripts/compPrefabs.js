

console.log("ben 10");

let lista = Array.from({ length: 4 }, (e, i) => {
    return i;
});

let listaCateg = ['Toy', 'Beer', 'food'];
let bottomCateg = ['Home', 'Account', 'Products'];

let categMenuIcons = document.getElementById('Header_MenuCategIcon');
let bottomNav = document.getElementById('bottomNav');



for (let i = 0; i < listaCateg.length; i++) {
    const el = listaCateg[i];
    const elBottom = bottomCateg[i];

    let catIconS = `<button
          style="
            height: 40px;
            min-width: 40px;
            margin-right: 4px;
            background-color: blue;
          "
        >
          ${el}
        </button>`;


    let botNavCatIconS = `<button
        style="
          height: 40px;
          min-width: 40px;
          margin-right: 4px;
          background-color: blue;
        "
      >
        ${elBottom}
      </button>`;

    categMenuIcons.innerHTML += catIconS;
    bottomNav.innerHTML += botNavCatIconS;
}



console.log(lista);