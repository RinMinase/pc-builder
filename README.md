<h1 align="center"> PC Builder </h1>

<p align="center">
    <a href="https://david-dm.org/RinMinase/pc-builder">
        <img alt="David-DM" src="https://img.shields.io/david/RinMinase/pc-builder?style=for-the-badge">
    </a>
    <a href="https://david-dm.org/RinMinase/pc-builder">
        <img alt="David-DM" src="https://img.shields.io/david/dev/RinMinase/pc-builder?style=for-the-badge">
    </a>
</p>
<p align="center">
    <a href="https://app.netlify.com/sites/pc-builder/deploys">
        <img alt="Netlify-Status" src="https://img.shields.io/netlify/9313f52f-a422-497d-bd95-252a0101b3ba?logo=netlify&style=for-the-badge">
    </a>
</p>

## Introduction
A simple PC builder from scratch to determine the budget range of your selected components created using `React` with `TypeScript` and deployed using `Netlify`.

## Getting Started

### Running the project
1. [Download](https://nodejs.org/en/) the latest Node version. This is marked as `<version number> Current`. Install it on your machine.

2. _(Optional)_ [Download](https://yarnpkg.com/latest.msi) Yarn. This is a faster package manager than the default `npm` one.

3. Clone the project

    ```
    git clone https://github.com/RinMinase/pc-builder.git
    cd pc-builder
    ```

4. Install the dependencies then run the project

    ```
    npm install
    npm start
    ```

    **Note:** If you have installed Yarn, run these instead:

    ```
    yarn install
    yarn start
    ```

5. Fire up your browser and go to `localhost:3000`

### Project Structure
    .
    ├── assets/                         # Project assets
    ├── src/                            # Project source code
    │   ├── core/                       # Core components
    │   ├── <component>/                # Project component
    │   ├── global.d.ts                 # Project type definitions
    │   ├── global.scss                 # Main stylesheet
    │   ├── index.html                  # Main template file
    │   ├── index.tsx                   # Main scripts
    │   ├── reducers.ts                 # Root reducer file
    │   └── routes.tsx                  # Route definitions
    ├── tsconfig.json                   # TypeScript configuration file
    └── webpack.config.ts               # Webpack configuration file

#### Component Structure
    <component>/
     │   └── components/                # Sub-components folder
     │       └── <component name>.tsx   # Sub-component
     ├── actions.tsx                    # Component actions and types
     ├── index.scss                     # Component stylesheet
     ├── index.tsx                      # Component entry file
     └── reducers.tsx                   # Component reducers

#### Display Structure
     ___________________
    |  _______________  | <App />
    | |_______________| |  ├─ <Nav />
    |  _______________  |  │
    | |               | |  └─ <Container />
    | |               | |      └─ <Route />
    | |_______________| |
    |___________________|

### Building the project
Installations Required:
- Node
- _(Optional)_ Yarn

1. Fire up your terminal inside the project folder.

2. Build the project by running:

    ```
    npm run build
    ```

    **Note:** If you have installed Yarn, run these instead:

    ```
    yarn build
    ```

3. This should generate a `/dist` folder inside the project folder.

### Project tasks

Task automation is based on [Yarn scripts](https://yarnpkg.com/lang/en/docs/cli/run/) or [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Task                | Description                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| `yarn start`        | Run **development server** on `http://localhost:3000/` with file watching on changes   |
| `yarn build`        | Build production code                                                                  |
| `yarn deploy`       | Build netlify deployment code                                                          |

## Built with
* <img width=20 height=20 src="https://reactjs.org/favicon.ico"> [React 16](https://reactjs.org/) - Web Framework
* <img width=20 height=20 src="https://redux.js.org/img/favicon/favicon.ico"> [Redux](https://reactjs.org/) - State Container Management
* <img width=20 height=20 src="https://www.typescriptlang.org/assets/images/icons/favicon-32x32.png"> [TypeScript](https://www.typescriptlang.org/) - Language syntax and compiler
* <img width=20 height=20 src="https://material-ui.com/static/favicon.ico"> [Material-UI](https://material-ui.com/) - Web Layouting
* <img width=20 height=20 src="https://sass-lang.com/favicon.ico"> [Sassy CSS (SCSS)](https://sass-lang.com/) - CSS pre-processor
* <img width=20 height=20 src="https://webpack.js.org/bc3effb418df77da9e04825c48a58a49.ico"> [Webpack 4](https://webpack.js.org/) - Project bundler
* <img width=20 height=20 src="https://www.netlify.com/img/global/favicon/favicon-32x32.png"> [Netlify](https://www.netlify.com/) - Continuous Deployment (CD) service
* <img width=20 height=20 src="https://terser.org/img/terser-square-logo.png"> [Terser](https://terser.org/) - ES6+ (JavaScript) mangler and compression toolkit
* <img width=20 height=20 src="https://yarnpkg.com/favicon.ico"> [Yarn](https://yarnpkg.com/) - Package Manager
