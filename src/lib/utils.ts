type ClassValue = string | number | boolean | undefined | null | { [key: string]: boolean };

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}