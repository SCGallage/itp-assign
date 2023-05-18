import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AdminLogin from './views/admin-login'
import AdminDashboard from './views/admin-dashboard'
import EmployeeLogin from './views/employee-login'
import SystemLoginSelection from './views/system-login-selection'
import AddNewEmployee from './views/add-new-employee'
import EmployeeDashboardcopy1 from './views/employee-dashboardcopy1'
import EmployeeUpdatecopy1 from './views/employee-updatecopy1'
import ChangePaaswordcopy from './views/change-paaswordcopy'
import { employee } from './redux/employee'
import { Provider } from 'react-redux'
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ViewSettledbillsDashboard from './views/view-settledbills-dashboard';
import ViewallpendingbillsSorted from './views/viewallpendingbills-sorted';
import Updatebilldetails from './views/updatebilldetails';
import Updatependingbilldetails from './views/updatependingbilldetails';
import Addnewbill from './views/addnewbill';
import Addnewpendingbill from './views/addnewpendingbill';
import Viewasettledbill from './views/viewasettledbill';
import Viewapendingbill from './views/viewapendingbill';
import SearchResultSettledBills from './views/searchResult-settledBills';
import SearchResultPendingBills from './views/searchResult-pendingBills';

//user imports
import Login from './views/auth/Login'
import Register from './views/auth/Register'
import Forgot from './views/auth/Forgot'
import Reset from './views/auth/Reset'
import UserProfile from './views/auth/userProfile'
import Navbar from './views/navigationbar/navbar'
import Home from './views/auth/home'
import EditProfile from './views/auth/editProfile'
import { customer } from './redux/customer'
import Customer from "./views/view-customers";


//SALES manager
import StoreItems from "./views/store-items";
import AddnewItem from "./views/addnew-item";
import Outofstockitems from "./views/outofstockitems";
import SalesmanagerDashboard from "./views/salesmanager-dashboard";
import ItemPage from "./views/item-page";
import ItemDiscription from "./views/item-discription";
import UpdateItem from "./views/update-item";

//SUPPLIER
import SupplierLogin from "./views/supplier-login";
import Supplierregistration from "./views/supplierregistration.js";

import SupplierProfile from "./views/supplier-profile2.js";
import SupplyDashboard from "./views/supply-dashboard2";
import AddnewSupply from "./views/addnew-supply.js";
import EditSupply from "./views/edit-supply.js";
import ChatSection from "./views/chat-section.js";

import SearchSupply from "./views/searchSupply";

import { supply } from "./redux/supply";

import SerchProducts from "./views/serchProducts";
import ViewItem from "./views/view-item";

//inventory 
import InventSearchResult1 from "./views/invent-search-result1";
import InventLowStockItems from "./views/invent-low-stock-items";
import InventDashboard from "./views/invent-dashboard";
import AddInventItem from "./views/add-invent-item";
import UpdateInventItem from "./views/update-invent-item";
import ItemDetails from "./views/item-details";
import { store } from "./redux/store";

import PaymentOption from "./views/PaymentOption";
import PaymentManagement from "./views/PaymentManagement";
import MypaymentOption from "./views/MypaymentOption";
import UpdateBankOpt from "./views/UpdateBankOpt";
import Shipping from "./views/Shipping";
import ShippingUpdate from "./views/ShippingUpdate";
import ShippingAdd from "./views/ShippingAdd";
import BankAdd from "./views/BankAdd";
import CheckOut from "./views/CheckOut";
import CreaditCardAdd from "./views/CreaditCardAdd";
import MakePayment from "./views/MakePayments";
import PaymentFinal from "./views/paymentFinal";
import Shop from './views/shop'
import HomePage from './views/Homepage/home-page'

axios.defaults.withCredentials = true

