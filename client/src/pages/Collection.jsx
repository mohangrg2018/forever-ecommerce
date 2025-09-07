import { assets } from "@/assets/assets";
import StoreContext from "@/context/StoreContext";
import React, { useContext, useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Title from "@/components/shared/Title";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/shared/ProductCard";

const Collection = () => {
  const { products } = useContext(StoreContext);

  const [filterIcon, setFilterIcon] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sort, setSort] = useState("relavant");

  // ✅ handle category checkbox
  const handleCategoryChange = (value) => {
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  // ✅ handle subcategory checkbox
  const handleSubCategoryChange = (value) => {
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  };

  // ✅ filter + sort logic
  useEffect(() => {
    let productData = products.slice();

    // Filter by category
    if (category.length > 0) {
      productData = productData.filter((item) =>
        category.includes(item.category)
      );
    }

    // Filter by subcategory
    if (subCategory.length > 0) {
      productData = productData.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // Sort
    if (sort === "low-to-high") {
      productData.sort((a, b) => a.price - b.price);
    } else if (sort === "high-to-low") {
      productData.sort((a, b) => b.price - a.price);
    }
    // relevant = default (no sorting)

    setFilteredProducts(productData);
  }, [products, category, subCategory, sort]);

  return (
    <div className="container__width">
      <div className="border-t border-gray-200 pt-6 sm:pt-8">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* product filters */}
          <div className="flex-1 flex flex-col gap-4 mt-4">
            <p
              onClick={() => setFilterIcon(!filterIcon)}
              className="uppercase text-xl font-semibold flex items-center gap-2"
            >
              filters
              <img
                src={assets.dropdown_icon}
                className={`w-2 sm:hidden cursor-pointer ${
                  filterIcon ? "rotate-90" : ""
                }`}
                alt=""
              />
            </p>

            {/* category filter */}
            <div
              className={`${
                filterIcon ? "block" : "hidden"
              } sm:flex flex-col gap-4 border border-gray-200 p-4 space-y-2`}
            >
              <p className="uppercase font-semibold">categories</p>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="Men"
                  checked={category.includes("Men")}
                  onCheckedChange={() => handleCategoryChange("Men")}
                />
                <Label htmlFor="Men">Men</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="Women"
                  checked={category.includes("Women")}
                  onCheckedChange={() => handleCategoryChange("Women")}
                />
                <Label htmlFor="Women">Women</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="Kids"
                  checked={category.includes("Kids")}
                  onCheckedChange={() => handleCategoryChange("Kids")}
                />
                <Label htmlFor="Kids">Kids</Label>
              </div>
            </div>

            {/* subcategory filter */}
            <div
              className={`${
                filterIcon ? "block" : "hidden"
              } sm:flex flex-col gap-4 border border-gray-200 p-4 space-y-2`}
            >
              <p className="uppercase font-semibold">type</p>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="Topwear"
                  checked={subCategory.includes("Topwear")}
                  onCheckedChange={() => handleSubCategoryChange("Topwear")}
                />
                <Label htmlFor="Topwear">Topwear</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="Bottomwear"
                  checked={subCategory.includes("Bottomwear")}
                  onCheckedChange={() => handleSubCategoryChange("Bottomwear")}
                />
                <Label htmlFor="Bottomwear">Bottomwear</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="Winterwear"
                  checked={subCategory.includes("Winterwear")}
                  onCheckedChange={() => handleSubCategoryChange("Winterwear")}
                />
                <Label htmlFor="Winterwear">Winterwear</Label>
              </div>
            </div>
          </div>

          {/* products area */}
          <div className="w-full sm:w-[75%]">
            <div className="flex flex-col sm:flex-row items-center gap-2 justify-between">
              <div>
                <Title title1="all" title2="collections" />
              </div>
              <div>
                <Select
                  defaultValue="relavant"
                  onValueChange={(val) => setSort(val)}
                >
                  <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Sort by:" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sort by:</SelectLabel>
                      <SelectItem value="relavant">
                        Sort by: <span className="font-semibold">Relavant</span>
                      </SelectItem>
                      <SelectItem value="low-to-high">
                        Sort by:
                        <span className="font-semibold">
                          Price: Low to High
                        </span>
                      </SelectItem>
                      <SelectItem value="high-to-low">
                        Sort by:
                        <span className="font-semibold">
                          Price: High to Low
                        </span>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
              {filteredProducts.map((item) => (
                <ProductCard
                  key={item._id}
                  id={item._id}
                  image={item.image[0]}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
