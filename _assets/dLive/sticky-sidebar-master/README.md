# Sticky Sidebar

jQuery plugin for making smart and high performance sticky sidebars.

[Basic Example](https://abouolia.github.io/sticky-sidebar/examples/basic.html)

[Scrollable Sticky Element](https://abouolia.github.io/sticky-sidebar/examples/scrollable-element.html)

[Multiply Sticky Elements](https://abouolia.github.io/sticky-sidebar/examples/multiply-elements.html)

See for complete documents and examples [abouolia.github.com/sticky-sidebar](http://abouolia.github.com/sticky-sidebar)

## Install

You can download sticky sidebar jquery plugin from Bowser, NPM or just simply download it from here than put ``sticky-sidebar.js`` file in your project folder.

#### Bower 

If you are using bower as package manager:

````
bower install sticky-sidebar
````

#### NPM 

If you are using NPM as package manager: 

````
npm install sticky-sidebar
````

## Usage

Your website's html structure has to be similer to this in order to work:

````html
<div class="main-content">
    <div class="sidebar">
        <div class="sidebar__inner">
            <!-- Content goes here -->
        </div>
    </div>
    <div class="content">
        <!-- Content goes here -->
    </div>
</div>
````

Note that inner sidebar wrapper ``.sidebar__innner`` is optional but highly recommended, if you don't write it yourself, the script will create one for you under class name ``inner-wrapper-sticky``. but this may cause many problems.

For the above example, you can use the following JavaScript:

````html
<script type="text/javascript" src="./js/jquery.js"></script>
<script type="text/javascript" src="./js/sticky-sidebar.js"></script>

<script type="text/javascript">
    $(document).ready(function(){
        $(".sidebar").stickySidebar({
            topSpacing: 20,
            bottomSpacing: 20,
            containerSelector: '.main-content',
            innerWrapperSelector: '.sidebar__inner'
        });	
    });
</script>
````

Make sure to include ``sticky-sidebar.js`` script file after ``jquery.js``.

#### Via data attributes

To easily configure sticky sidebar to any element on the document using attributes, just add ``data-sticky-sidebar`` attribute with no value to element that you want to make it sticky. You can also configure its options, for example ``topSpacing`` option add it as attribute on element like that ``data-top-spacing="50"``

Either by configure container of sticky element by adding ``data-sticky-sidebar-container`` attribute to container of sticky element. Below code will give you 

````html
<div class="container" data-sticky-sidebar-container>
    <div class="sidebar" data-sticky-sidebar data-top-spacing="50">
    	<!-- Content Goes Here -->
    </div>
    <div class="content">
    	<!-- Content Goes Here -->
    </div>
</div>	
````

## Broswers Support

Compatible with Firefox, Chrome, Safari, and IE9+. We looking forward to support IE8+.

## License 

Sticky Sidebar is released under the MIT license. Have at it.

-------

Made by Ahmed Bouhuolia
