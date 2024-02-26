// page d'accueil des connectés ou visiteurs invités

import ConnectedLayout from "@/components/ConnectedLayout/ConnectedLayout";
import Post from "@/components/Post/Post";
import Image from "next/image";
import { posts } from "@/lib/post";

export default function Index() {



  return (
    <ConnectedLayout>
      {/* new post */}

    {/* posts */}
    {posts.map((post) => (
      <div key={post._id}>
        <Post post={post}/>

      </div>
      
      ))}


    </ConnectedLayout>
    
    );
}
