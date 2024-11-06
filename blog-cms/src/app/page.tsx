import Cards from "@/components/cards";
import Wrapper from "@/components/wrapper";
import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";

export default async function Home() {
  const data: IBlog[] = await getBlogs();
  console.log(data);
  

  return (
    <div className="flex flex-1 w-screen h-screen justify-center">
      <Wrapper>
        <div className="flex gap-10 my-10">  
          {data.map((item, idx) => {
          return (
            <div key={idx}>
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
