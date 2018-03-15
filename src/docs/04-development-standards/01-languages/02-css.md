---
title: CSS
---


## CSS (SASS)

CSS3 is the latest edition of CSS.

### Naming Conventions

For clarity, the naming convention to adhere to when creating new components is BEM.
BEM Stands for Block, Element, Modifier.

#### HTML Example of BEM
``` HTML
<a class="btn btn--teal" href="http://www.acas.org.uk">
  <span class="btn__text">Subscribe</span>
</a>
```


#### CSS Example of BEM
``` CSS
/* Block component */
.btn {}

/* Element that depends upon the block */
.btn__text {}

/* Modifier that changes the style of the block */
.btn--big {}
.btn--teal {}
```
