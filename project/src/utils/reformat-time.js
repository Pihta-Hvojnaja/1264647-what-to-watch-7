
const OneHour = {
  MINUTES: 60,
  SECONDS: 3600,
};


export const reformatRuntime = (runtime) => {

  if (runtime < OneHour.MINUTES) {
    return `${runtime}m`;
  }

  const hours = Math.floor(runtime / OneHour.MINUTES);
  const minutes = runtime % OneHour.MINUTES;

  if (minutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${minutes}m`;
};


export const reformatTimeVideo = (sourceSeconds) => {
  const seconds = (sourceSeconds % OneHour.MINUTES).toString().padStart(2, '0');

  if (sourceSeconds >= OneHour.SECONDS) {
    const hours = Math.floor(sourceSeconds / OneHour.SECONDS).toString().padStart(2, '0');
    const minutes = (Math.floor(sourceSeconds / OneHour.MINUTES) - (hours * OneHour.MINUTES)).toString().padStart(2, '0');
    return `-${hours}:${minutes}:${seconds}`;

  } else {
    const minutes = Math.floor(sourceSeconds / OneHour.MINUTES).toString().padStart(2, '0');
    return `-${minutes}:${seconds}`;
  }
};
