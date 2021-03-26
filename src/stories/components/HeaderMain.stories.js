import HeaderMain from '../../components/HeaderMain';
import IconSearch from '../../components/IconSearch';
import LogoMain from '../../components/LogoMain';

const Component = {
    title: 'Components/HeaderMain',
    component: 'HeaderMain'
}

export default Component;

export const Default = () => {
    return (
        <HeaderMain>
            <LogoMain />
            <IconSearch />
        </HeaderMain>
    )
}