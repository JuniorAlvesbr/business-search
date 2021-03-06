import WrapperBusiness from '../../components/WrapperBusiness';

export default {
    title: 'Components/WrapperBusiness',
    components: WrapperBusiness,
    parameters: {
        layout: 'centered'
    }
}

const Template = args => <WrapperBusiness {...args} />;

export const Default = Template.bind({});

Default.args = {
    stars: 5,
    title: "Cafeteria D’ Arte",
    description: "Aqui é só felicidade e café com um bom sol no verão e no inverno. Gostosas sopas para deixar o seu dia mais quente e feliz. Aqui o proprietário poderá escrever o que quiser sobre o seu café;"
}