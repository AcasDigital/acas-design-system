'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

// Use the acas theme
const acasTheme = require('@frctl/acas-fractal-theme');
fractal.web.theme(acasTheme);
/*
 * Give your project a title.
 */
fractal.set('project.title', 'Acas Component Library');

/*
 * Tell Fractal where to look for files
 */
fractal.components.set('path', path.join(__dirname, 'src/components'));
fractal.docs.set('path', path.join(__dirname, 'src/docs'));
fractal.web.set('static.path', path.join(__dirname, 'assets'));

/*
 * Tell Fractal where to build to
 */
fractal.web.set('builder.dest', __dirname + '/build');
