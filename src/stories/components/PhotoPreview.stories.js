import PhotoPreview from '../../components/PhotoPreview';
import Coffee from '../../assets/images/coffee.svg'

export default {
    title: 'Components/PhotoPreview',
    components: PhotoPreview,
    parameters: {
        layout: 'centered'
    }
}

export const Default = () => <PhotoPreview src={Coffee} />