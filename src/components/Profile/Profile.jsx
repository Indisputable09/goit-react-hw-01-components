import { ProfileContainer, DescriptionContainer, Image, DescriptionText, List, ListItem, ListItemLabel, ListItemNum } from 'components/Profile/Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileContainer>
  <DescriptionContainer>
    <Image
      src={avatar}
    />
    <DescriptionText>{username}</DescriptionText>
    <DescriptionText>@{tag}</DescriptionText>
    <DescriptionText>{location}</DescriptionText>
  </DescriptionContainer>

  <List>
    <ListItem>
      <ListItemLabel>Followers</ListItemLabel>
      <ListItemNum> {stats.followers}</ListItemNum>
    </ListItem>
    <ListItem>
      <ListItemLabel>Views</ListItemLabel>
      <ListItemNum> {stats.views}</ListItemNum>
    </ListItem>
    <ListItem>
      <ListItemLabel>Likes</ListItemLabel>
      <ListItemNum> {stats.likes}</ListItemNum>
    </ListItem>
  </List>
</ProfileContainer>
    )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}