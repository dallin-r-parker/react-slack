import React from 'react'
import './CreateChannel.css'

export default function CreateChannel(props){
	function handleCancel(){
		props.action()
	}
	return (
		<modal className="create-channel-container">
			<section className="channel-wrap">
				<h2>Create a private channel</h2>
				<h5>Channels are where your team communicates. They're best when organized around a topic - #leads, for example</h5>
					<p>Name</p>
					<input type="text" placeholder="e.g. leads"/>

					<p>Purpose</p>
					<input type="text"/>

					<div className="btn-wrap">
						<button onClick={handleCancel}>Cancel</button>
						<button>Create channel</button>
					</div>
			</section>
		</modal>
	)
}