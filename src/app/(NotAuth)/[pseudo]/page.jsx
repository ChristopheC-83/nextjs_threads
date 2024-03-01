"use client";

import ConnectedLayout from "@/components/ConnectedLayout/ConnectedLayout";
import Post from "@/components/Post/Post";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Profile({ params }) {
  const router = useRouter();
  const pseudo = params.pseudo.slice(3); // pour enlever le %40 en début de slug

  //  recup des infos dans un state
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);

  async function fetchUserDataPosts() {
    const response = await fetch(`/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pseudo }),
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      toast.error("Erreur lors de la récupération des données");
    }
    if(!data.user){
      router.push("/")
      toast.info("Utilisateur introuvable");
      return
    }
    setUser(data.user);
    setPosts(data.posts);
  }

  useEffect(() => {
    // if (!pseudo) {
    //   router.push("/")
    // }
    fetchUserDataPosts();
  }, []);

  return (
    <ConnectedLayout>
      <div className="w-11/12  md:w-[700px] mx-auto">
        <div className="flex justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">{user.username}</h1>
            <div className="mt-2 text-threads-gray-light">@{user.pseudo}</div>
            <div className="mt-5 whitespace-pre-line">{user.bio}</div>
            <div className="mt-5 text-blue-500 duration-200 hover:text-blue-400">
              {user.url && (
                <a href={user.url} target="_blank">
                  {user.url}
                </a>
              )}
            </div>
          </div>
          <div>
            <Image
              src={user.profile}
              width={100}
              height={100}
              className="object-cover rounded-full"
              alt="avatar"
            />
          </div>
        </div>

        {/* tabs */}
        <div className="flex mt-10">
          {/* threads */}
          <div className="flex-1 px-4 pb-4 text-center duration-200 border-b border-white cursor-pointer hover:text-white hover:border-white">
            Threads
          </div>
          {/* responses */}
          <div className="flex-1 px-4 pb-4 text-center duration-200 border-b cursor-pointer text-threads-gray-light border-threads-gray-light hover:text-white hover:border-white">
            Réponses
          </div>
          {/* repost */}
          <div className="flex-1 px-4 pb-4 text-center duration-200 border-b cursor-pointer text-threads-gray-light border-threads-gray-light hover:text-white hover:border-white">
            Republication
          </div>
        </div>
        {/* posts */}
        <div>
          {posts.map((post) => (
            <div key={post._id}>
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </ConnectedLayout>
  );
}
