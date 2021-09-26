import Link from 'next/link'

export default function Building2() {
  return (
    <>
      <h1>Building 2</h1>
      <h2>
        <Link href="/buildings/building-1">
          <a>Previous<br></br></a>
        </Link>
        <Link href="/buildings/building-2">
          <a>Next<br></br></a>
        </Link>
        <Link href="/search">
          <a>Back to Search<br></br></a>
        </Link>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
    </>
  )
}
