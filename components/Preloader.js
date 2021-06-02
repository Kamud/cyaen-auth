const Preloader = ({ loading, success, data }) => {
  return (
    <div className={loading ? "preloader-overlay active" : "preloader-overlay"}>
      <div className="preloader">
        {success ? (
          <>
            <h1 className="text-success">Success</h1>
            <img src="/success.svg" className="preloader-icon mb-3" />
            <h1 className="text-success small mt-2">
              Please wait while we redirect you to your site{" "}
              <span className="fw-bo">{data.organisation}</span>
            </h1>
            <h1 className="text-success small pulse ">
              SITE URL: <span className="fw-bo ">{data.web_address}</span>
            </h1>
          </>
        ) : (
          <>
            <img src="/loader.svg" className="preloader-icon" />
            <h1 className="text-primary pulse">Verifying, please wait</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Preloader;
