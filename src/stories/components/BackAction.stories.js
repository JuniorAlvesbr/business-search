import BackAction from '../../components/BackAction';

export default {
    title: 'Components/BackAction',
    components: BackAction,
    parameters: {
        layout: 'centered'
    }
}

export const Default = () => <BackAction as="a" />