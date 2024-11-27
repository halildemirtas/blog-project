import React from "react";
import BlogSummaryCard from "@/components/BlogSummaryCard";
import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";
import { BLOG_TITLE } from "../constants";

export const metadata = {
  title: BLOG_TITLE,
  name: "description",
  content: "From My eyes is Analog photography project started by me",
};

async function Home() {
  const blogPosts = await getBlogPostList();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Son Yazılar;</h1>
      {blogPosts.map((blog) => {
        const { slug, title, abstract, publishedOn } = blog;
        return (
          <BlogSummaryCard
            key={`${title}${publishedOn}`}
            slug={slug}
            title={title}
            abstract={abstract}
            publishedOn={new Date(publishedOn)}
          />
        );
      })}
    </div>
  );
}

export default Home;
