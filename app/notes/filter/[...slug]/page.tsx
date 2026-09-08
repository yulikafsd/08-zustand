import { Metadata } from 'next';
import {
    QueryClient,
    HydrationBoundary,
    dehydrate,
} from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import type { NoteTag } from '@/types/note';

interface FilterNotesPageProps {
    params: Promise<{
        slug?: string[];
    }>;
}

export async function generateMetadata({
    params,
}: FilterNotesPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const rawTag = resolvedParams.slug?.[0];

    const tag: NoteTag | undefined =
        rawTag && rawTag !== 'all' ? (rawTag as NoteTag) : undefined;

    const filterName = tag ? tag.charAt(0).toUpperCase() + tag.slice(1) : 'All';
    const title = `Notes filtered by "${filterName}" | NoteHub`;
    const description = `Browse all notes categorized under the "${filterName}" tag in NoteHub.`;
    const url = `https://08-zustand-yu-za.vercel.app/notes/filter/${rawTag ?? 'all'}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: 'NoteHub',
            images: [
                {
                    url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
                    width: 1200,
                    height: 630,
                    alt: `NoteHub - Notes filtered by ${filterName}`,
                },
            ],
            type: 'website',
        },
    };
}

export default async function FilterNotesPage({
    params,
}: FilterNotesPageProps) {
    const resolvedParams = await params;
    const rawTag = resolvedParams.slug?.[0];

    const tag: NoteTag | undefined =
        rawTag && rawTag !== 'all' ? (rawTag as NoteTag) : undefined;

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['notes', '', 1, tag || ''],
        queryFn: () => fetchNotes('', 1, tag),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotesClient tag={tag} />
        </HydrationBoundary>
    );
}
