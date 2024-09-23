import { app } from "./app.js";
import connectDb from "./db/index.js";

connectDb()
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`Server is running on port:${process.env.PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
