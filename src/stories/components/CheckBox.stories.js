import CheckBox from '../../components/CheckBox';

export default {
    title: 'Components/Checkbox',
    components: CheckBox,
    parameters: {
        layout: 'centered'
    }
}

const Template = args => <CheckBox {...args} />

export const Default = Template.bind({});

Default.args = {
    id: "alimentacao",
    label: "Alimentação"
}