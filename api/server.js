const express = require("express");
	const cors = require("cors");

	const app = express();
	var corsOptions ={};
	/* var corsOptions = {
	  origin: "http://localhost:8282"
	}; */

	app.use(cors(corsOptions));

    //Khai báo DB
    const db = require("./app/models");
	db.mongoose
	  .connect(db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	  })
	  .then(() => {
		console.log("Connected to the database!");
	  })
	  .catch(err => {
		console.log("Cannot connect to the database!", err);
		process.exit();
	  });



	// parse requests of content-type - application/json
	app.use(express.json());

	// parse requests of content-type - application/x-www-form-urlencoded
	app.use(express.urlencoded({ extended: true }));

	// simple route
	app.get("/", (req, res) => {
	  res.json({ message: "Chào mừng đến ứng dụng MongoDB" });
	});


    
	//Khai báo routes cho các API
	require("./app/routes/cambien.route")(app);

	// set port, listen for requests
	const PORT = 8282;
	app.listen(PORT, () => {
	  console.log(`Server is running on port ${PORT}.`);
	});