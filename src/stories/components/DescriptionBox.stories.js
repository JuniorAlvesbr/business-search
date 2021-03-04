import DescriptionBox from '../../components/DescriptionBox';

export default {
    title: 'Components/DescriptionBox',
    components: DescriptionBox,
    parameters: {
        layout: 'centered'
    }
}

export const Default = () => (
    <DescriptionBox>
        Aqui é só felicidade e café com um bom sol no verão e no inverno.
        Gostosas sopas para deixar o seu dia mais quente e feliz.
        Aqui o proprietário poderá escrever o que quiser sobre o seu café;
    </DescriptionBox>
);