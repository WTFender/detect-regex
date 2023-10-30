import { Pattern } from "../patterns/index.js";

const group = 'curated';

const patterns: Partial<Pattern>[] = [
  {
    id: 'CLOUDINARY_CREDENTIALS',
    name: 'Cloudinary Credentials',
    pattern: /cloudinary:\/\/[0-9]+:[A-Za-z0-9\-_.]+@[A-Za-z0-9\-_.]+/,
    confidence: 'high',
    example: 'cloudinary://123456789012345:ALKJdjklLJAjhkKJ45hBK92baj3@n07t21i7',
  },
];

patterns.forEach((pattern) => {
  pattern.group = group;
});

export default patterns;