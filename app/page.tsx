import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-8 w-full md:w-3/4 lg:w-1/2">
      <p>👋</p>
      <p>I&apos;m Aaron, a designer based in San Francisco.</p>
      <p className="leading-relaxed">
        Currently, I lead design at{' '}
        <Link
          href="https://baseten.co"
          className="hover:underline text-green-500"
          target="_blank"
        >
          Baseten
        </Link>
        , an infrastructure platform that empowers AI companies to seamlessly
        deploy, serve, and scale machine learning models—
        <Link
          href="https://jobs.ashbyhq.com/baseten"
          className="hover:underline text-green-500"
          target="_blank"
        >
          we're hiring
        </Link>
        ! Before Baseten, I was building developer tools and leading design for
        the enterprise team at{' '}
        <Link
          href="https://github.com/home"
          className="hover:underline text-blue-500"
          target="_blank"
        >
          GitHub
        </Link>{' '}
        , and built tools that empower creators at{' '}
        <Link
          href="https://gumroad.com"
          className="hover:underline text-pink-500"
          target="_blank"
        >
          Gumroad
        </Link>
        .
      </p>

      <div className="flex flex-col items-start gap-2">
        <h2 className="text-slate-500">Find me</h2>
        <Link
          href="https://github.com/relph"
          className="hover:underline hover:text-blue-600"
          target="_blank"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/aaronrelph/"
          className="hover:underline hover:text-blue-600"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link
          href="https://twitter.com/aaronrelph"
          className="hover:underline hover:text-blue-600"
          target="_blank"
        >
          X
        </Link>
        <Link
          href="mailto:aaronrelph@gmail.com"
          className="hover:underline hover:text-blue-600"
        >
          Email
        </Link>
      </div>
    </main>
  )
}
