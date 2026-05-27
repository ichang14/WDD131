const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =`Last Modification: ${document.lastModified}`;

const temp = 45;
const speed = 10;

function calculateWindChill(temp, speed) {
    return (
        35.74 +
        (0.6215 * temp) -
        (35.75 * Math.pow(speed, 0.16)) +
        (0.4275 * temp * Math.pow(speed, 0.16))
    ).toFixed(1);
}

const windChill = document.querySelector("#windchill");

if (temp <= 50 && speed > 3) {

    windChill.textContent =
        `${calculateWindChill(temp, speed)} °F`;

} else {

    windChill.textContent = "N/A";

}