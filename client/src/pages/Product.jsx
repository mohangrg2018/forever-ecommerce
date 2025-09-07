import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import StoreContext from "@/context/StoreContext";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RelatedProducts from "@/components/shared/RelatedProducts";

const Product = () => {
  const { products, currency } = useContext(StoreContext);
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [image, setImage] = useState(null);
  const [size, setSize] = useState([]);

  useEffect(() => {
    const productCopy = products.slice();
    const productData = productCopy.find((item) => item._id === productId);
    setProduct(productData);
    setImage(productData.image[0]);
  }, [productId, products]);

  const handleSizeSelect = (e) => {
    setSize((prev) =>
      prev.includes(e) ? prev.filter((s) => s !== e) : [...prev, e]
    );
  };

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="container__width">
      <div className="border-t border-gray-200 pt-6 sm:pt-8">
        <div className="flex flex-col sm:flex-row gap-8">
          {/* left side */}
          <div className="w-full sm:w-1/2">
            <div className="flex flex-col-reverse sm:flex-row gap-2">
              {/* thumbnail images */}
              <div className="flex-1 flex flex-row sm:flex-col gap-2 justify-between">
                {product?.image?.map((item, index) => (
                  <img
                    onClick={() => setImage(item)}
                    key={index}
                    src={item}
                    className={`w-[23%] sm:w-full cursor-pointer ${
                      image === item ? "border border-gray-400" : ""
                    }`}
                    alt=""
                  />
                ))}
              </div>
              {/* main image */}
              <div className="w-full sm:w-[80%]">
                <img src={image} className="w-full h-full" alt="" />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-full sm:w-1/2">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-2xl">{product.name}</p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <img src={assets.star_icon} className="w-5" alt="" />
                    <img src={assets.star_icon} className="w-5" alt="" />
                    <img src={assets.star_icon} className="w-5" alt="" />
                    <img src={assets.star_icon} className="w-5" alt="" />
                    <img src={assets.star_icon} className="w-5" alt="" />
                  </div>
                  (122)
                </div>
              </div>
              <p className="font-semibold">
                {currency}
                {product.price}
              </p>
              <p className="text-gray-500 text-sm">{product.description}</p>
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Select Size</p>
                <div className="flex items-center gap-2">
                  {["xs", "s", "m", "l", "xl"].map((item, index) => (
                    <button
                      onClick={() => handleSizeSelect(item)}
                      key={index}
                      className={`uppercase text-[14px] border border-gray-200 w-10 py-1 cursor-pointer bg-gray-100${
                        size.includes(item) ? "border border-orange-500" : ""
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Button>ADD TO CART</Button>
              </div>
              <hr className="border-gray-200 my-4" />
              <div className="text-sm text-gray-500 flex flex-col gap-1">
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
            </div>
          </div>
        </div>
        {/* product descriptin and reviews */}
        <div className="my-12 sm:my-20">
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent
              value="description"
              className="border border-gray-200 px-8 py-10"
            >
              <p className="text-sm text-gray-500 mb-4">
                An e-commerce website is an online platform that facilitates the
                buying and selling of products or services over the internet. It
                serves as a virtual marketplace where businesses and individuals
                can showcase their products, interact with customers, and
                conduct transactions without the need for a physical presence.
                E-commerce websites have gained immense popularity due to their
                convenience, accessibility, and the global reach they offer.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                E-commerce websites typically display products or services along
                with detailed descriptions, images, prices, and any available
                variations (e.g., sizes, colors). Each product usually has its
                own dedicated page with relevant information.
              </p>
            </TabsContent>
            <TabsContent
              value="reviews"
              className="border border-gray-200 px-8 py-10"
            >
              Reviews go here
            </TabsContent>
          </Tabs>
        </div>
        <RelatedProducts
          category={product.category}
          subCategory={product.subCategory}
        />
      </div>
    </div>
  );
};

export default Product;
