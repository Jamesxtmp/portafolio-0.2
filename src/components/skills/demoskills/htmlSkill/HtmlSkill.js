import { moveToOpenSkill } from '../../hooks/useMoveToOpenSkill'

import './htmlSkill.css'


const HtlmSkill = ({ interval }) => {
    moveToOpenSkill('html', interval)
    return(
        <div>
            html
        </div>
    )
}
export default HtlmSkill