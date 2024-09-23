class Apierror extends Error {
	constructor(
		statusCode,
		message = "Something went wrong",
		errors = [],
		stack = ""
	) {
		super(message);
		this.statusCode = Number.isInteger(statusCode) ? statusCode : 500;
		this.data = null;
		this.message = message;
		this.success = false;
		this.errors = errors;

		if (stack) {
			this.stack = stack;
		} else {
			Error.captureStackTrace(this, this.construtor);
		}
	}
}

export { Apierror };
