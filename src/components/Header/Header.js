import React from 'react'

export default function Header(props) {
	return(
		<header>
			<title>#lead</title>
			<div className="right-wrap">
				<i class="fa fa-phone" aria-hidden="true">{/* */}</i>
				<i class="fa fa-info-circle" aria-hidden="true">{/* */}</i>
				<i class="fa fa-cog" aria-hidden="true">{/* */}</i>
				<input type="text" placeholder="Search"/>
				<i class="fa fa-at" aria-hidden="true">{/* */}</i>
				<i class="fa fa-star-o" aria-hidden="true">{/* */}</i>
				<i class="fa fa-ellipsis-v" aria-hidden="true">{/* */}</i>
			</div>
		</header>
	)
}