export interface INoteRequest {
    title: string,
    content: string,
    tags?: string[]
}

export interface INote extends INoteRequest {
    _id: string,
    createdAt: Date
}