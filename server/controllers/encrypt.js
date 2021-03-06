const bcrypt = require('bcryptjs')

exports.hashPW = (password) => {
	let salt = bcrypt.genSaltSync(10);
	let hash = bcrypt.hashSync(password, salt);
	return hash;
};

exports.verifyPW = (submittedPW, userPW) => {
	return bcrypt.compareSync(submittedPW, userPW);
};
