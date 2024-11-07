import Cards from "@/components/cards";
import Wrapper from "@/components/wrapper";
import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";

export default async function Home() {
  const data: IBlog[] = await getBlogs();
  console.log(data);

  return (
    <div className="container mx-auto px-4 flex flex-1 justify-center items-center w-full h-full">
      <Wrapper>
        <div className="flex flex-col md:flex-row gap-10 md:gap-10 my-10">
          {data.map((item, idx) => {
            return (
              <div key={idx} className="w-full">
                <Cards
                  title={item.fields.title}
                  thumbnail={item.fields.thumbnail.fields.file.url}
                  author={item.fields.author.fields.name}
                  email={item.fields.author.fields.email}
                  avatar={item.fields.author.fields.avatar.fields.file.url}
                  slug={item.fields.slug}
                />
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}
