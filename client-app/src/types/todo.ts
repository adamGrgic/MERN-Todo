export default interface TodoItem {
    id: number,
    title: string,
    description?: string,
    isDone: boolean,
    dateCreated: Date,
    dateCompleted?: Date
}