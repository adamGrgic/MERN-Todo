export default interface TodoItem {
    id: string,
    title: string,
    description?: string,
    isDone: boolean,
    dateCreated: Date,
    dateCompleted?: Date
}

