import CheckBox from '../../components/CheckBox';

const Component = {
    title: 'Components/Checkbox',
    components: CheckBox,
    parameters: {
        layout: 'centered'
    }
}

export default Component;

const Template = args => <CheckBox {...args} />

export const Default = Template.bind({});

Default.args = {
    id: "alimentacao",
    label: "Alimentação"
}