# I would also like to clarify the following:

## 1- For the Duplicates exercise i used ES6 Set object. Since i am testing with Jest, we need to install an additional library for Jest to work on ES6.

    npm install --save-dev babel-jest

## In your package.json file, make the following changes:

    {
      "scripts": {
        "test": "jest"
      },
      "jest": {
        "transform": {
          "^.+\\.jsx?$": "babel-jest"
        }
      }
    }

## Install babel preset:

    npm install @babel/preset-env --save-dev

## Create a .babelrc file:

    {
      "presets": ["@babel/preset-env"]
    }

## 2- I noticed after finishing the Booking exercise that you asked for a list of free cars at a specified time (not range). Of course the query to get this is much simpler than checking if a full range is available.
