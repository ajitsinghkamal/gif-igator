## Structure
```
src
├── components #includes all components
│     │
│     ...
│
├── layout #includes any layout components
│     │
│     shell
│ 
├── style #includes any style related or theme
│     │
│     ...
│
├── views #components connected to route
│     │
│     ...
│
├── index.js #entry point
├── serviceWorker.js
├── setupAxios.js #creates an instance of axios with baseurl
├── setupFonts.js #import webfontloader to fetch fonts
├── setupTests.js #setup enzyme adapters
└── immutables #any constants file
     │
     ...

```

### TESTS

Every component includes a unit or snapshot test file alongside it. The test are contained within a ```__tests__``` directory.

### ENV

The .env at the root of the project keeps the base url and api key


## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner <br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
