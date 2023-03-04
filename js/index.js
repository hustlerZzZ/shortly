// Selecting the HTML Elements

const form = document.querySelector(".form__input");
const form_btn = document.querySelector(".form__button");
const link_box = document.querySelector(".link-box")
const feature_padding = document.querySelector(".feature");
const copy_btn = document.querySelector(".copy_btn");
const ready_link = document.querySelector(".ready-link");

let link;
let short_link;
let padding = 15;
let transform = -12;


form_btn.addEventListener("click", async function () {
    padding += 5;
    transform -= 6;
    link = form.value;
    const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
    // const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`).then(res => res.json()).then(data => console.log(data.result.full_short_link));
    const josn = await data.json();
    short_link = await josn.result.full_short_link;

    const markup = `
    <div class="compressed">
          <div class="compressed-links">
            <a href="${link}" class="link">${link}</a>
            <div class="compressed-links__ready">
              <a href="${short_link}" class="ready-link">${short_link}</a>
              <button>Copy</button>
            </div>
          </div>
        </div>
    `;

    link_box.insertAdjacentHTML("afterend", markup);

    feature_padding.style.paddingTop = `${padding}rem`;
    feature_padding.style.marginBottom = `${transform}rem`;
    // feature_padding.style.paddingTop = padding ;
    feature_padding.style.transform = `translateY(${transform}rem)`;
    // feature_padding.style.transform = transform;


    form.value = "";
});

copy_btn.addEventListener("click", function () {
    const copyTxt = ready_link.innerHTML;
    console.log(copyTxt);

    navigator.clipboard.writeText(copyTxt);
    alert("Link Copied");
})




