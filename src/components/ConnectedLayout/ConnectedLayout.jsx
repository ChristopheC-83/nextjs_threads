// Nous créons un composant layout juste pour les utilisateurs connectés.

import Footer from "../Footer/Footer";
import ConnectedHeader from "./ConnectedHeader";

export default function ConnectedLayout({ children }) {
  return (
    <section className="flex flex-col w-full min-h-screen">
      {/* header */}
      <ConnectedHeader/>

      {/* content */}
      <div className="flex-1">{children}</div>

      {/* footer */}
      <Footer />
    </section>
  );
}
