import { MARKETPLACE } from "@/constants/menu.constants";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main home">
      <div className="message">
        <h2>Hola!</h2>
        <p>Esta prueba técnica está realizada con las siguientes tecnologías: <strong>Reactjs / Nextjs</strong>, <strong>SCSS / CSS3</strong> y <strong>Vercel</strong></p>
        <p>Por temas de tiempo no pude aplicar muchas micro-interaccioens ni adaptarlo a dispositivos móbiles.</p>
        <p>Espero les guste 😊</p>
        <Link
          href={MARKETPLACE.route}
          className="btn"
        >
          Ir al Marketplace
        </Link>
      </div>
    </main>
  );
}
