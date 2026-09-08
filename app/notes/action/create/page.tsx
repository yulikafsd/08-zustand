import type { Metadata } from 'next';
import css from './page.module.css';

import NoteForm from '@/components/NoteForm/NoteForm';

export const metadata: Metadata = {
    title: 'Create note | NoteHub',
    description:
        'Create a new note in NoteHub to organize your thoughts and tasks.',
    openGraph: {
        title: 'Create note | NoteHub',
        description:
            'Create a new note in NoteHub to organize your thoughts and tasks.',
        url: 'https://08-zustand-yu-za.vercel.app/notes/action/create',
        images: [
            {
                url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
                width: 1200,
                height: 630,
                alt: 'NoteHub - Create Note Preview',
            },
        ],
    },
};

export default function CreateNote() {
    return (
        <main className={css.main}>
            <div className={css.container}>
                <h1 className={css.title}>Create note</h1>
                <NoteForm />
            </div>
        </main>
    );
}
