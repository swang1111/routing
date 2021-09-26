import Link from 'next/link'

export default function Search() {
  return (
    <>
      <h1>Search for Buildings</h1>
      <h2>
        <Link href="/buildings/building-1">
          <a>Building 1<br></br></a>
        </Link>
        <Link href="/buildings/building-2">
          <a>Building 2<br></br></a>
        </Link>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
