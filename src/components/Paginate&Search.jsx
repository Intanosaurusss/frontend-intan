import { HiOutlineSearch } from 'react-icons/hi';

function PaginateComponent() {
  return (
    <div className="flex justify-between items-center px-0">
      <ul className="pagination">
        <li className="page-item pl-3">
          <a className="page-link text-sm" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-sm" href="#">1</a>
        </li>
        <li className="page-item">
          <a className="page-link text-sm" href="#">2</a>
        </li>
        <li className="page-item">
          <a className="page-link text-sm" href="#">3</a>
        </li>
        <li className="page-item">
          <a className="page-link text-sm" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
      <div className="relative search-container mr-4 mb-3">
        <input
          type="search"
          name="search"
          placeholder="Cari"
          className="search-input pl-10 pr-5 border-2 border-gray-300 bg-white h-10 rounded-lg text-sm focus:outline-none focus:border-blue-500"
        />
        <HiOutlineSearch className="absolute left-3 top-3 text-gray-400" />
      </div>
    </div>
  );
}

export default PaginateComponent;
