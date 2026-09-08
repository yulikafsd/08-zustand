import { Metadata } from 'next';
import Link from 'next/link';
import css from './page.module.css';

export const metadata: Metadata = {
    title: '404 - Page Not Found | NoteHub',
    description:
        'The page you are looking for does not exist. Return to NoteHub to manage your notes.',
    metadataBase: new URL('https://08-zustand-yu-za.vercel.app'),
    openGraph: {
        title: '404 - Page Not Found | NoteHub',
        description:
            'The page you are looking for does not exist. Return to NoteHub to manage your notes.',
        url: 'https://08-zustand-yu-za.vercel.app/404',
        images: [
            {
                url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
                width: 1200,
                height: 630,
                alt: 'NoteHub Not Found Preview',
            },
        ],
    },
};

export default function NotFound() {
    return (
        <div className={css.container}>
            <h1 className={css.title}>404 - Page not found</h1>
            <p className={css.description}>
                Sorry, the page you are looking for does not exist.
            </p>
            <Link className={css.link} href="/">
                &lt;-- Go back home
            </Link>
        </div>
    );
}
