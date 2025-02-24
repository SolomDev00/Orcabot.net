import {
  Navigate,
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../views";
import RootLayout from "../views/Layout";
import NotFoundPage from "../views/errors/404-NotFound";
import ForbiddenPage from "../views/errors/403-Forbidden";
import ErrorHandler from "../views/errors/500-Server";
import RedirectPage from "../views/middlewares/307-Redirect";
import SuccessPage from "../views/events/Success";
import FailedPage from "../views/events/Failed";
// import { AuthenticatedRoute, GuestRoute } from "../views/auth/ProtectedRoute";
// import SearchResults from "../views/pages/Search";
// import EmptyCartPage from "../views/pages/cart/EmptyCart";
// import CartPage from "../views/pages/cart/Cart";
import CheckoutPage from "../views/pages/cart/Checkout";
import DoneCheckoutPage from "../views/pages/cart/DoneCheckout";
import AdminCompanyLayout from "../views/admin/Layout";
import WalletPage from "../views/admin/pages/Wallet";
import SubscriptionsPage from "../views/admin/pages/Membership";
import InvoicesPage from "../views/admin/pages/Invoices";
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
        {/* <Route path="product" element={<ProductPage />} /> */}
        {/* <Route path="search" element={<SearchResults />} /> */}
        {/* <Route path="/cart" errorElement={<ErrorHandler />}>
          <Route index element={<CartPage />} />
          <Route path="empty" element={<EmptyCartPage />} />
        </Route> */}
        <Route path="/checkout" errorElement={<ErrorHandler />}>
          <Route index element={<CheckoutPage />} />
          <Route path="done" element={<DoneCheckoutPage />} />
        </Route>
        {/* <Route path="search" element={<SearchResults />} /> */}
      </Route>
      <Route
        path="/dashboard"
        element={
          // <AuthenticatedRoute allowedRoles={["admin"]}>
          <AdminCompanyLayout />
          // </AuthenticatedRoute>
        }
        errorElement={<ErrorHandler />}
      >
        <Route path="user" errorElement={<ErrorHandler />}>
          <Route path="wallet" element={<WalletPage />} />
          <Route path="membership" element={<SubscriptionsPage />} />
          <Route path="invoice" element={<InvoicesPage />} />
        </Route>
        <Route index element={<Navigate to="user/wallet" replace />} />
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
