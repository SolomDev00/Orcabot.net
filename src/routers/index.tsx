import {
  Navigate,
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../views";
import AboutUsPage from "../views/pages/AboutUs";
import RootLayout from "../views/Layout";
import NotFoundPage from "../views/errors/404-NotFound";
// import AuthLayout from "../views/auth/Layout";
// import RegisterPage from "../views/auth/pages/Register";
// import OTPPage from "../views/auth/pages/OTP";
import ForbiddenPage from "../views/errors/403-Forbidden";
import ErrorHandler from "../views/errors/500-Server";
import RedirectPage from "../views/middlewares/307-Redirect";
// import ForgetPasswordPage from "../views/auth/pages/ForgetPassword";
// import ResetPasswordPage from "../views/auth/pages/ResetPassword";
import SuccessPage from "../views/events/Success";
import FailedPage from "../views/events/Failed";
import MenuPage from "../views/pages/Menu";
// import { AuthenticatedRoute, GuestRoute } from "../views/auth/ProtectedRoute";
import ProductPage from "../views/pages/Product";
import SearchResults from "../views/pages/Search";
import EmptyCartPage from "../views/pages/cart/EmptyCart";
import CartPage from "../views/pages/cart/Cart";
import CheckoutPage from "../views/pages/cart/Checkout";
import DoneCheckoutPage from "../views/pages/cart/DoneCheckout";
import AdminCompanyLayout from "../views/admin/Layout";
import AdminDashboardPage from "../views/admin";
// import AdminDashboardPage from "../views/admin";
// import AdminCompanyLayout from "../views/admin/Layout";
// import AdminServicesPage from "../views/admin/pages/Services";
// import AdminSettingsPage from "../views/admin/pages/Settings";
// import AdminCompaniesPage from "../views/admin/pages/Companies";
// import AdminTeamPage from "../views/admin/pages/Team";

const routers = createHashRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="/cart" errorElement={<ErrorHandler />}>
          <Route index element={<CartPage />} />
          <Route path="empty" element={<EmptyCartPage />} />
        </Route>
        <Route path="/checkout" errorElement={<ErrorHandler />}>
          <Route index element={<CheckoutPage />} />
          <Route path="done" element={<DoneCheckoutPage />} />
        </Route>
        <Route path="search" element={<SearchResults />} />
      </Route>
      <Route
        path="/admin"
        element={
          // <AuthenticatedRoute allowedRoles={["admin"]}>
          <AdminCompanyLayout />
          // </AuthenticatedRoute>
        }
        errorElement={<ErrorHandler />}
      >
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<AdminDashboardPage />} />
      </Route>

      {/* Payment Response */}
      <Route path="/payment/success" element={<SuccessPage />} />
      <Route path="/payment/failed" element={<FailedPage />} />
      {/* 307 Redirect */}
      <Route path="/307" element={<RedirectPage />} />
      {/* 403 Forbidden */}
      <Route path="/403" element={<ForbiddenPage />} />
      {/* Page Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

export default routers;
