import BackAction from '../../components/BackAction';

export default {
    title: 'Components/BackAction',
    components: BackAction,
    parameters: {
        layout: 'centered'
    }
};

const Template = (args) => <BackAction as="a" content={args.content} />;

export const Default = Template.bind({});

Default.args = {
    content: "Voltar"
}