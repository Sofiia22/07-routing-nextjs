"use client";

export default function NotePreviewClient({ note }: any) {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
}
