import BackAction from '../../components/BackAction';

const Component = {
    title: 'Components/BackAction',
    components: BackAction,
    parameters: {
        layout: 'centered'
    }
};

export default Component;

const Template = (args) => <BackAction as="a" content={args.content} />;

export const Default = Template.bind({});
Default.args = {
    content: "Voltar"
}
