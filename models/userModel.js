const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [
			true,
			"Must include a name",
		],
		trim: true,
	},
	username: {
		type: String,
		required: [
			true,
			"Must include a username",
		],
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		required: [
			true,
			"Must have unique email",
		],
		match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		unique: true,
	},
	password: {
		type: String,
		required: [
			true,
			"You need a password silly 🧙‍♂️",
		],
	},
});

const User = mongoose.model(
	"User",
	userSchema
);

module.exports = User;
