import "./config/firebaseInit.js"
import page from "./lib/page.js";

import homeView from "./views/homeView.js";
import layoutView from "./views/layoutView.js";


// Setup layout
page(layoutView);


//setup routes
page("/", homeView);


// Routing
page();




