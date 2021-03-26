import PhotoPreview from '../../components/PhotoPreview';
import Coffee from '../../assets/images/coffee.svg'

const Component = {
    title: 'Components/PhotoPreview',
    components: PhotoPreview,
    parameters: {
        layout: 'centered'
    }
}

export default Component;

export const Default = () => <PhotoPreview src={Coffee} />