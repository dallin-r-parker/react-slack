import React from 'react'
import moment from 'moment'
import './Messages.css'

export default function Messages() {
	const time = moment().format('h:mm A')
	return (
		<div className="message-content">
			<p>{time}</p>
			<p>Dallin Parker</p>
			<p>Here is my message https://docs.google.com/document/d/1Cpx2Tnq29dqfcIjGZQaKVls8c5o2az7n5D9G4Uta8MU/edit?usp=sharing</p>
		</div>
	)

}