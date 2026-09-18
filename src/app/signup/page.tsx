import type { Metadata } from "next"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "회원가입",
}

export default function SignupPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>회원가입</CardTitle>
            <CardDescription>회원가입 페이지는 준비 중입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              <Link
                href="/login"
                className="text-foreground underline underline-offset-4 hover:text-primary"
              >
                로그인으로 돌아가기
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
