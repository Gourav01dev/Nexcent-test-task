export interface Islide {
  title: string;
  highlightedText: string;
  description: string;
  image: string;
}
export interface IRoute {
  name: string;
  href: string;
}
export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}
export interface CommonProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  reverse?: boolean;
}
export interface StatItem {
  number: string;
  label: string;
  image: string;
}
export interface BlogPost {
  image: string;
  imageAlt: string;
  description: string;
  link: string;
}
export type OverlayCardProps = {
  image: string;
  imageAlt: string;
  description: string;
  link: string;
};