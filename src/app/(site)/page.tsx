import { Container } from "@/components/layout/container"
import { HeroSection } from "@/components/sections/hero-section"
import { ButtonShowcase } from "@/components/sections/button-showcase"
import { FeedbackShowcase } from "@/components/sections/feedback-showcase"
import { CardShowcase } from "@/components/sections/card-showcase"
import { TabsShowcase } from "@/components/sections/tabs-showcase"
import { OverlayShowcase } from "@/components/sections/overlay-showcase"
import { FormShowcase } from "@/components/sections/form-showcase"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Container className="flex flex-col gap-24 py-16">
        <ButtonShowcase id="buttons" />
        <FeedbackShowcase id="feedback" />
        <CardShowcase id="cards" />
        <TabsShowcase id="tabs" />
        <OverlayShowcase id="overlays" />
        <FormShowcase id="forms" />
      </Container>
    </>
  )
}
