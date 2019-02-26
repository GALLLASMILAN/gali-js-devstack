function gali (cb) {
	cb(2, undefined);
}

gali((number, error) => {
	if (error) console.log(error);
	console.log(number);
});
