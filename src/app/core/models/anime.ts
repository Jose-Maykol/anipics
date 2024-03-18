export interface AnimePicture {
  url: string;
  artist_href: string;
  artist_name: string;
  source_url: string;
}

export interface ListAnimePicture {
  results: AnimePicture[];
}