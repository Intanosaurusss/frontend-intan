import { IoFilter } from "react-icons/io5";

const FilterComponent = () => {
    return (
        <div>
            <style>
                {``}
            </style>
            <div className="relative search-container mr-4 pl-3 pb-4">
      <input
       type="search"
       name="search"
       placeholder="Filter Berdasarkan"
    className="search-input pl-10 pr-5 border-2 border-gray-300 bg-white h-10 rounded-lg text-sm focus:outline-none focus:border-blue-500"
      />
      <IoFilter className="absolute left-3 top-3 text-gray-400 ml-3" />
      </div>
        </div>
    );
};

export default FilterComponent;
