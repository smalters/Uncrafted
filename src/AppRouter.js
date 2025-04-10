import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductCatalogUI from "./pages/ProductCatalogUI";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import PageTransitionWrapper from "./components/PageTransitionWrapper";

export default function AppRouter() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-gray-100 font-sans text-gray-900">
      <div className="relative shadow-sm">
        <Header className="hidden md:flex" />
        <MobileNav className="md:hidden" />
      </div>
      <main className="container mx-auto flex-grow px-4 sm:px-6 lg:px-16 py-10 animate-fade-in">
        <Routes className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Route
            path="/"
            element={
              <PageTransitionWrapper keyProp="home">
                <ProductCatalogUI />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="/product/:slug"
            element={
              <PageTransitionWrapper keyProp="product">
                <ProductDetailPage />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="/category/:category"
            element={
              <PageTransitionWrapper keyProp="category">
                <CategoryPage />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="*"
            element={
              <PageTransitionWrapper keyProp="404">
                <div className="px-8 py-16 text-center bg-white shadow-xl rounded-3xl border border-gray-200 space-y-4 font-sans">
                  <h2 className="text-4xl font-extrabold mb-3">404</h2>
                  <p className="text-base text-gray-600">
                    This page does not exist or has moved.
                  </p>
                  <div className="pt-4">
                    <a
                      href="/"
                      className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition font-semibold"
                    >
                      Back to Home
                    </a>
                  </div>
                </div>
              </PageTransitionWrapper>
            }
          />
        </Routes>
      </main>
      <Footer className="px-6 text-sm sm:text-base" />
    </div>
  );
}
