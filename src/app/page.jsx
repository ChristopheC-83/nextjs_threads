// page d'accueil des connectés ou visiteurs invités

import ConnectedLayout from "@/components/ConnectedLayout/ConnectedLayout";
import Post from "@/components/Post/Post";
import { posts } from "@/lib/post";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import CreatePost from "@/components/createPost/CreatePost";

export default async function Index() {
  const session = await getServerSession(authOptions);

  return (
    <ConnectedLayout>
      {/* new post */}
      {session?.user && <CreatePost />}

      {/* posts */}
      {posts.map((post) => (
        <div key={post._id}>
          <Post post={post} />
        </div>
      ))}
    </ConnectedLayout>
  );
}
