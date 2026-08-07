import { Metadata } from "next";
import { Slide } from "../animation/Slide";
import PageHeading from "../components/shared/PageHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Prasidh P Shetty",
  metadataBase: new URL("https://prasidhpshetty.com/projects"),
  description: "Explore projects built by Prasidh P Shetty",
  openGraph: {
    title: "Projects | Prasidh P Shetty",
    url: "https://prasidhpshetty.com/projects",
    description: "Explore projects built by Prasidh P Shetty",
    images:
      "https://prasidhpshetty.com/projects.png",
  },
};

export default async function Project() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Projects"
        description="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved."
      />

      <Slide delay={0.1}>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
          {/* Placeholder Project Cards */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex flex-col gap-y-4 dark:bg-primary-bg bg-zinc-50 border dark:border-zinc-800 border-zinc-200 p-6 rounded-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center text-white text-2xl">
                🚀
              </div>
              <div>
                <h2 className="text-lg tracking-wide mb-1 font-semibold">Project {i}</h2>
                <div className="text-sm dark:text-zinc-400 text-zinc-600">
                  Add your projects via Sanity CMS
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center p-8 dark:bg-zinc-800/50 bg-zinc-100 rounded-lg border dark:border-zinc-700 border-zinc-200">
          <p className="dark:text-zinc-400 text-zinc-600 mb-4">
            <strong>No projects added yet.</strong> Add your portfolio projects through Sanity CMS to showcase your work!
          </p>
          <p className="text-sm dark:text-zinc-500 text-zinc-500">
            Projects can include live URLs, GitHub repos, tech stacks, and detailed descriptions.
          </p>
        </div>
      </Slide>
    </main>
  );
}
