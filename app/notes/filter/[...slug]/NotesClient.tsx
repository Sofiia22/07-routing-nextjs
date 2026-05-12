"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api/notes";
import NoteList from "@/components/NoteList/NoteList";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import css from "./NotesClient.module.css";

export default function NotesClient({ tag }: { tag: string }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const apiTag = tag === "all" ? undefined : tag;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes", search, page, apiTag],
    queryFn: () => fetchNotes(search, page, apiTag),
  });

  return (
    <div className={css.container}>
      <SearchBox
        value={search}
        onChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
      />

      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong.</p>}

      {data && <NoteList notes={data.notes} />}

      {data && data.totalPages > 1 && (
        <Pagination
          pageCount={data.totalPages}
          currentPage={page}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}
