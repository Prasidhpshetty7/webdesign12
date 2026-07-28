import { Metadata } from "next";
import Social from "../components/shared/Social";
import { Slide } from "../animation/Slide";
import { BiEnvelope } from "react-icons/bi";

export const metadata: Metadata = {
  title: "About | Prasidh P Shetty",
  metadataBase: new URL("https://prasidhpshetty.com/about"),
  description:
    "Learn more about my skills, experience and technical background",
  openGraph: {
    title: "About | Prasidh P Shetty",
    url: "https://prasidhpshetty.com/about",
    description:
      "Learn more about my skills, experience and technical background",
    images:
      "https://prasidhpshetty.com/og.png",
  },
};

export default async function About() {
  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
        <div className="order-2 lg:order-none">
          <Slide>
            <h1 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
              I&apos;m Prasidh P Shetty. I live in India, where I build the future.
            </h1>

            <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed space-y-4">
              <p>
                I am Prasidh P Shetty, a Web Designer and Full-Stack Developer passionate about building modern, 
                visually engaging, and user-focused digital experiences. I specialize in creating responsive websites 
                and scalable web applications that combine clean design with solid technical foundations.
              </p>
              <p>
                I work across the full development stack — from crafting intuitive frontend interfaces to building 
                robust backend systems, APIs, and database architectures. I follow industry best practices such as 
                version control, agile workflows, and CI/CD pipelines to deliver high-quality, maintainable, and 
                performant solutions.
              </p>
              <p>
                With a strong sense of design and attention to detail, I believe great digital products are built 
                at the intersection of aesthetics, usability, and engineering. I enjoy continuous learning, solving 
                complex problems, and transforming ideas into impactful digital solutions.
              </p>
            </div>
          </Slide>
        </div>

        <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
          <Slide delay={0.1}>
            <div className="sticky top-10">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 flex items-center justify-center">
                <p className="text-white text-center px-6">Profile photo placeholder<br/>Upload via Sanity CMS</p>
              </div>

              <div className="flex flex-col text-center gap-y-4">
                <div className="flex items-center gap-x-3">
                  <button className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold">
                    View Résumé
                  </button>
                  <button className="flex items-center justify-center text-center dark:text-primary-color text-secondary-color hover:underline basis-[10%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 text-lg">
                    📥
                  </button>
                </div>

                <a
                  href="mailto:shettyprasidh262@gmail.com"
                  className="flex items-center justify-center gap-x-2 hover:text-primary-color"
                >
                  <BiEnvelope className="text-lg" />
                  shettyprasidh262@gmail.com
                </a>
              </div>
            </div>
          </Slide>
        </aside>
      </section>

      {/* Usage/Tech Stack Section */}
      <Slide delay={0.14}>
        <section className="mt-32">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Tools & Technologies
          </h2>
          <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
            <p>Add your tech stack and tools via Sanity CMS to showcase what you work with.</p>
          </div>
        </section>
      </Slide>

      {/* Work Experience Section */}
      <section className="mt-32">
        <Slide delay={0.16}>
          <div className="mb-16">
            <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
              Work Experience
            </h2>
          </div>
        </Slide>

        <Slide delay={0.18}>
          <div className="flex items-center justify-center min-h-[200px] dark:bg-primary-bg bg-zinc-50 border dark:border-zinc-800 border-zinc-200 rounded-lg">
            <p className="dark:text-zinc-400 text-zinc-600 text-center px-6">
              No work experience added yet. Add via Sanity CMS!
            </p>
          </div>
        </Slide>
      </section>

      {/* Heroes Section */}
      <section className="mt-32 max-w-5xl mb-16">
        <Slide delay={0.17}>
          <h2 className="text-4xl mb-4 font-bold tracking-tight">Heroes</h2>
          <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
            People who inspire me in the tech and design world.
          </p>
        </Slide>
        
        <div className="mt-12 flex items-center justify-center min-h-[150px] dark:bg-primary-bg bg-zinc-50 border dark:border-zinc-800 border-zinc-200 rounded-lg">
          <p className="dark:text-zinc-400 text-zinc-600 text-center px-6">
            Add your heroes list via Sanity CMS
          </p>
        </div>
      </section>

      {/* Social Links */}
      <section className="mt-16">
        <h2 className="font-incognito text-2xl mb-4 font-bold tracking-tight">
          Connect With Me
        </h2>
        <Social type="social" />
      </section>
    </main>
  );
}
