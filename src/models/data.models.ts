import type { JSX } from 'solid-js/jsx-runtime';

export interface ModuleData {
  title: string;
  margin: string;
  route: string;
  module: string;
}

export interface Photo {
  title: string;
  location: string;
  large: string;
  thumb: string;
}

export interface DetailsPhotos {
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}

export interface ProjectType {
  title: string;
  description: string;
  photo: {
    card: string[];
    details: DetailsPhotos;
  };
  details: string;
  technology: string[];
  links: {
    [index: string]: string;
  };
}

export interface Icon {
  element: JSX.Element;
  label: string;
  link: string;
}
