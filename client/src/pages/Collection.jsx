import { assets } from "@/assets/assets";
import Title from "@/components/shared/Title";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import StoreContext from "@/context/StoreContext";
import React, { useContext, useEffect, useState } from "react";
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
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("relavant"); // ✅ sorting state

  const handleCategoryFilter = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const handleSubcategoryFilter = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  useEffect(() => {
    let productsCopy = [...products];

    // ✅ Apply category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    // ✅ Apply subcategory filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // ✅ Apply sorting
    if (sortOption === "low-to-high") {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-to-low") {
      productsCopy.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(productsCopy);
  }, [category, subCategory, products, sortOption]);

  return (
    <div className="container__width">
      <div className="flex flex-col sm:flex-row gap-10 border-t-2 border-gray-200 pt-10 sm:pt-16">
        {/* filter products */}
        <div className="sm:w-[20%] flex flex-col gap-4 mt-6">
          <div
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2"
          >
            <p className="font-semibold uppercase">filters</p>
            <img
              src={assets.dropdown_icon}
              className={`w-2 sm:hidden cursor-pointer ${
                showFilter ? "rotate-90" : ""
              }`}
              alt="icon"
            />
          </div>
          {/* category filter */}
          <div
            className={`border border-gray-200 p-4 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="uppercase font-semibold">categories</p>
            <div className="flex flex-col gap-2 mt-4">
              {["Men", "Women", "Kids"].map((cat) => (
                <div key={cat} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={cat}
                    value={cat}
                    onChange={handleCategoryFilter}
                  />
                  <label htmlFor={cat}>{cat}</label>
                </div>
              ))}
            </div>
          </div>
          {/* subcategory filter */}
          <div
            className={`border border-gray-200 p-4 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="uppercase font-semibold">type</p>
            <div className="flex flex-col gap-2 mt-4">
              {["Topwear", "Bottomwear", "Winterwear"].map((sub) => (
                <div key={sub} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={sub}
                    value={sub}
                    onChange={handleSubcategoryFilter}
                  />
                  <label htmlFor={sub}>{sub}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*all products */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row items-center gap-2 justify-between">
            <Title title1={"All"} title2={"collections"} />
            <Select onValueChange={(value) => setSortOption(value)}>
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="Sort By: Price: Relavant" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Price</SelectLabel>
                  <SelectItem value="relavant">
                    Sort By: Price: Relavant
                  </SelectItem>
                  <SelectItem value="low-to-high">
                    Sort by: Price: Low To High
                  </SelectItem>
                  <SelectItem value="high-to-low">
                    Sort by: Price: High To Low
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {filteredProducts.map((item, index) => (
              <ProductCard
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image[0]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
