import { assets } from "@/assets/assets";
import RelatedProducts from "@/components/shared/RelatedProducts";
import { Button } from "@/components/ui/button";
import StoreContext from "@/context/StoreContext";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { products, currency } = useContext(StoreContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState(null);
  const [activeTab, setActiveTab] = useState("description"); // "description" or "reviews"

  useEffect(() => {
    const productsCopy = products.slice();
    const product = productsCopy.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  if (!productData) {
    return (
      <div className="container__width">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container__width">
      <div className="border-t-2 border-gray-200 pt-10 sm:pt-16">
        {/* Product Images & Details */}
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Images */}
          <div className="w-full sm:w-1/2 flex flex-col-reverse sm:flex-row gap-3">
            {/* Thumbnails */}
            <div className="w-full sm:w-[20%] flex sm:flex-col justify-between gap-2">
              {productData.image.map((item, index) => (
                <img
                  src={item}
                  alt={`Thumbnail ${index}`}
                  key={index}
                  className="w-[24%] sm:w-full object-cover cursor-pointer"
                  onClick={() => setImage(item)}
                />
              ))}
            </div>
            {/* Main Image */}
            <div className="w-full sm:w-[80%]">
              <img
                src={image}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full sm:w-1/2 flex flex-col gap-6 items-start">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl">{productData.name}</p>
              <div className="flex items-center gap-1">
                {/* Rating */}
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <img
                      src={assets.star_icon}
                      alt=""
                      key={index}
                      className="w-4"
                    />
                  ))}
                <p>({productData.reviews?.length || 0})</p>
              </div>
            </div>

            <p className="font-bold">
              {currency}
              {productData.price}
            </p>

            <p>{productData.description}</p>

            {/* Select Sizes */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold">Select Size</p>
              <div className="flex items-center gap-2">
                {productData.sizes.map((size, index) => (
                  <Button variant="outline" key={index}>
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <Button className="px-8">ADD TO CART</Button>

            <hr className="w-2/3 border-1 my-4" />

            <div className="text-sm font-light flex flex-col gap-2">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>

        {/* Tabs: Description / Reviews */}
        <div className="my-16 sm:my-24">
          <div className="flex">
            <Button
              onClick={() => setActiveTab("description")}
              variant={activeTab === "description" ? "default" : "outline"}
              className="px-6"
            >
              Description
            </Button>
            <Button
              onClick={() => setActiveTab("reviews")}
              variant={activeTab === "reviews" ? "default" : "outline"}
              className="px-6"
            >
              Reviews ({productData.reviews?.length || 0})
            </Button>
          </div>

          <div className="border border-gray-200 p-6">
            {activeTab === "description" && <p>{productData.description}</p>}

            {activeTab === "reviews" && (
              <>
                {productData.reviews?.length ? (
                  <ul className="space-y-2">
                    {productData.reviews.map((review, index) => (
                      <li key={index}>
                        <p className="font-semibold">{review.user}</p>
                        <p>{review.comment}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No reviews yet.</p>
                )}
              </>
            )}
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts
          category={productData?.category}
          subCategory={productData?.subCategory}
        />
      </div>
    </div>
  );
};

export default Product;
