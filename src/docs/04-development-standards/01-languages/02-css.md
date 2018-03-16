---
title: CSS / SASS
---

## CSS plus SASS
Our CSS will be compiled from SASS files. SASS is a popular extension for CSS, which adds excellent functionality to CSS such as the use of variables and auto-prefixing of code for different browser types.

The SASS website (https://sass-lang.com/guide) says the following:

> CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.

### Drupal Integration

A Bootstrap plugin for Drupal is currently being utilised to provide basic styling and a responsive grid system.
This plugin is built using the Bootstrap SASS files, so the front end and back end of the site should be able to merge almost seamlessly.

### Compiling SASS

SASS is a collection of files, therefore a compiler must be used to compile the files into one long CSS file.
The compiler to be used is called Grunt, which provides a lot of useful tools for compiling, autoprefixing and source-mapping the styles written inside the SASS files.

## Naming Conventions

For clarity, the naming convention to adhere to when creating new components is BEM.
BEM Stands for Block, Element, Modifier.

The block component uses a class, such as `.btn` for a button.

Any element that depends upon the block extends the class name using `__`. For example, some text inside a button might use the class `.btn__text`.

A modifier that changes the style of the block will extend the class name using `--`.
For example, a teal button for Acas might use `.btn--teal`.

Some examples are below:

### CSS - how it looks
``` CSS
/* Block component */
.btn {}

/* Element that depends upon the block */
.btn__text {}

/* Modifier that changes the style of the block */
.btn--big {}
.btn--teal {}
```

### HTML - how it looks
``` HTML
<a class="btn btn--teal" href="http://www.acas.org.uk">
  <span class="btn__text">Print</span>
</a>
```
