const addZerobefore = (time) => {
  if (time < 10) {
    return '0' + time;
  }
  return '' + time;
};
export const displayTime = (centisecond) => {
  let minutes = 0,
    seconds = 0;
  if (centisecond < 0) {
    centisecond = 0;
  }
  if (centisecond < 100) {
    return '00:00:' + addZerobefore(centisecond);
  }
  let remainCentisecond = centisecond % 100;
  seconds = (centisecond - remainCentisecond) / 100;
  if (seconds < 60) {
    return (
      '00:' + addZerobefore(seconds) + ':' + addZerobefore(remainCentisecond)
    );
  }
  let remainSecond = seconds % 60;
  minutes = (seconds - remainSecond) / 60;
  return (
    addZerobefore(minutes) +
    ':' +
    addZerobefore(seconds) +
    ':' +
    addZerobefore(remainCentisecond)
  );
};
