import axios from "axios";
import { cacheWikipedia } from "../store/slices/apiCacheSlice.js";
import { store } from "../store/store.js";

export const fetchWikipediaSummary = async (title) => {
  const lowerTitle = title.toLowerCase();
  const cached = store.getState().apiCache[lowerTitle];
  if (cached) return cached;

  try {
    const response = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
    );
    const data = {
      extract: response.data.extract,
      url: response.data.content_urls?.desktop?.page,
      title: response.data.title,
    };
    store.dispatch(cacheWikipedia({ title: lowerTitle, data }));
    return data;
  } catch (error) {
    console.error("Wikipedia API error:", error);
    return null;
  }
};