import {Sub} from "../interfaces/types";

interface Props {
    subs: Array<Sub>
}

const List = ({subs}: Props) => {

    return (
        <ul>
            {subs.map(sub => {
                return(
                    <li key={sub.nick}>
                        <p>{sub.nick}</p>
                        <p>{sub.description}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default List;