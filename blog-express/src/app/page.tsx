import Cards from "@/components/cards";
import Wrapper from "@/components/wrapper";
import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";

export default async function Home() {
  const data: IBlog[] = await getBlogs();

  return (
    <div className="container mx-auto px-4 flex flex-1 justify-center items-center w-[100vw] h-auto">
      <Wrapper>
        <div className="flex flex-col md:flex-row gap-10 md:gap-10 my-10">
          {data.map((item, idx) => {
            return (
              <div key={idx} className="w-full">
                <Cards
                  title={item.title}
                  thumbnail={item.thumbnail}
                  author={item.user.username}
                  email={item.user.email}
                  avatar={item.user.avatar}
                  slug={item.slug}
                />
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}