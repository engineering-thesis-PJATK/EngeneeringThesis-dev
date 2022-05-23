export interface KanbanElement {
    id: number;
    name: string;
    topic: string;
    dueDate: string;
    type: number;
}
export interface UpdatedElement {
    elementId: number;
    elementType: number;
    Status: string;
}