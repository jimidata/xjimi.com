# xjimi.com

This is the official website of [xjimi.com](xjimi.com).

## Project tree

```
.
├── Gruntfile.js
├── README.md
├── _includes
│   ├── footer.html.haml
│   ├── head.html.haml
│   └── header.html.haml
├── _pages
│   ├── index.html.haml
│   ├── mobile
│   ├── products
├── _sites
├── bower.json
├── bower_components
│   ├── foundation
│   ├── jquery
├── humans.txt
├── img
│   ├── avatars
│   ├── callout.png
│   ├── cases
├── js
│   ├── app.js
│   ├── index.js
├── node_modules
│   ├── grunt
├── package.json
├── resources
│   ├── backgroundaudio.m4v
│   ├── location1.mov
│   └── location2.mov
├── robots.txt
├── scss
│   ├── _settings.scss
│   ├── animate.css
│   ├── app.scss
└── stylesheets
    ├── animate.css
    ├── app.css
```

### dependencies

1. [bower](http://bower.io/)

    We use this tool to manage and install web dependent packages, such as css framework and js libs.

2. [haml](http://haml.info/)

    Writing pure html is a very fussy job, and html files are difficult to be reused. While haml is one of the most powerful html template language, which will save much of developing time.

3. [scss](http://sass-lang.com/) and [Foundation](http://foundation.zurb.com/)

    For css framework, Foundation is the most advanced responsive front-end framework in the world. And as it is built with scss, so scss would be the better css pre-processor than less here.

4. [jQuery](https://jquery.com)

    Our site is really a small one, jQuery is flexible for it.

5. [grunt](http://gruntjs.com/)

    Why use a task runner? In one word: automation (which means easier and safer to complete the boring jobs).

## install

1. install [node.js](https://nodejs.org/)/[io.js](https://iojs.org) (which includes npm, iojs is preferred.)

2. install some commands

    `$ sudo npm install -g bower grunt grunt-cli`

3. clone the code to your workspace

    `$ git clone git@github.com:jimidata/xjimi.com.git`

    `$ cd xjimi.com`

4. install dev and code dependencies

    `$ npm install`

    `$ bower install`

5. build the website by running the script

    `$ grunt`

6. configure the nginx's root directory to be the *xjimi.com/_sites*. Then reload nginx.

### update code

Every time code is updated, you should run `grunt` to build the website. `grunt watch` is the better choice when you are debugging.
