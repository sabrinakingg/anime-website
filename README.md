# REACT-BASE

Vite is a relatively new toolchain, which is recommended over CRA  on the new [React Site](https://react.dev/), if one wants to start with an *un-opinionated* framework:

- The **dev environment** is faster thanks to using `esbuild`

- The **production environment** bundler & transpiler uses the more modern `rollup`

- The default **React file architecture** is more streamlined 

- It comes with the ability to confiure its tools via the **config plugins**

&nbsp;

## [I] STARTING UP & CONFIGURING

0. Review the excellent documentation on [Vite's site](https://vitejs.dev/guide/)

1. Create new vite React template: `npm create vite@latest` & choose `React` -> `JavaScript`

2. Install the modules: `npm i`

3. Publish/serve the React dev app: `npm run dev`

&nbsp;

## [II] FILE & FOLDER ARCHITECTURE

- **Core files:**

  -  node_modules = third party code ("dependencies")

  - public = public-accessible files often containing images & favicons

  - index.html = here you can find `<div id="root">`, where our react app is injected here + `<script type="module" src="/src/main.jsx">` which helps build the Native ESM in dev 

  - Inside the `/src` folder we have the `App.jsx` component. This is the default component responsible for rendering the react logo, in tandem with `main.jsx`

&nbsp;

- **`package.json`: Very lightweight & set dependencies & dev dependencies**

  - `dev`: Runs our dev environment using `esbuild`

  - `build`: Creates a production build using `rollup`

  - `preview`: Allows us to preview the prod build, to ensure there are no errors for the final version

&nbsp;

- **`vite.config.js`: Very light & a basic config function**

  - Can install other plugins (*most are community built*)

  - Can modify how our application is served in dev or build, such as changing the localhost port: `server: { port: 3000 }`, as default is `port:5173`

&nbsp;

- `index.html`: Exposed outside the public folder, reduced comments & includes the script: `type=module`, which allows for the new & faster `esbuild` dev system

&nbsp;

- `App.jsx`: now includes a counter and can perform **"HMR": Hot Module Replacement** (or "*hot-swapping*"):

  - **In CRA:** If we update our code in dev, it will force a full refresh and reload the React application.

  - **In Vite:** If we perform a code update, it will merely swap out the new modules for the old & **MAINTAIN STATE**.  This is why we have brought in a `<Header />` component, or can just edit `App.jsx` to see this at work!

&nbsp;

## [III] OUR BASIC SETUP

**1. BASIC SETUP [you will keep coming back to this]**
  - Create new project with Vite toolchain
  - Install core modules: `react-router-dom`, `react-bootstrap`, `bootstrap`, `react-icons`
  - Clean up `/src` = see Slides for more detail (*clean all files so we have a blank slate to work from*)

**2. CREATING FIRST REACT PAGES & COMPONENTS**
  - Setup broad level, imperative component structure (using sub-folder system)
    - (a) Home basic design uses react-bootstrap Jumbotron
    - (b) Header basic design uses react-bootstrap Navbar

**3. RESTRUCTUING APP INTO ROUTED FRAMEWORK**
  - Import in Browser Router (if not already) into `main.jsx`
  - Setup broad level component structure (Fragments & import of Routers into `App.jsx`)
  - Import in `Home.jsx` from `/pages` into App root component
  - Route the respective containers/components, including in the new components
    
    -> SEE MORE: https://reactrouter.com/docs/en/v6/getting-started/overview & https://medium.com/@manishsundriyal/whats-new-in-react-router-v6-20eefe665be9#   a n i m e - w e b s i t e  
 