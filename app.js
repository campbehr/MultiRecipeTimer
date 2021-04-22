const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");

const app = express();

//MIDDLEWARES
if (
	process.env.NODE_ENV ===
	"development"
) {
	app.use(morgan("dev"));
}

app.use(express.json());

app.use((req, res, next) => {
	console.log(
		"Hello from the Middleware 🙋‍♀️"
	);
	next();
});

app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});

app.use("/api/v1/users", userRouter);

module.exports = app;