const App = () => {
  return (
    <Provider store={employee}>
      <Router>
        <ToastContainer />
        <div>
          <Route exact path="/admin-login" component={AdminLogin} />
          <Route exact path="/admin-dashboard" component={AdminDashboard} />
          <Route exact path="/employee-login" component={EmployeeLogin} />
          <Route exact path="/system-login-selection" component={SystemLoginSelection} />
          <Route exact path="/add-new-employee" component={AddNewEmployee} />
          <Route exact path="/employee-dashboardcopy1" component={EmployeeDashboardcopy1} />
          <Route exact path="/employee-updatecopy1" component={EmployeeUpdatecopy1} />
          <Route exact path="/change-paaswordcopy" component={ChangePaaswordcopy} />
        </div>

        <div>
        <Route exact path="/view-settledbills-dashboard" component={ViewSettledbillsDashboard} />
          <Route exact path="/viewallpendingbills-sorted" component={ViewallpendingbillsSorted} />
          <Route exact path="/updatebilldetails/:billId" component={Updatebilldetails} />
          <Route exact path="/updatependingbilldetails/:billId" component={Updatependingbilldetails} />
          <Route exact path="/addnewbill" component={Addnewbill} />
          <Route exact path="/addnewpendingbill" component={Addnewpendingbill} />
          <Route exact path="/viewasettledbill/:billId" component={Viewasettledbill} />
          <Route exact path="/viewapendingbill/:billId" component={Viewapendingbill} />
          <Route exact path="/searchBill" component={SearchResultSettledBills} />
          <Route exact path="/searchPendingBill" component={SearchResultPendingBills} />
          <div>
            <Route component={StoreItems} exact path="/store-items" />
            <Route component={AddnewItem} exact path="/addnew-item" />
            <Route component={Outofstockitems} exact path="/outofstockitems" />
            <Route component={SalesmanagerDashboard} exact path="/salesmanager-dashboard"/>
            <Route component={SerchProducts} exact path="/serchProducts" />
            <Route component={Shop} exact path="/item-page" />
            <Route component={ItemDiscription} exact path="/item-discription/:id" />
            <Route component={UpdateItem} exact path="/update-item/:id" />
            <Route component={ViewItem} exact path="/view-item/:id" />
          </div>
          <Provider store={customer}>
            <Route component={Home} exact path="/Home" />
            <Route component={HomePage} exact path="/Home-page" />
            <Route component={Customer} exact path="/view-customers" />
            <Route component={Login} exact path="/login" />
            <Route component={Register} exact path="/Register" />
            <Route component={Forgot} exact path="/Forgot" />
            <Route component={Reset} exact path="/Reset" />
            <Route component={UserProfile} exact path="/userProfile" />
            <Route component={EditProfile} exact path="/editProfile" />
            <Route exact path="/resetpassword/:resetToken" component={Reset} />
          </Provider>
        </div>
        <Provider store={supply}>
          <Route component={SupplierLogin} exact path="/supplier-login" />
          <Route component={Supplierregistration} exact path="/supplierregistration" />
          <Route component={SupplierProfile} exact path="/supplier-profile2" />
          <Route component={SupplyDashboard} exact path="/supply-dashboard2" />
          <Route component={AddnewSupply} exact path="/addnew-supply" />
          <Route component={EditSupply} exact path="/edit-supply/:id" />
          <Route component={ChatSection} exact path="/chat-section" />
          <Route component={SearchSupply} exact path="/searchSupply" />
        </Provider>

        <Provider store={store}>
            <div>
              <Route component={InventDashboard} exact path="/invent-dashboard" />
              <Route component={InventSearchResult1} exact path="/invent-search-result1" />
              <Route component={AddInventItem} exact path="/add-invent-item" />
              <Route component={UpdateInventItem} exact path="/update-invent-item/:id" />
              <Route component={ItemDetails} exact path="/item-details/:id" />
              <Route component={InventLowStockItems} exact path="/invent-low-stock-items" />
            </div>
        </Provider>
        <Route exact path="/PaymentManagement" component={PaymentManagement} />
        <Route exact path="/Payment" component={PaymentOption} />
        <Route exact path="/UpdateCard" component={MypaymentOption} />
        <Route exact path="/UpdateBank" component={UpdateBankOpt} />
        <Route exact path="/Shipping" component={Shipping} />
        <Route exact path="/ShippingUpdate" component={ShippingUpdate} />
        <Route exact path="/BankAdd" component={BankAdd} />
        <Route exact path="/CardAdd" component={CreaditCardAdd} />
        <Route exact path="/MakePayment" component={MakePayment} />
        <Route exact path="/CheckOut" component={CheckOut} />
        <Route exact path="/ShippingAdd" component={ShippingAdd} />
        <Route exact path="/Final" component={PaymentFinal} />
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'))
