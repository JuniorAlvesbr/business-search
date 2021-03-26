import ButtonFixed from '../../components/ButtonFixed';

const Component = {
    title: 'Components/ButtonFixed',
    component: 'ButtonFixed'
};

export default Component;

const Template = args => <ButtonFixed  {...args} />

export const Default = Template.bind({});

Default.args = {
    children: 'Insira o texto'
}