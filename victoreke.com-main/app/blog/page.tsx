import { Metadata } from "next";
import { Slide } from "../animation/Slide";
import PageHeading from "@/app/components/shared/PageHeading";
import Social from "../components/shared/Social";
import { BiDetail } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Blog | Prasidh P Shetty",
  metadataBase: new URL("https://prasidhpshetty.com/blog"),
  description: "Read latest stories from Prasidh P Shetty's Blog",
  openGraph: {
    title: "Blog | Prasidh P Shetty",
    url: "https://prasidhpshetty.com/blog",
    description: "Read latest stories from Prasidh P Shetty's Blog",
    images:
      "https://prasidhpshetty.com/blog.png",
  },
};

export default async function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Blog"
        description="Welcome to my blog domain where I share personal stories about things I've learned, projects I'm hacking on and just general findings. I also write for other publications."
      >
        <Social type="publication" />
      </PageHeading>

      <Slide delay={0.1}>
        <div className="flex items-center gap-x-3 mb-8">
          <BiDetail />
          <h2 className="text-xl font-semibold tracking-tight">Explore All</h2>
        </div>
        
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-12">
          {/* Placeholder Blog Post Cards */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex flex-col gap-y-4 dark:bg-primary-bg bg-zinc-50 border dark:border-zinc-800 border-zinc-200 p-6 rounded-lg"
            >
              <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-pink-600 rounded-md flex items-center justify-center">
                <p className="text-white text-center">Cover Image Placeholder</p>
              </div>
              <div>
                <h2 className="text-lg tracking-wide mb-2 font-semibold">Blog Post Title {i}</h2>
                <p className="text-sm dark:text-zinc-400 text-zinc-600">
                  Write and publish blog posts via Sanity CMS. Share your knowledge and experiences!
                </p>
                <p className="text-xs dark:text-zinc-500 text-zinc-500 mt-3">
                  Published date will appear here
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center p-8 dark:bg-zinc-800/50 bg-zinc-100 rounded-lg border dark:border-zinc-700 border-zinc-200">
          <p className="dark:text-zinc-400 text-zinc-600 mb-4">
            <strong>No blog posts yet.</strong> Start writing and sharing your thoughts through Sanity CMS!
          </p>
          <p className="text-sm dark:text-zinc-500 text-zinc-500">
            Blog posts support rich text, code snippets, images, and more.
          </p>
        </div>
      </Slide>
    </main>
  );
}
