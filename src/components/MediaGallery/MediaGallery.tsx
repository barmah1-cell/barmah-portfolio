import React, { useState } from "react";
import { mediaItems } from "../../data/mediaItems";
import MediaCard from "./MediaCard";
import MediaModal from "./MediaModal";
import { MediaItem } from "../../types";

const MediaGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");

  const filteredItems = mediaItems.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <section id="media" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Media Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore photos and videos from conferences, workshops, and presentations
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === "all"
                ? "bg-teal-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("image")}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === "image"
                ? "bg-teal-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => setFilter("video")}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === "video"
                ? "bg-teal-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Videos
          </button>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <MediaCard key={item.id} item={item} onView={setSelectedItem} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No media items found</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <MediaModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};

export default MediaGallery;
