interface MediaMaxSize {
  [key: string]: number;
}

export const media_max_size: MediaMaxSize = {
  desktop: 768,
};

const customMediaQuery = (max_width: number): string => `@media (max-width: ${max_width}px)`;

const media = {
  custom: customMediaQuery,
  mobile: customMediaQuery(media_max_size.desktop),
};

export default media;
