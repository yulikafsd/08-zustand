# NoteHub Application

A responsive multi-page web application built with Next.js (App Router), TypeScript, TanStack Query, and Zustand that allows users to manage personal notes, search by keywords, filter by categories using parallel routes, paginate through records, create notes with auto-saving draft state, and preview details using intercepted modal routes.

## 🚀 Live Demo

[View Live App on Vercel](https://08-zustand-yu-za.vercel.app/)

## 🛠️ Tech Stack & Tools

- **Next.js (App Router)** — React framework for server rendering, parallel and intercepted routing
- **React** — UI library
- **Zustand** — Lightweight client state management with `persist` middleware
- **@tanstack/react-query** — Server-state management, SSR hydration, and data caching
- **TypeScript** — Static typing
- **Axios** — Promise-based HTTP client for API requests
- **React Paginate** — Component for pagination navigation
- **React Hot Toast** — Notifications for user feedback and error alerts
- **Use-Debounce** — Debounced search input handler
- **CSS Modules** — Scoped component styling
- **next/font** — Optimized global typography with the Roboto font

## ✨ Features

- **SEO & Open Graph Optimization**: Comprehensive metadata coverage using static `metadata` and dynamic `generateMetadata` functions across all key routes, complete with Open Graph previews and Twitter card integration.
- **Global Typography**: Pre-configured global Google Font (`Roboto`) using `next/font/google` for optimal web font delivery without layout shifts.
- **Dedicated Note Creation Route**: Independent creation view (`/notes/action/create`) with isolated form workflows.
- **Draft Persistence with Zustand**: Auto-saves in-progress note creation forms directly to `localStorage` via Zustand `persist` middleware, ensuring work is preserved across refreshes and page exits.
- **Tag Filtering (Parallel Routes)**: Filter notes by categories (`/notes/filter/[...slug]`) with a persistent dynamic sidebar rendered via the `@sidebar` parallel slot without full page reloads.
- **Modal Preview (Intercepting Routes)**: Intercepts `/notes/[id]` navigation to display note details in a modal dialog (`@modal/(.)notes/[id]`) over the current page while preserving the full-page view on direct link access or page reload.
- **Custom 404 Page**: Handled via `not-found.tsx` for non-existent routes with dedicated metadata.
- **Server Prefetch & Hydration**: Prefetches initial note queries on the server via `prefetchQuery` and `HydrationBoundary` for fast initial loads without layout shifts.
- **Search & Debounce**: Real-time keyword search with debounced query updates.
- **Pagination**: Server-side page navigation with seamless transitions.
- **Native Form Handling**: Standard HTML forms integrated with action handlers and Zustand state synchronization.
- **Dynamic Note Details**: Dedicated dynamic page (`/notes/[id]`) for direct navigation.
- **State Management & Invalidation**: Automatic cache invalidation upon creating or deleting notes.
- **Error & Loading States**: Native Next.js `loading.tsx` and `error.tsx` handlers for graceful fallback states.
- **Secure Environment Variables**: Handles API authentication via `NEXT_PUBLIC_NOTEHUB_TOKEN`.

## 📂 Project Structure

```text
├── app/
│   ├── @modal/
│   │   ├── default.tsx
│   │   └── (.)notes/
│   │       └── [id]/
│   │           ├── NotePreview.client.tsx
│   │           ├── NotePreview.module.css
│   │           ├── default.tsx
│   │           └── page.tsx
│   ├── notes/
│   │   ├── action/
│   │   │   └── create/
│   │   │       ├── page.module.css
│   │   │       └── page.tsx
│   │   ├── filter/
│   │   │   ├── @sidebar/
│   │   │   │   ├── default.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── SidebarNotes.module.css
│   │   │   ├── [...slug]/
│   │   │   │   ├── error.tsx
│   │   │   │   ├── Notes.client.tsx
│   │   │   │   ├── NotesPage.module.css
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── LayoutNotes.module.css
│   │   └── [id]/
│   │       ├── error.tsx
│   │       ├── NoteDetails.client.tsx
│   │       ├── NoteDetails.module.css
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.module.css
│   └── page.tsx
├── components/
│   ├── ErrorMessage/
│   │   ├── ErrorMessage.tsx
│   │   └── ErrorMessage.module.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── Modal/
│   │   ├── Modal.tsx
│   │   └── Modal.module.css
│   ├── NoteForm/
│   │   ├── NoteForm.tsx
│   │   └── NoteForm.module.css
│   ├── NoteList/
│   │   ├── NoteList.tsx
│   │   └── NoteList.module.css
│   ├── Pagination/
│   │   ├── Pagination.tsx
│   │   └── Pagination.module.css
│   ├── SearchBox/
│   │   ├── SearchBox.tsx
│   │   └── SearchBox.module.css
│   └── TanStackProvider/
│       └── TanStackProvider.tsx
├── hooks/
│   └── useNotes.ts
├── lib/
│   ├── api.ts
│   └── store/
│       └── noteStore.ts
├── types/
│   └── note.ts
├── .env.local
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## 💻 Getting Started Locally

1. Clone the repository:

    ```bash
    git clone [https://github.com/yulikafsd/08-zustand.git](https://github.com/yulikafsd/08-zustand.git)
    ```

2. Navigate to the project directory:

    ```bash
    cd 08-zustand
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables:
   Create a .env.local file in the root directory and add your NoteHub API Token:

    ```text
     NEXT_PUBLIC_NOTEHUB_TOKEN=your_notehub_token_here
    ```

5. Start the development server:
    ```Bash
    npm run dev
    ```
