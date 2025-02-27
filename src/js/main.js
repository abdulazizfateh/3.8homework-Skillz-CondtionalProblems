const topBanner = document.querySelector(".top_banner");
const header = document.querySelector("header");
const topBannerCloseBtn = document.querySelector("#topBannerClose");

let isClicked = false;

function topBannerHiddenWhenScrolling() {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            topBanner.style.display = "none";
        } else {
            if (isClicked === true) {
            } else {
                topBanner.style.display = "flex";
            }
        }
    });
};
topBannerHiddenWhenScrolling();

function topBannerClose() {
    topBannerCloseBtn.addEventListener("click", () => {
        topBanner.style.display = "none";
        isClicked = true;
    });
}
topBannerClose();