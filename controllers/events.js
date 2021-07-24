const { response } = require('express')
const Event = require('../models/Event')

const getEvents = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'getEvents',
	})
}

const createEvent = async (req, res = response) => {
	const event = new Event(req.body)

	try {
		const eventSaved = await event.save()
		res.json({
			ok: true,
			event: eventSaved,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			ok: false,
			msg: 'Contact with administrator',
		})
	}
}

const updateEvent = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'updateEvent',
	})
}

const deleteEvent = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'deleteEvent',
	})
}

module.exports = {
	getEvents,
	createEvent,
	updateEvent,
	deleteEvent,
}