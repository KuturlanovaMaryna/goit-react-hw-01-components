
import propTypes from 'prop-types';
import css from './FriendsList.module.css'
import { FriendItem } from './FriendItem'

export const FriendsList = ({ friends }) => {
    return (
              
        <ul className={css.friendList}>
        {friends.map(friend=> (
          <FriendItem key={friend.id} Friend={friend} />
        ))}
      </ul>
    );
}

FriendsList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
        id: propTypes.string.isRequired,
    })
  ).isRequired,
}