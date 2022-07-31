import ApiClientService from './ApiClientService';
async function checkOffChore(_id, prevDate) {
  const dateLastCompleted = new Date();
  await ApiClientService.editChore(_id, {
    dateLastCompleted,
    prevDateLastCompleted: prevDate,
  });
}
async function uncheckChore(_id, retrievedDate) {
  const defaultDate = new Date(0);
  await ApiClientService.editChore(_id, {
    dateLastCompleted: retrievedDate,
    prevDateLastCompleted: defaultDate,
  });
}

export { checkOffChore, uncheckChore };
