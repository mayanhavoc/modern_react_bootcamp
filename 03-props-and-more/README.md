# ReactJS

## Components and props

> *Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components.*

- Components are the main building block of react. React exists to help us make components and also to help them communicated between each other. 

- Components typically combine pieces of UI (HTML, CSS) & logic (Javascript).

- In broad terms, the idea is to create classes that know how to render themselves into HTML (*not all components are class based, there are also functional components*). 
```Javascript
class Dog {
    constructor (name, color) {
        this.name = name;
        this.color = color;
    }
    render () {
        return `<p>${this.name}</p>`
    }
}
```
This is a pseudo-component, it's not React, but it illustrates the idea. 
Each dog component, each 'instance' will have properties (i.e., name, color) and also knows how to render itself as HTML.


## Properties
**aka "Props"**

A useful component is **reusable**.
This often means making it customizable or configurable. 

We can pass data inside of the react component: 
`<Hello to="Ringo" from="Paul" />`

We can set the values in our `Hello` class so that they display a value: 
```Javascript
class Hello extends React.Component {
    render() {
        console.log(this.props);
        return <p>Hi everyone!</p>;
    }
}
```

We can configure our `Hello` component further to insert the values we passed through the `<Hello />` component in our `Hello` class. 

```Javascript
class Hello extends React.Component {
  render() {
    return <p>Hi {this.props.to} from {this.props.from}</p>;
  }
}
```

### Properties requirements

- Properties are for configuring your component.
- Properties are immutable. 
  - This doesn't mean that your data in an application can never change. It just means that we don't do it through props, or we don't manually do it. Here's an example: 
    ```Javascript
    class Hello extends React.Component {
      render() {
          this.props.from = "BLUE"
        return <p>Hi {this.props.to} from {this.props.from}</p>;
      }
    }

    // Uncaught TypeError: Cannot assign to read only property 'from' of object '#<Object>'
    ```

    `this.props.from` is **read-only** because properties are **immutable**. We cannot assign values to `this.props`. I can     *access it*, but I cannot change it.  
- Properties can be strings: 
  - `<User name="Jane" title="CEO" />`
- For other types, embed JS expression using the curly braces: 
  - `<User name="Jane" salary={ 1000 } hobbies={ [ "bridge", "reading", "tea" ] } />`

We can pass all different types of data through props: 
- We can pass strings, numbers (must be wrapped around curly braces `{}` if we want the number and `""` if we want a string, just the number 3 will give an error), arrays, and booleans.  
```Javascript
class App extends React.Component {
    render(){
        return {
            <div>
                <Hello
                to="Ringo"
                from="Paul"
                num={3}
                data={[1,2,3,4,5]}
                // booleans
                // isFunny={true/false}
                isFunny
                />
            </div>
        }
    }
}
```

### Dynamically rendering props

We'll use the previous example, except that instead of using `num={3}`, we'll use a property `bangs`

In our `\index.js` file: 
```Javascript
class App extends React.Component {
    render(){
        return {
            <div>
                <Hello
                to="Ringo"
                from="Paul"
                bangs={4}
                // num={3}
                data={[1,2,3,4,5]}
                // booleans
                // isFunny={true/false}
                isFunny
                />
            </div>
        }
    }
}
```

In our `\Hello.js` component file, we'll add our `bangs`. The simplest way to do this is to create a variable. If we only create a variable `bangs` and set it to `this.props.bangs`, you'll only get the value of bangs. 
If we use the `repeat` method we can apply the value of `bangs` to the string `"!"`.

```Javascript
class Hello extends React.Component {
    render(){
        // This would give use the number of bangs
        // let bangs = this.props.bangs 
        // The repeat method allows us to apply the value of bangs to a string, this will only work if we pass 'bangs'.
        let bangs = "!".repeat{this.props.bangs}
        // console.log(this.props)
        return (
            <div>
            Hi {this.props.to} from {this.props.from}{bangs}
            </div>
        );
    }
}
```


[Source: React Docs](https://reactjs.org/docs/getting-started.html)