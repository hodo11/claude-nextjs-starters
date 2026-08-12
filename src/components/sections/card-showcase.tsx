import { Check } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Starter",
    price: "무료",
    description: "개인 프로젝트를 위한 기본 플랜",
    features: ["프로젝트 1개", "기본 컴포넌트", "커뮤니티 지원"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "₩19,000/월",
    description: "빠르게 성장하는 팀을 위한 플랜",
    features: ["프로젝트 무제한", "모든 컴포넌트", "우선 지원"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "문의",
    description: "대규모 조직을 위한 맞춤 플랜",
    features: ["전담 매니저", "SLA 보장", "온프레미스 지원"],
    highlight: false,
  },
]

export function CardShowcase({ id }: { id?: string }) {
  return (
    <section id={id} className="flex flex-col gap-6 scroll-mt-20">
      <div>
        <h2 className="font-heading text-2xl font-semibold">카드</h2>
        <p className="text-sm text-muted-foreground">
          가격표/기능 소개 등에 바로 쓸 수 있는 카드 레이아웃입니다.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.highlight ? "ring-2 ring-primary" : undefined}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{plan.name}</CardTitle>
                {plan.highlight && <Badge>인기</Badge>}
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <p className="text-2xl font-semibold">{plan.price}</p>
              <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.highlight ? "default" : "outline"}
              >
                선택하기
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
