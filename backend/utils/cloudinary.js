import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Cloudinary cloud name from the .env file
  api_key: process.env.CLOUDINARY_API_KEY, // Cloudinary API key from the .env file
  api_secret: process.env.CLOUDINARY_API_SECRET, // Cloudinary API secret from the .env file
});

// Function to upload media to Cloudinary
export const uploadMedia = async (file) => {
  try {
    // Upload file to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(file, {
      resource_type: "auto", // Automatically detect the type of media (image, video, etc.)
    });
    return uploadResponse; // Return the upload response
  } catch (error) {
    console.log(error); // Log any errors that occur during the upload
  }
};

// Function to delete media from Cloudinary by public ID
export const deleteMediaFromCloudinary = async (publicId) => {
  try {
    // Delete the media asset with the specified public ID
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.log(error); // Log any errors that occur during the deletion
  }
};

// Function to delete a video specifically from Cloudinary by public ID
export const deleteVideoFromCloudinary = async (publicId) => {
  try {
    // Delete the video asset with the specified public ID
    await cloudinary.uploader.destroy(publicId, { resource_type: "video" });
  } catch (error) {
    console.log(error); // Log any errors that occur during the deletion
  }
};
