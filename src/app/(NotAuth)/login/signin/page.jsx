/* eslint-disable react/no-unescaped-entities */
// page de connexion

"use client";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { PiArrowLeftLight } from "react-icons/pi";

export default function SignIn() {
  async function prepareLogin(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
  }
  return (
    <div className="mx-auto w-[500px] flex flex-col gap-4">
      <Link className="flex items-center" href="/login">
        <PiArrowLeftLight className="mr-2 text-2xl text-white" />
        <h1 className="title">Connectez-vous!</h1>
      </Link>

      <form action={prepareLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email de l'utilisateur"
          className="input"
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de Passe"
          className="input"
        />
        <Button>
          <p className="text-xl font-bold">Connexion</p>
        </Button>
      </form>
      <div className="flex items-center justify-center mt-4">
        <div className="w-1/4 border-t border-threads-gray-light"></div>
        <div className="mx-4 mb-1 text-threads-gray-light">ou</div>
        <div className="w-1/4 border-t border-threads-gray-light"></div>
      </div>
      <Link href="/login/signup" className="text-xl font-bold">
        <Button>Créer un compte</Button>
      </Link>
    </div>
  );
}
