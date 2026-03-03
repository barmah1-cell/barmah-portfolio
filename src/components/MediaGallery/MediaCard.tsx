import React from "react";
import { MediaItem } from "../../types";

interface MediaCardProps {
  item: MediaItem;
  onView: (item: MediaItem) => void;
}

const MediaCard: React.FC<MediaCardProps> = ({ item, onView }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 bg-gray-200 cursor-pointer" onClick={() => onView(item)}>
        <img
          src={item.thumbnailUrl}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        {item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-navy-900 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-teal-600 uppercase">
            {item.category || item.type}
          </span>
          <span className="text-xs text-gray-500">{item.date}</span>
        </div>
        <h3 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.description}</p>
        <button
          onClick={() => onView(item)}
          className="mt-4 text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center"
        >
          {item.type === "video" ? "Watch Video" : "View Image"}
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MediaCard;
