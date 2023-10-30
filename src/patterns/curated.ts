import { Pattern } from "../patterns/index.js";

const patterns: Partial<Pattern>[] = [
  {
    id: 'CLOUDINARY_CREDENTIALS',
    name: 'Cloudinary Credentials',
    pattern: /cloudinary:\/\/[0-9]+:[A-Za-z0-9\-_.]+@[A-Za-z0-9\-_.]+/,
    confidence: 'high',
    examples: ['CLOUDINARY_URL'],
  },
];

export default patterns;