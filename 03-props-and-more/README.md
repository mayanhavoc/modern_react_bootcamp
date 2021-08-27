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



[Source: React Docs](https://reactjs.org/docs/getting-started.html)