# NextJs-TailwindCSS-SASS Boilerplate

A well-structured ready Next.js boilerplate with TailwindCSS and SASS.

## About
**Next.js** is a minimalistic React framework that runs on the browser and the server. It offers developers an easy way to get started, and as it uses React.js for templating, it's also a straightforward way for developers with React experience to get productive quickly.

The advantage of this approach is to be able to create rich user experiences in a uniform way, without compromising SEO (Search Engine Optimisation) factors that are key to good ranking on Google and other search engines.


**TailwindCSS** is a utility-first CSS framework for rapidly building custom designs and a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override

**SASS** is the most mature, stable, and powerful professional grade CSS extension language in the world.

## Installation

To create Next.js app
```
npx create-next-app
```

To add tailwindcss
```
Using npm 
npm install tailwindcss
```

```
Using Yarn 
yarn add tailwindcss
```

Generating tailwind.config.js
```
npx tailwind init
```

To add SASS
```
using npm
npm install --save @zeit/next-sass node-sass
```
```
using yarn
yarn add @zeit/next-sass node-sass
```


## next.config.js

```
// next.config.js
const withSass = require("@zeit/next-sass");
const tailwindCss = require("tailwindcss");
module.exports = withSass({
 webpack(config, options) {
   const rules = [{
     test: /\.scss$/,
     use: [
        {
          loader: "postcss-loader",
          options: {
          ident: "postcss",
          plugins: [tailwindCss("./tailwind.config.js")]
        }
      },
     { loader: "sass-loader" }
  ]}
];
return {
   ...config,
   module: { 
     ...config.module, 
     rules: [...config.module.rules, ...rules] 
   }
  };
}});
```
## Run the project

```
npm run dev
```

## Contributing

1. Fork it!
2. Give a star if you like this boilerplate

## License

Licensed under the MIT License, Copyright © 2020-present Nirajan Basnet
