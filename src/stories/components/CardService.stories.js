import CardService from '../../components/CardService/';

export default {
    title: 'Components/CardService',
    components: 'CardService',
    parameters: {
        layout: 'centered'
    }
}

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