import React from 'react';

function Card({username, name, email, id}) {
	return(
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="" src={`https://robohash.org/${id}?size=250x250`} />
			<div>
				<h2>{username}</h2>
				<p>name: {name}</p><p>email: {email}</p>
			</div>
		</div>
	);
}

export default Card;