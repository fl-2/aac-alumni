const spinnyText = document.querySelector(".spinny .spin");
const plainText = document.querySelector("h1 .plain");
const text = plainText.innerHTML.trim();
spinnyText.innerHTML = text.substr(1) + " &bull; " + text[0];
spinnyText.innerHTML += spinnyText.innerHTML;
plainText.innerHTML = "";

const circular = new CircleType(spinnyText);
spinnyText.querySelector("div").setAttribute("aria-label", text);

const spinny = document.querySelector(".spinny .spin > div");
window.addEventListener("scroll", function() {
	spinny.style.transform = `translate(-50%, -50%) rotateZ(${this.scrollY / 4}deg)`;
});
