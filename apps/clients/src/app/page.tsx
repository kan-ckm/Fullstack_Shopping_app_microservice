import ProductList from "@/components/Home/filter/product/ProductList";
import Image from "next/image";

export default async function Home({ searchParams }:
  { searchParams: Promise<{ category: string }> }) {
  const category = (await searchParams).category
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="banner" fill />
      </div>
      <div className="">
        <ProductList category={category} params="homepage" />
      </div>
    </div>
  );
}
