import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'

export default function Documents() {
  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <FadeIn className="flex max-w-xl flex-col items-center text-center">
        <p className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
          Documents
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
          Page in construction
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          We&apos;ll have this page up and running soon.
        </p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          Go to the home page
        </Link>
        <Link
          href="https://discord.gg/SYMREsnSwQ"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          <Button>Join Discord to request document access</Button>
        </Link>
      </FadeIn>
    </Container>
  )
}
