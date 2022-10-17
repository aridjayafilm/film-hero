/**
 * WhereToWatchMethod.js
 * Component that allows the user to choose between where to Rent, Buy or Stream
 */
import Button from "../atoms/Button";
import MethodContainer from "../atoms/MethodContainer";

/**
 * Where to watch method component
 * @param props
 * @returns {JSX.Element}
 */
const WhereToWatchMethod = (props) => {
    return (
        <MethodContainer>
            <Button active={props.watchMethod === 'flatrate'} onClick={() => props.setWatchMethod('flatrate')}>Stream</Button>
            <Button active={props.watchMethod === 'buy'} onClick={() => props.setWatchMethod('buy')}>Buy</Button>
            <Button active={props.watchMethod === 'rent'} onClick={() => props.setWatchMethod('rent')}>Rent</Button>
        </MethodContainer>
    )
}

export default WhereToWatchMethod
