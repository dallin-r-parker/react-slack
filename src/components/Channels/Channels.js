import React from 'react'
import './Channels.css'

export default function Channels(props){
	return (
		<div className="channel-title">
			<p><span>#</span>{props.channel} </p>
		</div>
	)
}