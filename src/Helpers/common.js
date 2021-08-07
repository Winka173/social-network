import moment from "moment";

const getTimeDifferenceFromNow = (time) => {
  const now = moment(new Date());
  const diff = moment.duration(now.diff(moment(time)));

  if (diff.asSeconds() < 5) {
    return "Just Now";
  } else if (diff.asMinutes() < 1) {
    return `${diff.asSeconds().toFixed(0)}s`;
  } else if (diff.asHours() < 1) {
    return `${diff.asMinutes().toFixed(0)}m`;
  } else if (diff.asHours() < 24) {
    return `${diff.asHours().toFixed(0)}h`;
  } else {
    return `${diff.asDays().toFixed(0)}d`;
  }
};

export { getTimeDifferenceFromNow };
