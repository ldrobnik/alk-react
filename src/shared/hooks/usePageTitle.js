import { useEffect } from "react";

export default function usePageTitle(pageTitle) {
  const mainTitle = "Instaclone";
  useEffect(() => {
    document.title = `${mainTitle} - ${pageTitle}`;
  }, [pageTitle]);
}
