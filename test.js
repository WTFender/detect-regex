import { patterns, limit, modifiers } from './patterns.js';
import bigText from './text.js';
import DetectRegex from './index.js';

const detector = new DetectRegex(patterns, modifiers);
detector.detect(bigText);
detector.print();