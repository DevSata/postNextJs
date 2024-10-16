"use client";
import React, { useState, useEffect } from "react";

type Props = {
  isLoading: boolean;
};

function TemplateCardsImage({ isLoading }: Props) {
  const widths: number[] = [5, 25, 35, 45, 60, 30, 80, 90];

  return (
    <div
      className={`transition-all ${
        isLoading ? "opacity-100" : "opacity-0"
      } fixed w-screen h-screen z-10 bg-black`}
    >
      <div>
        {!isLoading ? (
          <span className="text-red-500">Loading...</span>
        ) : (
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 animate-pulse"
              style={{ width: `100%` }}
            ></div>
          </div>
        )}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="font-bold text-5xl text-white animate-pulse">
          M<span className="text-red-500">App</span>
        </p>
      </div>
    </div>
  );
}

export default TemplateCardsImage;
