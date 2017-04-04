# README #

How to run the x3d Model Application

### What is this repository for? ###

* x3d Model of the Octarm/Tendril
* Version control of MS Thesis Code
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Make sure node js is installed, it can be downloaded [here] (https://nodejs.org/en/download/)
* Pull down the repo and open x3dModel in a browser (preferably Firefox)
* Open Command Prompt to containing folder and start server.js by typing 'node server.js'
* Connect to localhost:3000 to see the html page
* To debug (on Firefox) press f12, click on the debugger tab, add breakpoints as necessary and then run the function
* The program is event based and starts from main.js using jquery button on click functionality more can be found [here] (http://www.w3schools.com/jquery/)

### General Structure notes ###

* server.js creates a web server that renders the html
* All of the needed
* The ejs/html page is in views/
* public/ contains all required supporting files for the html page
* public/js/ is split into lib/ and obj/ lib contains libraries and obj contains object definitions

### General Program Structure ###

* main.js is an entry point that runs $(document).ready() (on load) of the model.ejs page (renamed html page)
* Next the robot object is created as an instance of Octarm
* The Octarm adds a base, mid, and tip section object from instances of the respective Base, Midsection, and Tip classes
* Base/Midsection/Tip contain and array called "this.objs" where each element in the array come from a new instantiation of the x3dSphere class
* The x3dSphere class reads out the data from inside the x3d tags of the model.html tag (this is where the actual original position, color, radius size of the balls is actually stored)

### Who do I talk to? ###

* Ryan Scott (ryan_scott) ryan.matt.scott@gmail.com | rscott6@clemson.edu
