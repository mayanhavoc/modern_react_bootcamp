function getMood(){
	const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
	return moods[Math.floor(Math.random() * moods.length)]; 
}

class JSXDemo extends React.Component {
	render(){
		return (
			<section>
				<h1>My Current Mood is: {getMood()}</h1>
			</section>
		)
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));