import type { Metadata } from "next";
import { LayoutProps } from "../../../../.next/types/app/layout";



export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
    const {id} = await params
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
