import { createGlobalStyle } from 'styled-components';

const Gap = createGlobalStyle`
    :root {
        --gap-very-smaller: 5px;
        --gap-smaller: 10px;
        --gap-small: 16px;
        --gap-medium: 30px;
    }
`;

export default Gap;