
const ONE_HOUR = 60;

export const reformatRuntime = (runtime) => {

  if (runtime < ONE_HOUR) {
    return `${runtime}m`;
  }

  const hours = Math.floor(runtime / ONE_HOUR);
  const minutes = runtime % ONE_HOUR;

  if (minutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${minutes}m`;
};
