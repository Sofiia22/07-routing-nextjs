import NotesClient from "./NotesClient";

export default async function NotesPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const tag = slug[0] ?? "all";

  return <NotesClient tag={tag} />;
}
