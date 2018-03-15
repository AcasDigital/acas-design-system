---
title: Browser Compliance
---

## Browser Support

Browser support is dictated by the GDS Service Manual.

### Browser List

The full list of browsers can be found in the GDS Service Manual here:
https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices#browsers-to-test-in


#### Functional Browsers

The list of functional browsers is shorter than that of fully compliant browsers - only including three legacy Internet Explorer browsers.
* Internet Explorer 8
* Internet Explorer 9
* Internet Explorer 10

Functional refers to the ability to read, naviate and engage with the site, but does not require the site to be 'pixel perfect'.
This is useful as it means that we can still utilise CSS3 for elements on the site, as long as the content is readable.

#### Backwards Compatibility

We will be using HTML5Shiv, a JavaScript package, to make our semantic HTML5 elements backwards compatible with our functional browsers.

https://github.com/aFarkas/html5shiv

The product description states the following:
> The HTML5 Shiv enables use of HTML5 sectioning elements in legacy Internet Explorer and provides basic HTML5 styling for Internet Explorer 6-9, Safari 4.x (and iPhone 3.x), and Firefox 3.x.
