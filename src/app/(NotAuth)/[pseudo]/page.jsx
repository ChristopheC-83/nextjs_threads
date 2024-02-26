import ConnectedLayout from "@/components/ConnectedLayout/ConnectedLayout";
import Post from "@/components/Post/Post";
import Image from "next/image";
import { posts } from "@/lib/post";

export default function Profile({ params }) {
  const pseudo = params.pseudo.slice(3); // pour enlever le %40 en début de slug
  // console.log("params :",{params})
  // console.log("pseudo :",{pseudo})

  return (
    <ConnectedLayout>
      <div className="w-11/12  md:w-[700px] mx-auto">
        <div className="flex justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">{pseudo}</h1>
            <div className="mt-2 text-threads-gray-light">@{pseudo}</div>
            <div className="mt-5 whitespace-pre-line">-</div>
            <div className="mt-5 text-blue-500 duration-200 hover:text-blue-400">
              <a href="#" target="_blank">
                Coucou
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/picture.png"
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
