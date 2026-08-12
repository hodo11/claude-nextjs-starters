import Link from "next/link"
import { Globe, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Container } from "@/components/layout/container"

const footerLinks = [
  {
    title: "제품",
    links: [
      { label: "기능", href: "#buttons" },
      { label: "컴포넌트", href: "#cards" },
      { label: "폼", href: "#forms" },
    ],
  },
  {
    title: "리소스",
    links: [
      { label: "shadcn 문서", href: "https://ui.shadcn.com/docs" },
      { label: "Next.js 문서", href: "https://nextjs.org/docs" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "소개", href: "#" },
      { label: "문의", href: "#forms" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50">
      <Container className="flex flex-col gap-8 py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <span className="text-sm font-medium text-foreground">
                {group.title}
              </span>
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <Separator />

        <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Starter. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="웹사이트"
              nativeButton={false}
              render={<a href="https://example.com" target="_blank" rel="noreferrer" />}
            >
              <Globe className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="이메일"
              nativeButton={false}
              render={<a href="mailto:hello@example.com" />}
            >
              <Mail className="size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  )
}
