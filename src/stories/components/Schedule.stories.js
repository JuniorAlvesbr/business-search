import Schedule from '../../components/Schedule'

export default {
    title: 'Components/Schedule',
    components: Schedule,
    parameters: {
        layout: 'centered'
    }
}

export const Default = () => <Schedule states="closed" />