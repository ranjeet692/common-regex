module.exports = {
	"number": {
		"whole":/^\d+$/,
		"decimal":/^\d*\.\d+$/,
		"whole-decimal":/^\d*(\.\d+)?$/,
		"negative-whole-decimal":/^-?\d*(\.\d+)?$/,
		"whole-decimal-fraction":/[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/
	},
	"string": {
		"username": /^[a-z0-9_-]{3,16}$/,
	},
	"alphanumeric": {
		"with-space":/^[a-zA-Z0-9 ]*$/,
		"nospace":/^[a-zA-Z0-9]*$/
	},
	"email": {
		"comman":/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/,
		"uncomman":/^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	},
	"password": {
		"moderate":/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,
		"complex":/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
	},
	"url": {
		"with-protocol":/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/,
		"optional-protocol":/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
	}
};