import {Header} from "@/components/shared/Header";
import {Container, Filters, TopBar} from "@/components/shared/index";
import {Title} from "@/components/shared/index";

export default function Home() {
  return (
      <>
          <Container className="mt-10">
              <Title text="Все пиццы" size="lg" className="font-extrabold" />
          </Container>

          <TopBar />

          <Container className="pb-14">
            <div className="grids">
                <div>
                    <Filters />
                </div>
                <div>
                    <div className="flex flex-col gap-16">
                        Список товаров
                    </div>
                </div>
            </div>
          </Container>
      </>
  )
}