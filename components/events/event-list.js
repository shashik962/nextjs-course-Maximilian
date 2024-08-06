import EventItem from './event-item';

function EventList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem />
      ))}
    </ul>
  );
}

export default EventList;