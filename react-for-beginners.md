# React for beginners
- [React for beginners](#react-for-beginners)
  - [Props](#props)
    - [What are props?](#what-are-props)
  - [Stateless Functional Components](#stateless-functional-components)
  - [Helper functions](#helper-functions)


## Props

### What are props?
- Way to get data from component to component
  - *State*: The home
  - *Props* a bus to get your state from component to component
  - Props -> object of data that got passed into a component [[object properties]]

```js
class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
        {/* tagline is the prop */}
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}
```

```js
const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
     {/* here we are passing the data/props into the Header component */}
      <span>{props.tagline}</span>
    </h3>
  </header>
);
```

## Stateless Functional Components

- These were used as *[presentational components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)* before hooks
- They basically rendered html to the page without state so there was no need to create a class component

```js
// Presentational component
const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
     {/* functions have no `this` */}
      <span>{props.tagline}</span>
    </h3>
  </header>
);
```

## Helper functions

- little functions like counting money, etc that are not specific to React but are just plain JavaScript functions.

```js
export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
```