/**
 * WhereToWatchIcon.js
 * Shows an icon for a streaming service
 */
import Icon from '../atoms/Icon'

/**
 * Component to draw the where to watch icon
 * @param props
 * @returns {JSX.Element}
 */

const WhereToWatchIcon = (props) => {
  return (<Icon width='40px'src={`http://image.tmdb.org/t/p/w500${props.data.logo_path}`} alt={props.data.provider_name}/>);
};

export default WhereToWatchIcon
