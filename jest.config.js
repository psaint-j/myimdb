module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jest-environment-jsdom',
  // setupFiles: ["<rootDir>/env-setup.ts"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    "swiper/css": "swiper/swiper.min.css"
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: {
        jsx: 'react-jsx',
      },
    },],
  }
}