export interface UserProfileImage {
  small: string,
  medium: string,
  large: string
}

export interface UserLinks {
  self: string,
  html: string,
  photos: string,
  likes: string,
  portfolio: string
}

export interface User {
  id: string,
  username: string,
  name: string,
  portfolio_url: string,
  bio: string,
  location: string,
  total_likes: number,
  total_photos: number,
  total_collections: number,
  instagram_username: string,
  twitter_username: string,
  profile_image: UserProfileImage,
  links: UserLinks
}

export interface ImageUrls {
  raw: string,
  full: string,
  regular: string,
  small: string,
  thumb: string
}

export interface ImageLinks {
  self: string,
  html: string,
  download: string,
  download_location: string
}

export interface Image {
  id: string,
  created_at: string,
  updated_at: string,
  width: number,
  height: number,
  color: string,
  likes: number,
  liked_by_user: boolean,
  description: string,
  user: User,
  urls: ImageUrls,
  links: ImageLinks
}
