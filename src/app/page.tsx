import Link from "next/link";
import { Button } from "@/components/ui/button";
import { db } from "@/db";


export default async function Home() {
  const snippets = await db.snippet.findMany()

  return (
    <div className="">
      {/* 卡片 */}
      <div className="flex flex-col gap-6 relative">
        {/* 上方区域 */}
        <div  className="flex justify-between sticky top-0 border border-border bg-gray-100 py-2">
          <h1 className="font-black text-2xl">
            Snippets
          </h1>
          <Link href={'snippets/new'}>
            <Button>New</Button>
          </Link>
        </div>
        {/* 列表区域 */}
        <div className="flex flex-col gap-2">
          {/* 列表项 */}
          {snippets.map(snippet => 
          <div key={snippet.id} className="flex justify-between border border-border p-2 items-center">
            <p>{snippet.title}</p>
            <Link href={`snippets/${snippet.id}`}><Button variant='ghost'>View</Button></Link>
          </div>)}
        </div>
      </div>
    </div>
  );
}
