import Title from '../../components/Title'

const Component = {
    title: 'Components/Title',
    components: Title,
    parameters: {
        layout: 'centered'
    }
}

export default Component;

const Template = args => <Title {...args} />

export const Default = Template.bind({});
Default.args = {
    children: "Title"
}