import React from "react";
import OverlayCard from "./OverlayCard";
import { blogPosts } from "../utils/helper";
import { BlogPost } from "../utils/interface";

const BlogCards: React.FC = () => {
  return (
    <div className="py-16 px-6 bg-white text-center">
      <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-2">
        Caring is the new marketing
      </h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Discover how to attract members and increase engagement through a
        content-first approach.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-10">
        {blogPosts.map((post: BlogPost, index: number) => (
          <OverlayCard
            key={index}
            image={post?.image}
            imageAlt={post?.imageAlt}
            description={post?.description}
            link={post?.link}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
