function updateChoreData(field, setChoreData) {
  return (newFieldVal) => {
    if (newFieldVal) {
      setChoreData((oldVal) => {
        return { ...oldVal, [field]: newFieldVal };
      });
    }
  };
}

function formatTime(field, setChoreData, setTime, setDisableSubmit, time) {
  return (newFieldVal) => {
    setChoreData((oldVal) => {
      if (field === 'hours')
        return {
          ...oldVal,
          timeToComplete: Number(time.mins) + Number(newFieldVal * 60),
        };
      if (field === 'mins')
        return {
          ...oldVal,
          timeToComplete: Number(newFieldVal) + Number(time.hours * 60),
        };
    });
    setTime((oldVal) => {
      return { ...oldVal, [field]: newFieldVal };
    });
    if (
      (field === 'hours' && newFieldVal > 23) ||
      (field === 'mins' && newFieldVal > 59)
    ) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  };
}

export { formatTime, updateChoreData };
