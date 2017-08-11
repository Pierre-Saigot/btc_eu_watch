# BTC LIVE PRICING IN €
### A little page for web browser in watches

#### What's inside the project ?
* [Wear Web Starter // WWS](https://github.com/Pierre-Saigot/android_wear_starter)
* [Cryptonator](https://www.cryptonator.com/)
* [SaSS](http://sass-lang.com/)
* [tsbits-starter](https://github.com/tsbits/tsbits-starter) 

### Documentation (sort of...)
#### Setup :
* Clone that repo on your computer
* In a shell cd to where you cloned the git
* Run npm install
* Run gulp (by default this executes the 'watch' task)
* You're ready to code
* Open responsive emulator on 229x229 for the huawei watch 

#### Start coding :
* You have to work inside app/ (all your src must be inside)
* Your HTML must be written inside app/index.html
* Your CSS must be written inside app/scss/style.scss
* Your JS must be written inside app/js/main.js
* Your images must be placed inside app/img/
* Your SVG files must be placed inside app/icons/

#### Gulp is in charge of :
* Running a web server / livereload
* Compiling Sass stuff
* Minify & uglify CSS / JS files
* Optimize images
* Generate SVG icons into a SVG Sprite
* Generate the Sass documentation
* Create the release package

#### Gulp tasks :
* gulp watch
  * Start the web server
  * Open page in browser
  * Handle livereload
  * Watch files
  * Compile SaSS...
* gulp build
  * Clean the dist/
  * Compile SaSS
  * Take all link tags inside <!--build:css css/styles.min.css--> html file and build a file single file
  * Take all script tags inside <!--build:js js/main.min.js --> html file and build a file single file
  * Copy HTML / CSS / JS files inside dist
  * Optimize image from app/img/, then copy to dist/img
  * Sprite all the SVG files and optimize them in app/icons in app/icons/dest/ and then copy to dist/icons

#### Finally :
* Download & install the web-browser [WIB](https://play.google.com/store/apps/details?id=com.appfour.wearbrowser) 
*  Upload your export to the web server 
*  Launch WIB and go to your url page

![Mockup](http://i.imgur.com/BYOdUXh.jpg)


#### Credits :
* [HTML5Boilerplate](https://html5boilerplate.com/)
* [Node](https://nodejs.org/en/)
* [Gulp](http://gulpjs.com/)
* [SaSS](http://sass-lang.com/)
* [CSSTricks](https://css-tricks.com/) 
* [tsbits-starter](https://github.com/tsbits/tsbits-starter) 
* [WIB](https://play.google.com/store/apps/details?id=com.appfour.wearbrowser) 
