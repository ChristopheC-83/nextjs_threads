"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button/Button";

export default function NewPostForm() {
  const { data: session } = useSession();
  const [textarea, setTextarea] = useState("");

  return (
    <form>
      <div className="flex gap-3">
        <div>
          <Image
            src={session?.user.profile}
            alt="user"
            width={50}
            height={50}
            className="mt-5 rounded-full"
          />
        </div>
        <div className="flex-1">
          <textarea
            placeholder="Commencer un thread..."
            className="input"
            name="content"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end">
        <button className={`new-thread-btn ${textarea.length <1 && "disabled-new-thread-btn"}`}>
          Publier
        </button>
      </div>
    </form>
  );
}
