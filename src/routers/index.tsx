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
import LoginPage from "../views/auth/pages/Login";
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
import AuthLayout from "../views/auth/Layout";
import { AuthenticatedRoute, GuestRoute } from "../views/auth/ProtectedRoute";
import RegisterPage from "../views/auth/pages/Register";
import ForgetPasswordPage from "../views/auth/pages/ForgetPassword";
import DoneForgetPage from "../views/auth/pages/DoneForget";
import DoneResetPage from "../views/auth/pages/DoneReset";
import ResetPasswordPage from "../views/auth/pages/ResetPassword";
import ProductPage from "../views/pages/Product";
import SearchResults from "../views/pages/Search";
import EmptyCartPage from "../views/pages/cart/EmptyCart";
import CartPage from "../views/pages/cart/Cart";
import CheckoutPage from "../views/pages/cart/Checkout";
import DoneCheckoutPage from "../views/pages/cart/DoneCheckout";
import UserProfilePage from "../views/user/pages/UserProfile";
import DashboardUserLayout from "../views/user/Layout";
import OrdersPage from "../views/user/pages/Orders";
import ViewOrderPage from "../views/user/pages/ViewOrder";
import SavedPage from "../views/user/pages/Saved";
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
        path="/auth"
        element={<AuthLayout />}
        errorElement={<ErrorHandler />}
      >
        <Route index element={<Navigate to="login" replace />} />
        <Route
          path="login"
          element={
            <GuestRoute>
              <LoginPage />
            </GuestRoute>
          }
        />
        <Route
          path="register"
          element={
            <GuestRoute>
              <RegisterPage />
            </GuestRoute>
          }
        />
        <Route
          path="forget-password"
          element={
            <GuestRoute>
              <ForgetPasswordPage />
            </GuestRoute>
          }
        />
        <Route
          path="reset-password"
          element={
            <GuestRoute>
              <ResetPasswordPage />
            </GuestRoute>
          }
        />
        <Route
          path="done-forget"
          element={
            <GuestRoute>
              <DoneForgetPage />
            </GuestRoute>
          }
        />
        <Route
          path="done-reset"
          element={
            <GuestRoute>
              <DoneResetPage />
            </GuestRoute>
          }
        />
      </Route>
      {/*
        <Route
          path="otp"
          element={
            <GuestRoute>
              <OTPPage />
            </GuestRoute>
          }
        />
      */}
      <Route
        path="/user"
        element={
          // <AuthenticatedRoute allowedRoles={["individual"]}>
          <DashboardUserLayout />
          // </AuthenticatedRoute>
        }
        errorElement={<ErrorHandler />}
      >
        <Route index element={<Navigate to="profile" replace />} />
        <Route path="profile" element={<UserProfilePage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="orders/:id" element={<ViewOrderPage />} />
        <Route path="saved" element={<SavedPage />} />
      </Route>
      <Route
        path="/admin"
        element={
          <AuthenticatedRoute allowedRoles={["admin"]}>
            <AdminCompanyLayout />
          </AuthenticatedRoute>
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
