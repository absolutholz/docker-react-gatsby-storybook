export default {
	title: 'Semantics/Anchor',
};

const Template = (args) => <a href="#">{ args.content }</a>;

export const Anchor = Template.bind({});
Anchor.args = {
	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
