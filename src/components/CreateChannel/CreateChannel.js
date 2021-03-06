import React from 'react'
import './CreateChannel.css'

export default function CreateChannel(props){

	const handleCancel = () => (props.action())
	const handleCreate = () => (props.add())

	 const channelInput = (e) => {
		if(e.target.value){
			props.newChannel(e.target.value)
		}
	}

	return (
		<modal className="create-channel-container">
			<section className="channel-wrap">
				<h2>Create a private channel</h2>
				<h5>Channels are where your team communicates. They're best when organized around a topic - #leads, for example</h5>
				<p>Name</p>
				<input type="text"
				       onChange={e => channelInput(e)}
				       placeholder="e.g. leads" />

				<p>Purpose</p>
				<input type="text"/>

				<div className="btn-wrap">
					<button onClick={handleCancel}>Cancel</button>
					<button onClick={handleCreate}>Create channel</button>
				</div>
			</section>
		</modal>
	)
}