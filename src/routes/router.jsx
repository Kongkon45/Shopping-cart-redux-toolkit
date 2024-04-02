import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Error from "../pages/Error";
import ShoppingCart from "../components/ShoppingCart";
import Cart from "../components/Cart";
import ProductDetails from "../components/ProductDetails";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Main/>,
        children : [
            {
                path : "/shop/:name/:id",
                element : <ProductDetails/>
            },
            {
                path : "/shop",
                element : <ShoppingCart/>
            },
            {
                path : "/cart",
                element : <Cart/>
            },
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "*",
                element : <Error/>
            }
        ]
    }
])

export default router;