import type { Metadata } from "next";



export async function generateMetadata({ params }: { params: { id: string }}): Promise<Metadata> {
    const {id} = params
    return {
        title: `snippet/${id}`
    }
}

export default function snippetsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto px-12">
          {children}
        </div>
      </body>
    </html>
  );
}
