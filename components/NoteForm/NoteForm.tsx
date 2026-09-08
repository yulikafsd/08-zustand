'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';
import toast from 'react-hot-toast';
import { useCreateNote } from '../../hooks/useNotes';
import { NOTE_TAGS, type NoteTag } from '../../types/note';
import css from './NoteForm.module.css';
import { useNoteDraftStore } from '@/lib/store/noteStore';

interface NoteFormProps {
    tags?: readonly NoteTag[];
}

export default function NoteForm({ tags = NOTE_TAGS }: NoteFormProps) {
    const router = useRouter();
    const fieldId = useId();
    const { mutate: createNoteMutation, isPending } = useCreateNote();
    const { draft, setDraft, clearDraft } = useNoteDraftStore();

    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        setDraft({
            ...draft,
            [event.target.name]: event.target.value as NoteTag,
        });
    };
    const handleCancel = () => router.back();

    const handleSubmit = (formData: FormData) => {
        const title = (formData.get('title') as string)?.trim();
        const content = (formData.get('content') as string)?.trim();
        const tag = formData.get('tag') as NoteTag;

        if (!title || !tag) {
            toast.error('Title and Tag are required fields.');
            return;
        }

        createNoteMutation(
            {
                title,
                content,
                tag,
            },
            {
                onSuccess: () => {
                    clearDraft();
                    toast.success('Note created successfully!');
                    router.back();
                },
                onError: (error) => {
                    toast.error(
                        error instanceof Error
                            ? error.message
                            : 'Failed to create note. Please try again.',
                    );
                },
            },
        );
    };

    return (
        <form action={handleSubmit} className={css.form}>
            <div className={css.formGroup}>
                <label htmlFor={`${fieldId}-title`}>Title</label>
                <input
                    id={`${fieldId}-title`}
                    type="text"
                    name="title"
                    value={draft?.title ?? ''}
                    onChange={handleChange}
                    className={css.input}
                    required
                />
            </div>

            <div className={css.formGroup}>
                <label htmlFor={`${fieldId}-content`}>Content</label>
                <textarea
                    id={`${fieldId}-content`}
                    name="content"
                    value={draft?.content ?? ''}
                    onChange={handleChange}
                    rows={8}
                    className={css.textarea}
                />
            </div>

            <div className={css.formGroup}>
                <label htmlFor={`${fieldId}-tag`}>Tag</label>
                <select
                    id={`${fieldId}-tag`}
                    name="tag"
                    className={css.select}
                    value={draft?.tag ?? 'Todo'}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>
                        -- Choose tag --
                    </option>
                    {tags.map((tag) => (
                        <option key={tag} value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>
            </div>

            <div className={css.actions}>
                <button
                    type="button"
                    onClick={handleCancel}
                    className={css.cancelButton}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className={css.submitButton}
                    disabled={isPending}
                >
                    {isPending ? 'Creating...' : 'Create note'}
                </button>
            </div>
        </form>
    );
}
