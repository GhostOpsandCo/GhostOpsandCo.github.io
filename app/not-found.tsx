import Link from "next/link";
import { Bot } from "@/components/Bot";

export default function NotFound() {
  return (
    <main id="main" className="frame page-head">
      <Bot name="cloud" className="page-bot float" />
      <p className="mono dim">ERR / NOT FOUND</p>
      <h1 className="page-title">404</h1>
      <p className="page-sub"><Link href="/">Nothing here. Back home →</Link></p>
    </main>
  );
}
