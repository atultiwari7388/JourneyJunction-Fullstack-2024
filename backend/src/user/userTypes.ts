import mongoose from "mongoose";

interface ISocialLink {
  platform: "facebook" | "twitter" | "instagram" | "linkedin";
  url: string;
}

export interface IUser {
  email: string;
  userName: string;
  name: string;
  password: string;
  socialLinks: ISocialLink[];
  profilePicture: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  role: "user" | "admin";
  location?: string;
  website?: string;
  followers: mongoose.Types.ObjectId[];
  following: mongoose.Types.ObjectId[];
  blogs: mongoose.Types.ObjectId[];
}