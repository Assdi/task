import '@testing-library/jest-dom';
import React from 'react';

// Configure testing environment
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock react-router-dom
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => jest.fn(),
    useParams: () => ({ id: '1' }),
    BrowserRouter: ({ children }) => <div>{children}</div>,
    Routes: ({ children }) => <div>{children}</div>,
    Route: ({ children }) => <div>{children}</div>,
    Link: ({ children, to }) => <a href={to}>{children}</a>,
    useLocation: () => ({ pathname: '/' }),
    useSearchParams: () => [new URLSearchParams(), jest.fn()]
  };
});
