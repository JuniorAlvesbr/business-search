import ServiceWrapperStyle from "./styles";
import CardService from "../CardService";

function ServiceWrapper({ list }) {
    console.log(list)
    return (
        <ServiceWrapperStyle>
            {list.map((item) => <CardService key={item.title} {...item} />)}
        </ServiceWrapperStyle>
    )
}

export default ServiceWrapper;