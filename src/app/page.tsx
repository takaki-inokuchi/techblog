import Image from "next/image";
import styles from "./page.module.css";
import Title from "./title/title";

// app/page.tsx

export default function Home() {
  return (
    <div>
      <div>
        <Title />
      </div>
      <button className="btn btn-primary">btn-primary</button>
      <button className="btn btn-secondary">btn-secondary</button>
      <button className="btn btn-accent">btn-accent</button>
      <button className="btn btn-error btn-xs">btn-error xs</button>
    </div>
  );
}
