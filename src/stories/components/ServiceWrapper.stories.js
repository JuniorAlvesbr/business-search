import ServiceWrapper from '../../components/ServiceWrapper';

const Component = {
    title: 'Components/ServiceWrapper',
    components: 'ServiceWrapper',
    parameters: {
        layout: 'centered'
    }
};

export default Component;

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