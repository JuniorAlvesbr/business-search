import InfoOpenClose from '../../components/InfoOpenClose'

const Component = {
    title: 'Components/InfoOpenClose',
    component: InfoOpenClose,
    parameters: {
        layout: 'centered'
    }
}

export default Component;

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