const states = ['Print', 'Download'];
const variants = [];

states.forEach(s => {
  variants.push({
    name: `${s}`,
    context: {
      text: `${s}`,
      state: s,
      href: '#'
    }
  })
});

module.exports = {
  title: "Button",
  collated: true,
  status: "wip",
  context: {
    "text": "Call to Action",
    "href": "#"
  },
  variants: variants
};
