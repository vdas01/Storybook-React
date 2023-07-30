// a development environment and playground for UI components
//create components independently
// showcase those components interactively in an isolated environment
//runs outside our main react application


//pros:-
//ability to view diff components that have already been developed
//view what are the diff props that those developed components accept
//ability to visuaally showcase those components to your stake holders for feedback
//dynamically change props,acessibility score

//npx sb init

//main.js :- configuration file for storybook
//preview.js:- confirguration for stories that we write

//Decoratos:- componnents that wrap a story

//console addon :- 
//add in preview.js

//docs addon:- npm i -D @storybook/addon-docs
//add in main.js addons array

//knobs:- edit props dynamically
//npm i -D @storybook/addon-knobs
//add it in main.js addons array
//in preview.js:- addDecorator(withKnobs)
//


//helps you test accessibility rules for your stories
//allyaddon:- npm i -D @storybook/addon-a11y
//add in main.js
//in preview.js addDecorator(withA11y)

//build storybook yarn build-storybook

