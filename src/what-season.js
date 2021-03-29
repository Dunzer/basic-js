const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (!date) {
		return "Unable to determine the time of year!";
	};
	if (date.toDateString() == "Invalid Date") {
		throw new Error("Put the date");
	}

	month = dates.getMonth();
	if (month == 11 || month < 2) {
		return "winter";
	} else if (month < 5) {
		return "spring";
	} else if (month < 8) {
		return "summer";
	} else {
		return "autumn";
	}
};