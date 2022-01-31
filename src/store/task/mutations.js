
export const addTask = (state, taskMessage) => {
    state.tasks.push({
      message: taskMessage,
      isEditing: false,
      isTrashed: false,
    });
}
export const removeTaskByIndex = (state, index) => {
    state.tasks.splice(index, 1);
}