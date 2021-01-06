import CardService from '../../components/CardService';
import ServiceWrapper from '../../components/ServiceWrapper';

export default {
    title: 'Components/ServiceWrapper',
    components: 'ServiceWrapper',
    parameters: {
        layout: 'centered'
    }
};

export const Default = () => (
    <ServiceWrapper>
        <CardService />
        <CardService />
        <CardService />
        <CardService />
    </ServiceWrapper>
);