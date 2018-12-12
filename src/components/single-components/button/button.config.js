const states = ['primary', 'secondary'];
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
  variants: variants
};
