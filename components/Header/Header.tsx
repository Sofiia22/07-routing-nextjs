import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <Link href="/notes/filter/all" className={css.logo}>
        NoteHub
      </Link>

      <nav>
        <Link href="/notes/filter/all" className={css.link}>
          Notes
        </Link>
      </nav>
    </header>
  );
}
