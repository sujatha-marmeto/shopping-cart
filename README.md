# Shopping Cart Functionality Pseudo Code

## hosted Link: https://sujatha198.github.io/shopping-cart/index.html

## 1. Data Initialization
- Initialize products array with product details (id, name, price, image)
- Initialize cart array from localStorage or as an empty array
- Initialize currentPage to 1
- Initialize itemsPerPage to 10
- Initialize filteredProducts as a copy of the products array


## 2. Document Ready Event
- On Document Load:
- If on 'product-list' page:
- Call renderProductList()
- If on 'cart' page:
- Call renderCart()


## 3. Render Product List
- Function renderProductList():
- Clear product-list element
- Paginate `filteredProducts` into `currentPage` with `itemsPerPage`
- For each `product` in `paginatedProducts`:
    - Create product element with:
        - Image
        - Truncated name
        - Price
        - 'Add to Cart' button with onclick `addToCart(product.id)`
    - Append product element to `product-list`

- Update page number display


## 4. Render Cart
- Function renderCart():
- Clear cart-items element

- For each `item` in `cart`:
    - Create cart item element with:
        - Image
        - Truncated name
        - Quantity
        - Price (quantity * price)
        - 'Remove' button with onclick `removeFromCart(item.id)`
    - Append cart item element to `cart-items`

- Call `updateCartSummary()`


## 5. Add to Cart
- Function addToCart(productId):
- Find product with productId in products
- Find cartItem with productId in cart
- If cartItem exists:
- Increment quantity
- Else:
   - Add new item with quantity 1 to cart
   - Save `cart` to localStorage
   - Call `updateCartSummary()`

## 6. Remove from Cart
- Function removeFromCart(productId):
- Filter out item with productId from cart
- Save updated cart to localStorage
- Call renderCart()

## 7. Update Cart Summary
- Function updateCartSummary():
- Calculate totalQuantity as sum of quantities in cart
- Update cart-summary element with:
   - 'Items in Cart: totalQuantity' if totalQuantity > 0
   - 'Your cart is empty' if totalQuantity is 0

## 8. Paginate Products
- Function paginate(array, page_number, page_size):
- Return a slice of array from (page_number - 1) * page_size to page_number * page_size

## 9. Pagination Controls
- Function nextPage():
- If currentPage * itemsPerPage < length of filteredProducts:
- Increment currentPage
- Call renderProductList()

- Function prevPage():
- If currentPage > 1:
- Decrement currentPage
- Call renderProductList()

## 10. Filter Products
- Function filterProducts():
- Get filterPrice value from input
- If filterPrice is valid number:
- Filter products where price >= filterPrice
   - Else:
     - Set filteredProducts to original products list

## 11. Clear Cart
- Function clearCart():
- Set cart to empty array
- Save empty cart to localStorage
- Call renderCart()
- Update cart-summary with 'Your cart is empty'
