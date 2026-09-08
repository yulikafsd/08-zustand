export const NOTE_TAGS = [
    'Work',
    'Personal',
    'Meeting',
    'Shopping',
    'Todo',
] as const;

export type NoteTag = (typeof NOTE_TAGS)[number];

export interface Note {
    id: string;
    title: string;
    content: string;
    categoryId: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    tag: NoteTag;
}

export interface NewNote {
    title: string;
    content: string;
    tag: NoteTag;
}
