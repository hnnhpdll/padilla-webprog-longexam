import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-3xl border-2 border-blue-900 bg-zinc-100 p-4">
  {/* Product Image */}
  <div className="aspect-4/3 overflow-hidden rounded-[1.25rem] bg-zinc-200">
    <img
      src={product.image}
      alt={product.title}
      className="h-full w-full object-cover"
    />
  </div>

  {/* Category + Index */}
  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
    {product.category} {String(index + 1).padStart(2, '0')}
  </p>

  {/* Title */}
  <h3 className="mt-2 text-lg font-semibold text-blue-900">
    {product.title}
  </h3>

  {/* Price */}
  <p className="mt-2 text-base font-bold text-blue-900">
    {product.price}
  </p>

  {/* Description */}
  <p className="mt-3 text-sm leading-6 text-yellow-600">
    {product.content[0].substring(0, 120)}...
  </p>

  {/* Button */}
  <Button to={`/products/${product.name}`} className="mt-4">
    View Product
  </Button>
</article>
  );
};

export default ProductCard;
