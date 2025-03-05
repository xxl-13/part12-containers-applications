// This file is automatically run before each test

// Add React Testing Library's custom jest matchers
import '@testing-library/jest-dom';

// Mock fs modules to prevent issues with graceful-fs
jest.mock('fs', () => ({
  ...jest.requireActual('fs'),
  readFileSync: jest.fn(),
}));

// Mock graceful-fs to prevent clone issues
jest.mock('graceful-fs', () => ({
  ...jest.requireActual('fs'),
}));
