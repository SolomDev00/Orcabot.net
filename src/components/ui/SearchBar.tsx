/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import "./elements.style.css";
import { useEffect, useState } from "react";
import { SoSearch } from "solom-icon";
import Button from "./elements/Button";
import { Dropdown } from "primereact/dropdown";
import { Chips, ChipsChangeEvent } from "primereact/chips";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../config/axios.config";
import Cookies from "universal-cookie";

const SearchBar = () => {
  const token = new Cookies().get("userLoggedCIT");
  const [categories, setCategories] = useState<any[]>([]);
  const [subcategories, setSubcategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [tags, setTags] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("v1/general/categories", {
          headers: {
            Authorization: `Bearer ${token?.token}`,
          },
        });
        if (response.status === 200) {
          const formattedCategories = response.data.data.map(
            (category: any) => ({
              label: category.name,
              value: category.id,
              children: category.children,
            })
          );
          setCategories(formattedCategories);
        } else {
          // toast.error('Failed to fetch categories!');
        }
      } catch (error) {
        // toast.error('Error fetching categories');
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
    const selected = categories.find((cat) => cat.value === categoryId);
    if (selected) {
      setSubcategories(
        selected.children.map((child: any) => ({
          label: child.name,
          value: child.id,
          children: child.children,
        }))
      );
    } else {
      setSubcategories([]);
    }
  };

  const handleSubcategoryChange = (subcategoryId: string | null) => {
    setSelectedSubcategory(subcategoryId);
  };

  const handleSearch = () => {
    const searchParams: Record<string, string> = {};

    if (selectedCategory) searchParams.category = selectedCategory;
    if (selectedSubcategory) searchParams.subcategory = selectedSubcategory;
    if (tags.length) searchParams.tags = tags.join(",");

    const queryString = new URLSearchParams(searchParams).toString();
    navigate(`/search?${queryString}`);
  };

  return (
    <div className="search-bar">
      <div className="w-full flex items-center justify-between gap-5 p-2 shadow-md rounded-full bg-white">
        <div className="flex items-center justify-start gap-5">
          <SoSearch className="w-8 h-8 text-primary" />
          <Dropdown
            value={selectedCategory}
            options={categories}
            onChange={(e) => handleCategoryChange(e.value)}
            placeholder="Category"
            className="dropdown max-sm:hidden"
          />
          <Dropdown
            value={selectedSubcategory}
            options={subcategories}
            onChange={(e) => handleSubcategoryChange(e.value)}
            placeholder="Industry"
            className="dropdown max-sm:hidden"
          />
          <Chips
            value={tags}
            onChange={(e: ChipsChangeEvent) => setTags(e.value ?? [])}
            separator=","
            className="chips"
            placeholder="Search here ..."
          />
        </div>
        <Button onClick={handleSearch} className="rounded-full px-6">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
