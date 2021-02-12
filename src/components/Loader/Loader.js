//import { ImSpinner } from "react-icons/im";
import Loader from "react-loader-spinner";

export default function MoviesLoading() {
  return (
    <Loader
      role="alert"
      type="Circles"
      color="#000"
      width={40}
      height={40}
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "70px",
      }}
    />
  );
}
