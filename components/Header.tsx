import { FC } from "react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Header: FC = () => (
  <header id="main-header">
    <Link href="/">
      <Image
        src={logo.src}
        alt="Mobile phone with posts feed on it"
        width={logo.width}
        height={logo.height}
      />
    </Link>
    <nav>
      <ul>
        <li>
          <Link href="/feed">Feed</Link>
        </li>
        <li>
          <Link className="cta-link" href="/new-post">
            New Post
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
