import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";

export default async function NoteModal({
  params,
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <NotePreview id={params.id} />
    </Modal>
  );
}
