const mongoose = require('mongoose');

const teamSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name'],
			default: 'sam',
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Team', teamSchema);
