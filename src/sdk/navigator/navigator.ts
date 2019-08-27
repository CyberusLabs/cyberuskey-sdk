export interface Navigator {
  navigate(url: string): Promise<void>;
}