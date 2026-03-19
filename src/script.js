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
setInterval(updateTime, 1000);
