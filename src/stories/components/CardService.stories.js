import CardService from '../../components/CardService/';

const Component = {
    title: 'Components/CardService',
    components: 'CardService',
    parameters: {
        layout: 'centered'
    }
}

export default Component;

const Template = args => <CardService {...args} />

export const Featured = Template.bind({})
export const NoFeatured = Template.bind({})

Featured.args = {
    featuredContent: "Em Destaque",
    featured: true,
    stars: 5,
    title: "Cafeteria D’ Arte",
}

NoFeatured.args = {
    featuredContent: "Em Destaque",
    featured: false,
    stars: 2,
    title: "Cafeteria D’ Arte",
}