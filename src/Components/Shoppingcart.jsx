import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import { removeFromCart } from '../cartActions';


const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cartItems); // الحصول على المنتجات المضافة من الـ Redux
    const dispatch = useDispatch();

    // اختيار طريقة الشحن
    const [shippingMethod, setShippingMethod] = useState(5); 

    // حذف المنتج من السلة
    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    // حساب مجموع المنتجات
    const totalProductPrice = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) || 0), 0); 

    // حساب إجمالي السعر
    const totalAmount = totalProductPrice + shippingMethod;

    return (
        <>
            <MainLayout>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" style={{ backgroundColor: '#A6885038' }}>
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0" style={{ color: '#3C5B6F' }}>سلة التسوق</h1>
                                                    <h6 className="mb-0 text-muted">{cartItems.length} منتج</h6>
                                                </div>
                                                <hr className="my-4" />

                                                {cartItems.length === 0 ? (
                                                    <p>لا توجد منتجات في السلة</p>
                                                ) : (
                                                    cartItems.map((item) => (
                                                        <div key={item.id} className="row mb-4 d-flex justify-content-between align-items-center">
                                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                                <img
                                                                    src={item.image}
                                                                    className="img-fluid rounded-3"
                                                                    alt={item.title}
                                                                />
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                                <h6 className="text-muted">منتج</h6>
                                                                <h6 className="mb-0">{item.title}</h6>
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                <button
                                                                    className="btn px-2"
                                                                    onClick={() => handleRemove(item.id)}
                                                                >
                                                                    <i className="fas fa-times"></i> حذف
                                                                </button>
                                                            </div>

                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                <h6 className="mb-0">{item.price} $</h6>
                                                            </div>
                                                        </div>
                                                    ))
                                                )}

                                                <hr className="my-4" />

                                                <div className="pt-5">
                                                    <h6 className="mb-0">
                                                        <Link to="/" className="text-body">
                                                            <button
                                                                className="btn"
                                                                style={{ backgroundColor: '#803D3B', color: '#FAF6E3', padding: '10px 20px', borderRadius: '5px' }}
                                                            >
                                                                <i className="fas fa-long-arrow-alt-left me-2"></i> العودة إلى المتجر
                                                            </button>
                                                        </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 " style={{ backgroundColor: '#C8B28B8F' }}>
                                            <div className="p-5" >
                                                <h3 className="fw-bold mb-5 mt-2 pt-1" style={{ color: '#3C5B6F' }}>ملخص الطلب</h3>
                                                <hr className="my-4" />

                                                {/* عرض عدد المنتجات */}
                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">عدد المنتجات: {cartItems.length}</h5>
                                                </div>

                                                {/* اختيار الشحن */}
                                                <h5 className="text-uppercase mb-3">الشحن</h5>
                                                <div className="mb-4 pb-2">
                                                    <select
                                                        value={shippingMethod}
                                                        style={{ backgroundColor: '#ECEBDE' }}
                                                        onChange={(e) => setShippingMethod(parseFloat(e.target.value))}
                                                        data-mdb-select-init>
                                                        <option value="5">توصيل قياسي - 5.00 $</option>
                                                        <option value="10">توصيل سريع - 10.00 $</option>

                                                    </select>
                                                </div>

                                                <h5 className="text-uppercase mb-3" >إدخال الكود</h5>
                                                <div className="mb-5">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <input type="text" id="form3Examplea2" className="form-control form-control-lg" style={{ backgroundColor: '#ECEBDE' }}
                                                        />
                                                    </div>
                                                </div>

                                                <hr className="my-4" />

                                                {/* عرض المجموع النهائي */}
                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase" style={{ marginLeft: '35%' }}>مجموع المنتجات</h5>
                                                    <h5>{totalProductPrice.toFixed(2)} $</h5>
                                                </div>

                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">الشحن</h5>
                                                    <h5>{shippingMethod.toFixed(2)} $</h5>
                                                </div>

                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">المبلغ الإجمالي</h5>
                                                    <h5>{totalAmount.toFixed(2)} $</h5>
                                                </div>

                                                <Link to="/checkout" state={{ cartItems }}>
                                                    <button
                                                        type="button"
                                                        className="btn btn-dark btn-block btn-lg"
                                                        style={{ backgroundColor: '#803D3B', color: '#FAF6E3' }}
                                                    >
                                                        متابعة الطلب
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default ShoppingCart;
