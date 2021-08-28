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

### Embedding JS in HTML with JSX

```Javascript
class JSXDemo extends React.Component {
	render(){
		return (
			<section>
				<h1>My number is {2 * 8.4}</h1>
				<img src="https://images.unsplash.com/photo-1578031017301-2c518d9f1539?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
			</section>
		)
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
```

The `{}` allows us to embed Javascript expressions into HTML. 

There are plenty other uses for embedding JS into HTML with JSX through `{}`: 

```Javascript
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
```

For example, we can define functions and then call them inside of our component, or render CSS dynamically, etc. 


## Conditionals in JSX

How do we display things selectively depending on certain pieces of data. 

> *In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.*

[Source - React Docs/Conditional rendering](https://reactjs.org/docs/conditional-rendering.html)
[Source - LogRocket/Esteban Herrera/Conditional rendering in React](https://reactjs.org/docs/conditional-rendering.html)

## Layout

Convention 1: 1 component per file, with component name as filename.
filename `/Hello.js`
```Javascript
class Hello extends React.Component {
    render() {
        return <p>Hi Everyone!</p>
    }
}
```

Convention 2: App component. Our app component combines whatever other components we want into a single element, or component, which we then render to the DOM. 
It's conventional for the top-level component to be named `/app.js` (it helps readers of the code know where to start.) Our app component is usually the only thing rendered in our root `index.js`.
This renders the other components: 
```Javascript
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Greetings!</h1>
                <Hello />
                <Goodby />
            </div>
        );
    }
}
```

### Order of script tags

