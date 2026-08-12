import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const variants = [
  "default",
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "link",
] as const

const sizes = ["xs", "sm", "default", "lg"] as const

export function ButtonShowcase({ id }: { id?: string }) {
  return (
    <section id={id} className="flex flex-col gap-6 scroll-mt-20">
      <div>
        <h2 className="font-heading text-2xl font-semibold">버튼</h2>
        <p className="text-sm text-muted-foreground">
          variant × size 조합과 아이콘 버튼 예시입니다.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {sizes.map((size) => (
          <div key={size} className="flex flex-wrap items-center gap-2">
            {variants.map((variant) => (
              <Button key={variant} variant={variant} size={size}>
                {variant}
              </Button>
            ))}
          </div>
        ))}

        <div className="flex flex-wrap items-center gap-2">
          <Button size="icon" aria-label="좋아요">
            <Heart className="size-4" />
          </Button>
          <Button size="icon-sm" variant="outline" aria-label="좋아요">
            <Heart className="size-4" />
          </Button>
          <Button size="icon-lg" variant="secondary" aria-label="좋아요">
            <Heart className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
