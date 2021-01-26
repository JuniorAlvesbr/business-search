import MenuFilter from '../../components/MenuFilter';

export default {
    title: 'Components/MenuFilter',
    components: MenuFilter
};

const Template = (args) => <MenuFilter {...args} />;

export const Open = Template.bind({});
Open.args = {
    active: true
};

export const Close = Template.bind({});
Close.args = {
    active: false
};