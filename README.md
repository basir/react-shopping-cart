# Build ECommerce Shopping Cart by React & Redux 2020 Edition

Demo: https://reactredux-shoppingcart.herokuapp.com/

[Get 90% Discount On This Course At Udemy](https://codingwithbasir.com/udemy-shopping-cart)

## What you’ll learn

- Design Shopping Cart Using HTML and CSS
- Implement React Components For Product List, Filter, Cart
- Managing Component State using Redux, React-Redux and - Redux-Thunk
- Creating Animations Using React-Reveal and Add Routes using React-Routers
- Build Backend using Node, Express, MongoDB and Mongoose
- Publish Project on the Heroku and MongoDB Atlas

## Are there any course requirements or prerequisites?

- Basic HTML and CSS
- Basic JavaScript

## Who this course is for:

- Javascript developers
- Web Developers
- Freelancers
- Programming Students

## Table Of Content

1. Introduction

   1. Introduction
      1. Fully-Functional Shopping Cart
      2. Instant Feedback
      3. Animated and Intuitive Design
      4. List Products
      5. Sort Products By Price High or Low
      6. Filter Products by Size
      7. Open Modal By Click on Product
      8. Add Product To Cart using Animation
      9. Handle Multiple Click By Adding More Items
      10. Remove Product
      11. Show Checkout Form
      12. Create Order with user friendly id
      13. Admin Section to see list of products
      14. Using postman to add or remove products and orders
   2. Tools and Technologies
      1. JavaScript (arrow functions, array functions, spread Operators, ...)
      2. React (react-touter-dom, react-reveal, react-modal)
      3. Redux (react-redux, redux-thunk)
      4. Node (express, body-parser, Environment Variables, nodemon)
      5. MongoDB ( mongoose, shortid)
      6. VS Code (ES6 Snippets, ES7 React Extension, ESLint Extension,CSS Peek)
      7. Chrome ( React Developer Tools, Redux Developer Tools)
      8. Git (create repo, commit, remote, create and push branch)
      9. Github (create repo, connect to local repo, pull request and merge)
      10. Postman ( send get, post, put and delete requests to apis)
      11. Deployment ( Heroku, MongoDB Atlas Cloud)
   3. Create React App
      1. Open VS Code and open terminal
      2. cd Desktop
      3. npx create-react-app react-shopping-cart
      4. Remove unused files
      5. Convert App.js Class Component
      6. Add header, main and footer
      7. Update index.css to add grid
   4. Project Development Workflow
      1. Create Google Spreadsheet
      2. Add columns Feature, Description, State, and Duration
      3. Enter Products Component, Show list of products, Open, 2
      4. Add Time ? Hours, Rate 30 USD/Hours, Cost ? USD
      5. Add All Features
      6. Create Github account
      7. Create new repository
      8. Add it as remote repository in VS Code
      9. Commit changes
      10. Push changes on github
      11. Start => create new feature Feature 1 in google spreadsheet
      12. Create a new branch feature-1 for test the workflow
      13. Add "// branch feature 1" in App.js Line 1
      14. Commit with message "feature 1"
      15. Click publish changes
      16. Open repository page on github
      17. Create pull request
      18. Merge pull request
      19. In VS Code switch to master and Sync changes
      20. End => Loop from step 11 for next feature

2. React

   1. Products Component
      1. Create data.json {products:[{_id, title, ...}]
      2. Update App.js to import data.json
      3. div.content {flex, wrap}
      4. div.main {flex: 3 60rem}
      5. div.sidebar {flex: 1 20rem;}
      6. Create components/Products.js component
      7. Add it to div.main in App.js and set products props
      8. ul.products {flex,center, center,warp, p:0,m:0, style:none}
      9. this.props.products.map(p => li.key={p.\_id} {flex, p:1, m:1, none,h:47}
      10. div.product { flex, column, space-between, h:100%}
      11. a href="#" > img {max-width, max-height:37} + p {p.title}
      12. div.product-price > div.product.price + button.button.primary Add to cart
      13. product-price {flex, space-between, center}
      14. div {p.price} flex: 1; align: center; size: 2rem
      15. button.button.primary Add To Cart
   2. Filter Component
      1. Create components/Filter.js
      2. Add it above Products component in App.js
      3. Update Filter.js render
      4. div.filter {flex, wrap, p,m:1rem, border-bottom: .1rem}
      5. filter-result {this.props.filteredProducts.length}
      6. filter-sort {flex:1}
      7. label Order select value=this.props.sort
      8. onChange= this.props.sortProducts(e.t.value)
      9. option lowestprice Lowest, ...
      10. filter-size {flex:1}
      11. label Filter select value=this.props.size
      12. onChange= this.props.filterProducts(e.t.value)
      13. option "" ALL, XS, S, M, L, XL, XXL
      14. App.js
      15. Add Filter Component
   3. Cart Component
      1. Set Active Task Management Spreadsheet
      2. Create branch cart-component
      3. Product.js
      4. Handle "Add To Cart" to this.props.addToCart(product)
      5. App.js
      6. Add cartItems to state as []
      7. Create addToCart(product)
      8. Slice, Check product existance, add to cartitems
      9. Cart.js
      10. Define cartItems from this.props
      11. Check cartItems.length and show message
      12. List cartItems {cartItems.length > 0 && (}
      13. index.css
      14. Style cart, cart-header, cart-items (img, li),
      15. Publish changes
      16. Pull request, merge, change to master
      17. Task Management Spreadsheet set it done
   4. Checkout Form
      1. Set Active Task Management Spreadsheet
      2. Create branch checkout-form
      3. Cart.js
      4. Make cart items persistent
      5. Use LocalStorage on App constructor to load cart items (JSON.parse)
      6. Use LocalStorage on addToCart to save cart items (JSON.stringify)
      7. Handle Click on Proceed
      8. Update showCheckout state to true on click
      9. Conditional rendering Checkout Form
      10. Get Email, Name and Address required input
      11. Define handleInput function
      12. Add Checkout Button
      13. Handle onSubmit Form Event by this.createOrder
      14. Create order object and pass to parent to handle it
      15. Commit and Publish changes
      16. Pull request, merge, change to master
      17. Task Management Spreadsheet set it done
   5. Add Modal and Animation
      1. Set Active Task Management Spreadsheet
      2. Create branch animation-modal
      3. Show Animation
      4. Install react-reveal
      5. Create fade effect from bottom for products
      6. Create fade left for add to cart
      7. Create fade right for show checkout form
      8. Open Modal by click on product image
      9. Install react-modal
      10. Products.js
      11. Import Modal
      12. Set state for product to null
      13. Define openModal and closeModal
      14. Show Modal if product exist
      15. Create Modal
      16. Create zoom effect for modal
      17. index.css
      18. Style Product Details
      19. Commit and Publish changes
      20. Pull request, merge, change to master
      21. Task Management Spreadsheet set it done

3. Node.JS

   1. Create Products Backend
      1. Install nodemon globally
      2. Add server.js
      3. Install express body-parser mongoose shortid
      4. Install MongoDB
      5. app = express()
      6. app.use(bodyParser.json())
      7. mongoose.connect()
      8. create Product model
      9. app.post("/api.products")
      10. Postman send post request
      11. route.get("/api/products")
      12. route.delete("/api/products/:id")

4. Redux

   1. Add Redux
      1. what is redux (diagram)
      2. update task on spreadsheet
      3. create branch add-redux-products
      4. npm install redux react-redux redux-thunk
      5. create types
      6. types.js
      7. define FETCH_PRODUCTS
      8. actions/productActions.js
      9. declare fetchProducts
      10. create reducers
      11. reducers/productReducers.js
      12. define case FETCH_PRODUCTS
      13. create store
      14. store.js
      15. import redux
      16. set initial state
      17. define initialState
      18. create store
      19. import productReducers
      20. combine reducers
      21. Use store
      22. App.js
      23. import store
      24. wrap all in Provider
      25. connect products
      26. components/Products.js
      27. connect to store
      28. import fetchProducts
      29. fetch products on did mount
      30. package.json
      31. set proxy to http://127.0.0.1:5000
      32. npm run server
      33. check products list
      34. commit and publish
      35. send pull request and merge
      36. update spreadsheet
   2. Add Redux To Filter
      1. Updte task and branch
      2. types.js
      3. create FILTER_PRODUCTS_BY_SIZE
      4. create ORDER_PRODUCTS_BY_PRICE
      5. actions/productActions.js
      6. create filterProducts
      7. move app.js filterProducts logic here
      8. create sortProducts
      9. move app.js filterProducts logic here
      10. reducers/productReducers.js
      11. case FILTER_PRODUCTS_BY_SIZE
      12. case ORDER_PRODUCTS_BY_PRICE
      13. Filter.js
      14. connect props: size, sort, items and filteredItems
      15. connect actions: filterProducts and sortProducts
      16. show loading if no filteredProducts
      17. App.js
      18. remove Filter props
      19. check result
      20. update task and branch
   3. Add Redux To Cart
      1. Updte task and branch
      2. types.js
      3. create ADD_TO_CART
      4. create REMOVE_FROM_CART
      5. actions/cartActions.js
      6. create addToCart
      7. create removeFromCart
      8. reducers/cartReducers.js
      9. case ADD_TO_CART
      10. case REMOVE_FROM_CART
      11. Cart.js
      12. connect props: cartItems
      13. connect actions: removeFromCart
      14. Product.js
      15. add action addToCart
      16. App.js
      17. remove Cart props
      18. store.js
      19. set initial cartItems to localStorage
      20. check result
      21. update task and branch

5. Advanced Topics

   1. Create Order
      1. Backend
      2. server.js
      3. create order modal
      4. get /api/orders
      5. post /api/orders
      6. delete /api/orders/:id
      7. Frontend
      8. create types
      9. types.js
      10. CLEAR_ORDER, CLEAR_CART, CREATE_ORDER
      11. create actions
      12. actions/orderActions.js
      13. createOrder(order)
      14. clearOrder()
      15. create reducers
      16. reducers/orderReducers.js
      17. case CREATE_ORDER
      18. case CLEAR_ORDER
      19. Update Cart Component
      20. components/Cart.js
      21. connect order, createOrder, clearOrder
      22. form onSubmit={this.createOrder}
      23. createOrder() this.props.createOrder(order)
      24. closeModal() this.props.clearOrder()
      25. render()
      26. const { cartItems, order } = this.props;
      27. {order && (<Modal></Modal>}
   2. Manage Orders
      1. Add new page
      2. Install react-router-dom
      3. App.js
      4. Import BrowserRouter, Route, Link
      5. render()
      6. BrowserRouter
      7. Route path="/admin" component={AdminScreen}
      8. Route path="/" exact={true} component={HomeScreen}
      9. HomeScreen.js
      10. <Filter /> <Products /> <Cart />
      11. AdminScreen.js
      12. <Orders />
      13. components/Orders.js
      14. render() <div> Orders </div>
      15. Backend
      16. server.js
      17. app.get("/api/orders")
      18. app.delete("/api/orders/:id")
      19. Frontend
      20. types.js
      21. FETCH_ORDERS
      22. actions/orderActions.js
      23. fetchOrders()
      24. reducers/orderReducers.js
      25. case FETCH_ORDERS {orders: action.payload}
      26. components/Orders.js
      27. connect orders, fetchOrders
      28. componentDidMount() fetchOrders
      29. render()
      30. !orders <div>Loading...</div>
      31. table orders
      32. index.css
      33. style orders

6. Deploy Website
   1. Create MongoDB Cloud Database
   2. Login to https://www.mongodb.com/cloud
   3. Add database user
   4. Left sidebar> Select Security > Database Access
   5. Select Add New User button
   6. Enter user name and password and click Add User
   7. Add IP whitelist
   8. Left sidebar > Select Security > Network Access
   9. Select Add IP Address
   10. Enter 0.0.0.0/0 in Whitelist Entry and click Confirm
   11. Get connection string
   12. Left sidebar > Select Altas > Cluster
   13. Click Connect
   14. Click Connect to your application
   15. Click Copy button
   16. Step 2: Deploy On Heroku
   17. Create git repository in amazona folder using git init
   18. Create Heroku Account at heroku.com
   19. Heroku
   20. Create Heroku account on heroku.com
   21. Install Heroku cli https://devcenter.heroku.com/articles/heroku-cli
   22. Open Terminal
   23. heroku login
   24. heroku apps:create react-shopping-cart-best
   25. Edit package.json
   26. "engines": { "node": "12.4.0", "npm": "6.9.0"}
   27. Create Procfile
   28. web: node server.js
   29. Set MongoDB connection string in Heroku
   30. Open Heroku apps https://dashboard.heroku.com/apps/
   31. Select your apps, open Setting Tab and click Reveal Config Vars
   32. Add key MONGODB_URL
   33. Enter copied connection string from the previous step
   34. Update database name and username and password
   35. Add key NODE_MODULES_CACHE and value false
   36. app.use("/", express.static(\_\_dirname + "/build"));
   37. app.get("/", (req, res) => res.sendFile(\_\_dirname + "/build/index.html"));
   38. git add . && git commit -m "publish"
   39. git push heroku
