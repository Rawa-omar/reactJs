import { useState, useEffect } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartActions'; 

const Details = () => {
  const [product, setProduct] = useState(null);  
  const location = useLocation();
  const queryparams = new URLSearchParams(location.search);
  const id = queryparams.get('id');  
  const dispatch = useDispatch();

  const allProducts = [
    {
      id: 1,
      title: "فستان صيفي",
      description: "فستان صيفي أنيق باللون الاحمر و البرتقالي ",
      price: "100 ريال",
      image: "https://img.icons8.com/?size=100&id=81156&format=png&color=000000"
    },
    {
      id: 2,
      title: "فستان مناسبات",
      description: "فستان مناسبات باللون الاخضر الجميل يناسب جميع المناسبات.",
      price: "200 ريال",
      image: "https://img.icons8.com/?size=100&id=sQqwVBT2Dyjv&format=png&color=000000"
    },
    {
      id: 3,
      title: "فستان زواج",
      description: "تالقي بفستان زواج جميل باللون البنفسجي الرائع",
      price: "1500 ريال",
      image: "https://img.icons8.com/?size=100&id=17379&format=png&color=000000"
    },
    {
      id: 4,
      title: "جاكيت شتوي",
      description: "جاكيت شتوي باللون الازرق الفاتح مناسب للجنسين",
      price: "100 ريال",
      image: "https://img.icons8.com/?size=100&id=TpOP5EeeXL5T&format=png&color=000000"
    },
    {
      id: 5,
      title: "جاكيت جينز",
      description: "جاكيت جينز ازرق",
      price: "200 ريال",
      image: "https://img.icons8.com/?size=100&id=defSgYINaEQk&format=png&color=000000"
    },
    {
      id: 6,
      title: "جاكيت رسمي",
      description: "جاكيت طويل رسمي",
      price: "500 ريال",
      image: "https://img.icons8.com/?size=100&id=16579&format=png&color=000000"
    },
    {
      id: 7,
      title: "قميص صيفي",
      description: "قميص صيفي اصفر ",
      price: "100 ريال",
      image: "https://img.icons8.com/?size=100&id=afcwHV75JChK&format=png&color=000000"
    },
    {
      id: 8,
      title: "قميص بنات",
      description: "قميص فريق بناتي باللون البنفسجي الفاتح",
      price: "200 ريال",
      image: "https://img.icons8.com/?size=100&id=vcH3BB4Isls5&format=png&color=000000"
    },
    {
      id: 9,
      title: "قميص رسمي",
      description: "قميص رسمي باللون السماوي ",
      price: "500 ريال",
      image: "https://img.icons8.com/?size=100&id=42167&format=png&color=000000"
    }
  ];

  useEffect(() => {
    const selectedProduct = allProducts.find((product) => product.id === parseInt(id)); 
    setProduct(selectedProduct); 
  }, [id]);

  if (!product) {
    return <div>جاري تحميل المنتج...</div>;
  }

  return (
    <MainLayout>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card mt-2">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <span className="badge" style={{backgroundColor:'#3C5B6F' , color:'#FAF6E3' , fontSize:'15px'}}>
                      {product.price}
                    </span>
                    <div className="row mt-5">
                      <div className="col">
                        <ul>
                          <li>
                            {/* زر إضافة المنتج إلى السلة */}
                            <button className="btn" onClick={() => dispatch(addToCart(product))} style={{backgroundColor:'#803D3B' , color:'#FAF6E3'}}>
                              إضافة إلى السلة
                            </button>
                          </li>
                          <li>
                            {/* زر الشراء الآن */}
                            <Link to={"/checkout"} state={{ id: product.id }}>
                              <button className="btn" style={{backgroundColor:'#D7D3BF' , color:'#803D3B'}}>
                                الشراء الآن
                              </button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-9 mt-3 text-start">
                    <h5 className="alert alert-light text-dark">{product.title}</h5>
                    <p>{product.description}</p>
                  </div>
                  <div className="col-sm-1 d-flex justify-content-end">
                    <img src={product.image} alt={product.title} width={100} height={100}  style={{ marginLeft: '-300px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Details;
