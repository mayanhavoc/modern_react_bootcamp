class JSXDemo extends React.Component {
	render(){
		return (
			<section>
				<h1>My image</h1>
				<img src="https://images.unsplash.com/photo-1578031017301-2c518d9f1539?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
			</section>
		)
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));