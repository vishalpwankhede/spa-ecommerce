function Cart({ cartItems, onRemove }) {
  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cartItems.map((item, i) => (
        <div key={i}>
          {item.Title} - ${item["Variant Price"]}
          <button onClick={() => onRemove(item)}>Remove</button>
        </div>
      ))}
      {cartItems.length > 0 ? '' : 'Empty cart!'}
    </div>
  );
}

export default Cart;