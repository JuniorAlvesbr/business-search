import Title from '../../components/Title'

export default {
    title: 'Components/Title',
    components: Title,
    parameters: {
        layout: 'centered'
    }
}

const Template = args => <Title {...args} />

export const Default = Template.bind({});
Default.args = {
    children: "Title"
}