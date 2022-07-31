import {
  Section,
  Title,
  StatList,
  ListItem,
  ListItemLabel,
  ListItemNum,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats = [] }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id}>
            <ListItemLabel> {label}</ListItemLabel>
            <ListItemNum> {percentage}</ListItemNum>
          </ListItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
