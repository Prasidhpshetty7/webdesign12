import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Social from "./components/shared/Social";

export const metadata: Metadata = {
  title: "Prasidh P Shetty | Web Designer & Full-Stack Developer",
  metadataBase: new URL("https://prasidhpshetty.com"),
  description: "Prasidh P Shetty is a Web Designer and Full-Stack Developer passionate about building modern, visually engaging, and user-focused digital experiences",
};

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      {/* Hero Section */}
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        <div className="lg:max-w-2xl">
          <h1 className="font-incognito font-black tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem]">
            Hey, I&apos;m Prasidh P Shetty 👋
          </h1>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            I&apos;m a Web Designer and Full-Stack Developer passionate about building modern, 
            visually engaging, and user-focused digital experiences. I specialize in creating 
            responsive websites and scalable web applications that combine clean design with 
            solid technical foundations.
          </p>
          <Social type="social" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="my-32">
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Featured Projects
          </h2>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="flex items-center justify-center min-h-[200px] dark:bg-primary-bg bg-zinc-50 border dark:border-zinc-800 border-zinc-200 rounded-lg">
            <p className="dark:text-zinc-400 text-zinc-600 text-center px-6">
              No projects yet. Add them via Sanity CMS!
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="my-32">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-incognito text-4xl font-bold tracking-tight">
            Latest Posts
          </h2>
          <Link
            href="/blog"
            className="dark:text-primary-color text-secondary-color hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="flex items-center justify-center min-h-[200px] dark:bg-primary-bg bg-zinc-50 border dark:border-zinc-800 border-zinc-200 rounded-lg">
            <p className="dark:text-zinc-400 text-zinc-600 text-center px-6">
              No blog posts yet. Start writing in Sanity CMS!
            </p>
          </div>
        </div>
      </section>

      {/* GitHub Contribution Graph */}
      <section className="my-32">
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Contribution Graph
          </h2>
          <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
            My GitHub contribution activity for username: <span className="font-mono text-blue-500">Prasidhpshetty7</span>
          </p>
        </div>
        
        {/* Import and use the actual GitHub Calendar component */}
        <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg">
          <iframe
            src={`https://github-readme-stats.vercel.app/api?username=Prasidhpshetty7&show_icons=true&theme=radical`}
            width="100%"
            height="195"
            frameBorder="0"
            className="mb-6"
          />
          <iframe
            src={`https://github-readme-streak-stats.herokuapp.com/?user=Prasidhpshetty7&theme=radical`}
            width="100%"
            height="195"
            frameBorder="0"
          />
          <p className="text-sm dark:text-zinc-500 text-zinc-500 mt-6 text-center">
            GitHub stats powered by github-readme-stats
          </p>
        </div>
      </section>
    </main>
  );
}
