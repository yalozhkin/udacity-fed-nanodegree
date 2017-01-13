# Website Performance Optimization project

Made on Udacity Frontend Nanodegree course.

A simple optimization workflow based on Node.js (npm) modules and driven by Gulp.

## How it works

Install npm modules:

`$ npm install`

Run gulp default task to perform optimization funnel:

`$ gulp`

All is done! Optimized files are located in the `dist` directory.

## Project optimizations

Overview of implemented tweaks.

### Adjustments in the `index.html`

- Add the `print` media query in the `link` to defer the `print.css` styles
- Inline critical styles for the above the fold content: `html`, `body`, `header`, `hero`
- Defer non-critical JS scripts using the `async` parameter in the `script` tag
- Defer non-critical styles using inline `loadDeferredStyles` function in the and of the `body`

### Adjustments in the `views/js/main.js`

- Declare variables used in `for` loops before the loops to avoid repeating declaration
- Removing redundant calculations from the `changePizzaSize` function
- Define both slider label and pizza size in the `changePizzaSize` function switch cases
- Reduce number of background moving pizzas because 200 was too too many for the screen
