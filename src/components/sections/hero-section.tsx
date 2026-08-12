import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"

export function HeroSection() {
  return (
    <section className="border-b border-border/50 bg-muted/30">
      <Container className="flex flex-col items-center gap-6 py-24 text-center">
        <Badge variant="secondary">v1.0 스타터킷</Badge>
        <h1 className="max-w-2xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          빠르게 시작하는
          <br />
          모던 웹 스타터킷
        </h1>
        <p className="max-w-xl text-muted-foreground">
          Next.js 16 · Tailwind CSS v4 · shadcn(base-ui) · lucide-react로
          구성된, 바로 복붙해 쓸 수 있는 컴포넌트와 레이아웃 모음입니다.
        </p>
        <div className="flex items-center gap-3">
          <Button nativeButton={false} render={<Link href="#buttons" />}>
            컴포넌트 둘러보기
            <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <a
                href="https://ui.shadcn.com/docs"
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            shadcn 문서
          </Button>
        </div>
      </Container>
    </section>
  )
}
