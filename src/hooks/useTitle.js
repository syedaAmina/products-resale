import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} || used car buy sell`;
  }, [title]);
};

export default useTitle;
