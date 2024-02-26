/* eslint-disable react/no-unescaped-entities */
"use client";

import { createUser } from "@/actions/createUser";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { PiArrowLeftLight } from "react-icons/pi";

export default function SignUp() {
  async function prepareCreateUser(formData) {
    const username = formData.get("username");
    const pseudo = formData.get("pseudo");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(username, pseudo, email, password);

    await createUser(username, pseudo, email, password);
  }

  return (
    <div className="mx-auto w-[500px] flex flex-col gap-4">
      <Link className="flex items-center" href="/login">
        <PiArrowLeftLight className="mr-2 text-2xl text-white" />
        <h1 className="title">Inscrivez-vous!</h1>
      </Link>

      <form action={prepareCreateUser}>
        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          className="input"
        />
        <input
          type="text"
          name="pseudo"
          placeholder="Pseudo de l'utilisateur"
          className="input"
        />
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
          <p className="text-xl font-bold">S'inscrire</p>
        </Button>
      </form>
      <div className="flex items-center justify-center mt-4">
        <div className="w-1/4 border-t border-threads-gray-light"></div>
        <div className="mx-4 mb-1 text-threads-gray-light">ou</div>
        <div className="w-1/4 border-t border-threads-gray-light"></div>
        <div></div>
      </div>
      <Button>
        <p className="text-xl font-bold">Se connecter</p>
      </Button>
    </div>
  );
}
