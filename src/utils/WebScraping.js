import axios from "axios";

export const fetchContentFromUrl = async (url) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const paragraphs = Array.from(doc.querySelectorAll("p, article"));
    const content = paragraphs.map((p) => p.textContent).join("\n");

    const cleanContent = content.replace(/<\/?[^>]+(>|$)/g, ""); // Simple HTML tags removal
    return cleanContent;
  } catch (error) {
    console.error("Error fetching content from URL:", error);
    throw new Error("Failed to fetch content from URL");
  }
};
