# JSX

JSX is a syntax extension of Javascript. 

JSX is the tool that allows to type 'HTML looking code' directly in Javascript. It allows us to combine our UI with our javascript logic directly in our JS file (rather than having a separate template file in HTML than we then call upon in our JS file, we can look at a single component and directly see what it results in).

## JSX Rules

JSX is more strict than HTML - elements must either: 
- Have an explicit closing tag: `<b> ... </b>
- Be explicitly self-closed: `<input name="msg" />`
  - Cannot leave off that `/` or you'll get syntax error. 
- If there is more than one element, they need to be "wrapped" inside of a `div` or a `section`. 
```Javascript
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
```

### JSX in depth

> *Fundamentally, JSX just provides syntactic sugar for the `React.createElement(component, props, ...children) function.*

The JSX code:

```Javascript
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```

compiles into:

```Javascript
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```

[Source - React Docs/JSX in depth](https://reactjs.org/docs/jsx-in-depth.html)