const noImagePlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect width='300' height='200' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23a0aec0'%3ENo Image%3C/text%3E%3C/svg%3E";

const CropedImageUrl = (url: string) => {
  const target = "media/";
  if (!url) return noImagePlaceholder;
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default CropedImageUrl;
