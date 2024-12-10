import { useState } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Link } from 'react-router-dom';

const List = () => {
    const [products, setProducts] = useState([
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
            description: "فستان مناسبات باللون الاخضر  الجميل يناسب جميع المناسبات.",
            price: "200 ريال",
            image: "https://img.icons8.com/?size=100&id=sQqwVBT2Dyjv&format=png&color=000000"
        },
        {
            id: 3,
            title: "فستان زواج",
            description: "تالقي بفستان زواج جميل باللون البنفسجي الرائع",
            price: "1500 ريال",
            image: "https://img.icons8.com/?size=100&id=17379&format=png&color=000000"
        }
    ]);

    return (
        <>
            <MainLayout>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {products.map((e) => (
                                <div className="card mt-2" key={e.id}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="badge" style={{backgroundColor:'#3C5B6F' , color:'#FAF6E3' , fontSize:'15px'}}>
                                                    {e.price}
                                                </span>
                                                <div className="row mt-5">
                                                    <div className="col">
                                                        <Link to={`/details?id=${e.id}`} >
                                                            <button className="btn" style={{backgroundColor:'#803D3B' , color:'#FAF6E3'}} >معاينة التفاصيل</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-9 mt-3 text-start">
                                                <h5 className="alert alert-light text-dark"  style={{ marginLeft: '25px' }} >{e.title}</h5>
                                                <p>{e.description}</p>
                                            </div>
                                            <div className="col-sm-1 d-flex justify-content-end">
                                                <img src={e.image} alt={e.title} width={80} height={80} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default List;
