import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-8 w-full md:w-1/2">
      <p>👋</p>
      <p>I&apos;m Aaron, a product designer based in Los Angeles. ☀️</p>
      <p>
        Currently, I&apos;m designing at{' '}
        <Link
          href="https://baseten.co"
          className="hover:underline text-green-500"
          target="_blank"
        >
          Baseten
        </Link>
        , a tool that makes deploying, serving and monitoring machine learning
        models easy. Before Baseten, I was a designing developer tools at{' '}
        <Link
          href="https://github.com"
          className="hover:underline text-gray-400"
          target="_blank"
        >
          GitHub
        </Link>{' '}
        , spent some time at{' '}
        <Link
          href="https://gumroad.com"
          className="hover:underline text-pink-500"
          target="_blank"
        >
          Gumroad
        </Link>{' '}
        and before that{' '}
        <Link
          href="https://www.linkedin.com/in/aaronrelph/"
          className="hover:underline text-blue-600"
          target="_blank"
        >
          other places
        </Link>
      </p>

      <div className="flex flex-col items-start gap-2">
        <h2 className="text-slate-500">Recent projects</h2>
        <Link
          href="https://chatoss.dev"
          className="hover:underline hover:text-blue-600"
          target="_blank"
        >
          ChatOSS
        </Link>
        <Link
          href="https://hallmonitor.co"
          className="hover:underline hover:text-blue-600"
          target="_blank"
        >
          Hall Monitor
        </Link>
      </div>

      <div className="flex flex-col items-start gap-2">
        <h2 className="text-slate-500">Online</h2>
        <Link
          href="https://github.com/relph"
          className="hover:underline hover:text-blue-600"
          target="_blank"
        >
          GitHub
        </Link>
        <Link
          href="https://twitter.com/aaronrelph"
          className="hover:underline hover:text-blue-600"
          target="_blank"
        >
          Twitter
        </Link>
        <Link
          href="https://www.linkedin.com/in/aaronrelph/"
          className="hover:underline hover:text-blue-600"
          target="_blank"
        >
          LinkedIn
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
