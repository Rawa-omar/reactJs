import Swal from 'sweetalert2';

// إضافة منتج إلى السلة
export const addToCart = (product) => {
  // إظهار التنبيه عند إضافة المنتج
  Swal.fire({
    icon: 'success',
    title: 'تم إضافة المنتج إلى السلة',
    text: `${product.title} تم إضافته بنجاح إلى سلة التسوق.`,
    showConfirmButton: false,
    timer: 1500,
  });

  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

// إزالة منتج من السلة
export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: productId,
  };
};
