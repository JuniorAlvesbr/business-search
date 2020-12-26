import HeaderMain from '../../components/HeaderMain';
import IconSearch from '../../components/IconSearch';
import LogoMain from '../../components/LogoMain';

export default {
    title: 'Components/HeaderMain',
    component: 'HeaderMain'
}

export const Default = () => {
    return (
        <HeaderMain>
            <LogoMain />
            <IconSearch />
        </HeaderMain>
    )
}