/* eslint-disable @typescript-eslint/no-explicit-any */
import "./elements.style.css";
import React from "react";
import { SoSearch } from "solom-icon";
import Button from "../ui/elements/Button";
import { Dropdown } from "primereact/dropdown";
import { Chips } from "primereact/chips";

const SearchBarViewAll = ({
  onSearch,
  onCategorySelect,
  categories,
  initialCategory,
  onIndustrySelect,
  industries,
  initialIndustry,
  initialTags,
  hidden,
}: any) => {
  const [selectedCatgory, setSelectedCatgory] = React.useState<string | null>(
    initialCategory || null
  );
  const [selectedIndustry, setSelectedIndustry] = React.useState<string | null>(
    initialIndustry || null
  );
  const [tags, setTags] = React.useState<string[]>(initialTags || []);

  return (
    <div className="search-bar-viewall mb-10">
      <div className="w-full flex items-center justify-between gap-5 p-2 shadow-md rounded-full">
        <div className="flex items-center justify-start gap-5">
          <SoSearch className="w-8 h-8 text-primary" />
          <Dropdown
            value={selectedCatgory}
            options={categories}
            onChange={(e) => {
              setSelectedCatgory(e.value);
              onCategorySelect(e.value);
            }}
            placeholder="Categories"
            className="dropdown"
          />
          <Dropdown
            value={selectedIndustry}
            options={industries}
            onChange={(e) => {
              setSelectedIndustry(e.value);
              onIndustrySelect(e.value);
            }}
            placeholder="Industries"
            className={hidden ? "hidden" : "dropdown"}
          />
          <Chips
            value={tags}
            onChange={(e) => setTags(e.value ?? [])}
            separator=","
            className="chips"
            placeholder="Search here ..."
          />
        </div>
        <Button
          onClick={() => onSearch(tags.join(","))}
          className="rounded-full px-6"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBarViewAll;
