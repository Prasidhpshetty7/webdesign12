export default function Home() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        <div className="flex flex-col">
          <h1 className="font-incognito font-black tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem]">
            Hi, I&apos;m Prasidh P Shetty 👋
          </h1>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed max-w-2xl">
            I&apos;m a Web Designer and Full-Stack Developer passionate about building modern, 
            visually engaging, and user-focused digital experiences. I specialize in creating 
            responsive websites and scalable web applications that combine clean design with 
            solid technical foundations.
          </p>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed max-w-2xl mt-4">
            I work across the full development stack — from crafting intuitive frontend interfaces 
            to building robust backend systems, APIs, and database architectures.
          </p>
          
          <div className="flex items-center gap-x-4 mt-8">
            <a
              href="https://github.com/Prasidhpshetty7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-4 py-2 hover:dark:border-zinc-700 hover:border-zinc-300 duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/prasidhpshetty/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-4 py-2 hover:dark:border-zinc-700 hover:border-zinc-300 duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/prasidhpshetty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-4 py-2 hover:dark:border-zinc-700 hover:border-zinc-300 duration-200"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-2xl">
        <h2 className="font-incognito text-2xl font-bold tracking-tight mb-4">
          Contact
        </h2>
        <p className="dark:text-zinc-400 text-zinc-600">
          Email: <a href="mailto:shettyprasidh262@gmail.com" className="text-blue-500 hover:underline">shettyprasidh262@gmail.com</a>
        </p>
        <div className="flex gap-x-4 mt-6">
          <a href="https://www.instagram.com/prasidhpshetty/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Instagram</a>
          <a href="https://discord.com/users/prasidhshetty" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Discord</a>
          <a href="https://t.me/FINALSKULL" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Telegram</a>
        </div>
      </section>

      <section className="mt-16 p-6 dark:bg-zinc-800/50 bg-zinc-100 rounded-lg border dark:border-zinc-700 border-zinc-200">
        <h3 className="font-semibold text-lg mb-2">🚀 Portfolio Under Construction</h3>
        <p className="dark:text-zinc-400 text-zinc-600">
          This portfolio has been fully customized with your information! To see projects, blog posts, and full content, 
          you need to set up <strong>Sanity CMS</strong>.
        </p>
        <p className="dark:text-zinc-400 text-zinc-600 mt-2">
          Check the <code className="px-2 py-1 rounded dark:bg-zinc-900 bg-white">SETUP.md</code> and <code className="px-2 py-1 rounded dark:bg-zinc-900 bg-white">QUICK_START.md</code> files for instructions.
        </p>
      </section>
    </main>
  );
}
