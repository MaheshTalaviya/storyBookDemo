
import {CardLayout} from './Card' 
interface Props {}

export const CardIndex: React.FC<Props> = (props) => {

    return(<>
    {
        [1,2,3].map(()=><CardLayout/>)
    }</>)

};