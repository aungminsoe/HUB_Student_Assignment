import { ProductForm } from "@/components/ProductForm";
import { getProduct, products } from "@/lib/data";

export default async function ProductDetail(props: PageProps<"/products/[id]">) {
  const { id } = await props.params;
  return <ProductForm product={getProduct(id)} />;
}

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export const instant = false;
