# React Router Tutorial

People new to react generally don't know how to structure their routes.

Beginners to React and entry level developers will write something like this:

```javascript
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Maps from "./pages/Maps";
import Settings from "./pages/Settings";
import Store from "./pages/Store";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

Although this is acceptable for small projects, when your project scaling - this will become incredibly difficult to read.

So we're going to refactor the code into this:

```javascript
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
```

It's cleaner, scalable and more readble. So let's get started!

Firstly create our **`React`** app in **`typescript`** by running the following commands in our terminal:

```bash
npx create-react-app react-router-tutorial --template typescript
cd react-router-tutorial
npm i react-router-dom
```

# Create the Pages

We're going to create two pages, **`Home`** and **`About`**.

```bash
mkdir src/pages
mkdir src/pages/Home src/pages/About
touch src/pages/Home/index.tsx src/pages/About/index.tsx
```

### What did we just do?

1. Created **`pages`** directory
2. Created two directories inside of **`pages`**: **`Home`** and **`About`**.
3. Creatd **`index.tsx`** files for **`Home`** and **`About`**.

Add to **`pages/About/index.tsx`**:

```javascript
const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;
```

Add to **`pages/Home/index.tsx`**:

```javascript
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
```

# Creating the types

Let create our **`types`** by running the following command in our terminal:

```bash
mkdir src/types
touch src/types/router.types.ts
```

Now add this to the newly create **`types/router.types.ts`** file:

```typescript
export interface routerType {
  title: string;
  path: string;
  element: JSX.Element;
}
```

Declare a type for each route:

- **`title`**: this will be a **`string`**
- **`path`**: this will also be a **`string`**
- **`element`**: this will be a **`JSX.Element`**

# Creating the Router

Run this command in your terminal:

```bash
touch src/pages/router.tsx src/pages/pagesData.tsx
```

## Pages Data

Add to **`pages/pagesData.tsx`**:

```javascript
import { routerType } from "../types/router.types";
import About from "./About";
import Home from "./Home";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home"
  },
  {
    path: "about",
    element: <About />,
    title: "about"
  }
];

export default pagesData;
```

### What is happening?

1. We've imported our **`pages`** and **`types`**.
2. Added a **`title`**, **`path`** and **`element`** to each object.

Every time we want to add a new page, all we have to do is add a new page object into this array.

## Router File

Add to **`pages/router.tsx`**

```javascript
import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";
import pagesData from "./pagesData";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
```

### What is happening?

We're mapping over the **`pagesData.tsx`** file and for each object in our data, we are returning a route.

# Update App File

Finally update the **`App.tsx`**:

```javascript
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
```

And we're all done! Thanks for reading.
