import './App.css';
// import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Navbar from './Components/Navber/navbar'
// import ArticleSection from './Pages/ArticleSection/ArticleSection';
// import ProductCards from './Pages/Card/Card';
// import CustomerReviews from './Pages/CustomerReview/CustomerReview';
import DiscoverProducts from './Pages/DiscoverProduct/DiscoverProduct';
import DropshipSpyTools from './Pages/DropShip/DropShip';
// import Industry from './Pages/Industry/Industry';
// import JoinMerchants from './Pages/Merchant/Merchant';
import Product from './Pages/Product/Product';
import SaleTraker from './Pages/SaleTraker/SaleTraker';
import Seller from './Pages/Seller/seller';
import ShopifyTracker from './Pages/Shopfy/Shopfy';
// import Signup from './Pages1/Signup/Signup';
// import SignIn from './Pages1/Singin/Signin';


function App() {
  return (
    <div>
      <Navbar/>
       <Header/>
       <DiscoverProducts/>
       <Seller/>
       <Product/>
       <ShopifyTracker/>
       <DropshipSpyTools/>
       <SaleTraker/>
     {/* <Signup/>  */}
     
     
      {/* <ProductCards/>
      <JoinMerchants/>
      <Industry/>
      <CustomerReviews/>
      <ArticleSection/>
      <SignIn/>
      <Footer/>   */}
    </div>
  );
}

export default App;
