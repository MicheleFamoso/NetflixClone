const MySection = function () {
  return (
    <div className="d-flex justify-content-between bg-dark">
      <div className="d-flex">
        <h2 className="mb-4 text-light ms-4">TV Shows</h2>
        <div className="btn-group" role="group">
          <div className="dropdown ms-4 mt-1">
            <button
              type="button"
              className="btn btn-dark btn-sm dropdown-toggle rounded-0 border d-none d-md-block"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Genres
            </button>
          </div>
        </div>
      </div>
      <div className=" d-flex">
        <i className="bi bi-grid icons text-light me-5 d-none d-md-block"></i>
        <i className="bi bi-grid-3x3 icons text-light me-5 d-none d-md-block"></i>
      </div>
    </div>
  );
};
export default MySection;
