import NotesClient from "./NotesClient";

interface NotesPageProps {
  params: {
    slug?: string[];
  };
}

export default function NotesPage({ params }: NotesPageProps) {
  const tag = params.slug?.[0] ?? "all";

  return <NotesClient tag={tag} />;
}
