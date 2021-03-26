import InfoOpenClose from '../../components/InfoOpenClose'

export default {
    title: 'Components/InfoOpenClose',
    component: InfoOpenClose,
    parameters: {
        layout: 'centered'
    }
}

const Templates = args => <InfoOpenClose {...args} />

export const Open = Templates.bind({})
Open.args = {
    states: 'open',
    children: "Aberto Agora",
}

export const Closed = Templates.bind({})
Closed.args = {
    states: "closed",
    children: "Fechado Agora"
}