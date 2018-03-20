const headerSizes = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
const headerVariants = [];

headerSizes.forEach((headerSize, i) => {
  headerVariants.push({
    name: headerSize.toLowerCase(),
    context: {size: i + 1, text: `Header ${headerSize}`}
  });
});

module.exports = {
  title: 'Headers',
  collated: true,
  status: 'wip',
  variants: headerVariants,
  default: 'one'
};
