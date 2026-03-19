function updateTime() {
	let dublinElement = document.querySelector("#dublin");
	let dublinDateElement = dublinElement.querySelector(".date");
	let dublinTimeElement = dublinElement.querySelector(".time");
	dublinTimeElement.innerHTML = `${moment().tz("Europe/Dublin").format(`h[:]mma`)}`;
	dublinDateElement.innerHTML = `${moment().tz("Europe/Dublin").format(`DD MMMM YYYY`)}`;
}

function updateCity(event) {
	let cityTimeZone = event.target.value;
	if (cityTimeZone === "current") {
		cityTimeZone = moment.tz.guess();
	}
	let cityName = cityTimeZone.split("/")[1];
	let cityTime = moment().tz(cityTimeZone);
	let citiesContainer = document.querySelector("#cities-container");
	citiesContainer.innerHTML = `<div class="city">
					<div class="cityanddate">
						<h2>${cityName}</h2>
						<div class="date">${cityTime.format(`DD MMMM YYYY`)}</div>
					</div>
					<div class="time">${cityTime.format(`h[:]mma`)}</div>
				</div>
                <a href="/" class="reset-clock">Reset clock ↺</a>`;
	console.log(cityTime.format(`h[:]mma`));
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelector = document.querySelector("#cities-selector");
citiesSelector.addEventListener("change", updateCity);
