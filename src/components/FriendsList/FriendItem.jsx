import propTypes from 'prop-types';
import css from './FriendItem.module.css'

export const FriendItem = ({ Friend: { avatar, name, isOnline } }) => {
     
    return (
        
   <li className={css.item}>
    <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
    
    )
}

FriendItem.propTypes = {
    Friend: propTypes.shape({
        avatar: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        isOnline: propTypes.bool.isRequired,
  }).isRequired,
}