import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"

export function FormShowcase({ id }: { id?: string }) {
  return (
    <section id={id} className="flex flex-col gap-6 scroll-mt-20">
      <div>
        <h2 className="font-heading text-2xl font-semibold">폼</h2>
        <p className="text-sm text-muted-foreground">
          react-hook-form + zod로 검증하는 문의 폼 예시입니다.
        </p>
      </div>

      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>문의하기</CardTitle>
          <CardDescription>
            아래 양식을 작성해주시면 빠르게 답변드리겠습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </section>
  )
}
