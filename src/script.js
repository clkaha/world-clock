//New York
function updateTime() {
	let newYorkElement = document.querySelector("#new-york");
	let newYorkDateElement = newYorkElement.querySelector(".date");
	let newYorkTimeElement = newYorkElement.querySelector(".time");
	newYorkTimeElement.innerHTML = `${moment().tz("America/New_York").format(`h[:]mma`)}`;
	newYorkDateElement.innerHTML = `${moment().tz("America/New_York").format(`DD MMMM YYYY`)}`;

	//Dublin

	let dublinElement = document.querySelector("#dublin");
	let dublinDateElement = dublinElement.querySelector(".date");
	let dublinTimeElement = dublinElement.querySelector(".time");
	dublinTimeElement.innerHTML = `${moment().tz("Europe/Dublin").format(`h[:]mma`)}`;
	dublinDateElement.innerHTML = `${moment().tz("Europe/Dublin").format(`DD MMMM YYYY`)}`;
}

function updateCity(event) {
	let cityTimeZone = event.target.value;
	let cityName = cityTimeZone.split("/")[1];
	let cityTime = moment().tz(cityTimeZone);
	let citiesContainer = document.querySelector("#cities-container");
	citiesContainer.innerHTML = `<div class="city">
					<div class="cityanddate">
						<h2>${cityName}</h2>
						<div class="date">${cityTime.format(`DD MMMM YYYY`)}</div>
					</div>
					<div class="time">${cityTime.format(`h[:]mma`)}</div>
				</div>`;
	console.log(cityTime.format(`h[:]mma`));
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelector = document.querySelector("#cities-selector");
citiesSelector.addEventListener("change", updateCity);
