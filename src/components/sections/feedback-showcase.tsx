import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

const badgeVariants = [
  "default",
  "secondary",
  "destructive",
  "outline",
] as const

export function FeedbackShowcase({ id }: { id?: string }) {
  return (
    <section id={id} className="flex flex-col gap-6 scroll-mt-20">
      <div>
        <h2 className="font-heading text-2xl font-semibold">피드백</h2>
        <p className="text-sm text-muted-foreground">
          Badge, Avatar, Skeleton, Tooltip 컴포넌트 예시입니다.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-2">
          {badgeVariants.map((variant) => (
            <Badge key={variant} variant={variant}>
              {variant}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="아바타" />
            <AvatarFallback>SK</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallback>홍</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>KM</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3 w-40" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>

        <div>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              마우스를 올려보세요
            </TooltipTrigger>
            <TooltipContent>안녕하세요! 툴팁입니다.</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </section>
  )
}
