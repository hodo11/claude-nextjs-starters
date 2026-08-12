import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export function TabsShowcase({ id }: { id?: string }) {
  return (
    <section id={id} className="flex flex-col gap-6 scroll-mt-20">
      <div>
        <h2 className="font-heading text-2xl font-semibold">탭</h2>
        <p className="text-sm text-muted-foreground">
          개요/사용법/코드 형태의 콘텐츠 전환 예시입니다.
        </p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">개요</TabsTrigger>
          <TabsTrigger value="usage">사용법</TabsTrigger>
          <TabsTrigger value="code">코드</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardContent className="text-sm text-muted-foreground">
              이 스타터킷은 Next.js 16, Tailwind CSS v4, shadcn(base-ui)로
              구성되어 있으며 다크모드와 반응형 레이아웃을 기본 지원합니다.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="usage">
          <Card>
            <CardContent className="text-sm text-muted-foreground">
              필요한 shadcn 컴포넌트는{" "}
              <code className="rounded bg-muted px-1 py-0.5">
                npx shadcn add &lt;name&gt;
              </code>{" "}
              명령으로 추가할 수 있습니다.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card>
            <CardContent>
              <pre className="overflow-x-auto rounded-md bg-muted p-3 text-xs">
                <code>{`import { Button } from "@/components/ui/button"

export function Example() {
  return <Button>클릭하세요</Button>
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
