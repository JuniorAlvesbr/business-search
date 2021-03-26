import Stars from '../../components/Stars';

const Component = {
    title: 'Components/Stars',
    components: 'Stars',
    parameters: {
        layout: 'centered'
    }
}

export default Component;

const Template = args => <Stars {...args} />

export const OneStar = Template.bind({});
OneStar.args = {
    amount: 1
}

export const TwoStar = Template.bind({});
TwoStar.args = {
    amount: 2
}

export const TreeStar = Template.bind({});
TreeStar.args = {
    amount: 3
}

export const FourStar = Template.bind({});
FourStar.args = {
    amount: 4
}

export const FiveStar = Template.bind({});
FiveStar.args = {
    amount: 5
}
