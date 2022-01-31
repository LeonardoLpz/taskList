export const addTask = (context, taskMessage) => {
    context.commit('addTask', taskMessage);
}
export const removeTaskByIndex = (context, index) => {
    context.commit('removeTaskByIndex', index);
}
export const editTask = (context, index) => {
    context.commit('editTask', index);
}