import ServiceWrapper from '../../components/ServiceWrapper';

export default {
    title: 'Components/ServiceWrapper',
    components: 'ServiceWrapper',
    parameters: {
        layout: 'centered'
    }
};

const servicesList = [
    {
        featuredContent: "Em Destaque",
        featured: true,
        stars: 5,
        title: "Cafeteria D’ Arte"
    },
    {
        featuredContent: "Em Destaque",
        featured: false,
        stars: 3,
        title: "Cafeteria Pedro"
    },
    {
        featuredContent: "Em Destaque",
        featured: false,
        stars: 1,
        title: "Cafeteria jose"
    },
]

const Template = args => <ServiceWrapper {...args} />;

export const Default = Template.bind({});

Default.args = {
    list: servicesList
}