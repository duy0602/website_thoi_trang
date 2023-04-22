import React, { useEffect, useState } from "react";
import ProductAPI from "../../API/ProductAPI";
import { useLocation } from "react-router-dom";

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ViewEdit = () => {

    const productId = useQuery().get('id');
    const [product, setProduct] = useState({});
    const [categoires, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await ProductAPI.getCategories();
            if (res?.length > 0) {
                setCategories(res);
            }
        })();
        if (productId) {
            (async () => {
                const res = await ProductAPI.getDetail(productId);
                if (res._id) {
                    setProduct({...res});
                }
            })();
        }
    }, [])

    const handleCreateProduct = async () => {
        if (productId) {
            const res = await ProductAPI.updateProduct(productId, product);
            if (res?._id) {
                window.location.href = '/products';
            }
        } else if (!productId) {
            const res = await ProductAPI.createProduct(product);
            if (res?._id) {
                setProduct({});
            }
        }
    }

    return (
        <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-7 align-self-center">
                        <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">Tạo sản phẩm</h4>
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb m-0 p-0">
                                    <li className="breadcrumb-item"><a href="/" className="text-muted">Trang chủ</a></li>
                                    <li className="breadcrumb-item text-muted active" aria-current="page"></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ paddingTop: '1.5rem' }}>
                            <div style={{ margin: '0 1.5rem 1.5rem' }}>
                                <h5 className="card-title">Tên sản phẩm</h5>
                                <div className='d-flex justify-content-between'>
                                    <input
                                        onChange={(e) => setProduct({ ...product, ['name']: e.target.value })}
                                        value={product?.name || ''}
                                        className="form-control w-50"
                                        type="text"
                                        placeholder="Nhập vào tên sản phẩm!"
                                    />
                                </div>
                            </div>
                            <div style={{ margin: '0 1.5rem 1.5rem' }}>
                                <h5 className="card-title">Giá sản phẩm</h5>
                                <div className='d-flex justify-content-between'>
                                    <input
                                        onChange={(e) => setProduct({ ...product, ['price']: e.target.value })}
                                        value={product?.price || ''}
                                        className="form-control w-50"
                                        type="text"
                                        placeholder="Nhập vào giá sản phẩm!"
                                    />
                                </div>
                            </div>
                            <div style={{ margin: '0 1.5rem 1.5rem' }}>
                                <h5 className="card-title">Ảnh 1</h5>
                                <div className='d-flex justify-content-between'>
                                    <input
                                        onChange={(e) => setProduct({ ...product, ['img1']: e.target.value })}
                                        value={product?.img1 || ''}
                                        className="form-control w-50"
                                        type="text"
                                        placeholder="Nhập vào ảnh 1 sản phẩm!!"
                                    />
                                </div>
                            </div>
                            <div style={{ margin: '0 1.5rem 1.5rem' }}>
                                <h5 className="card-title">Ảnh 2</h5>
                                <div className='d-flex justify-content-between'>
                                    <input
                                        onChange={(e) => setProduct({ ...product, ['img2']: e.target.value })}
                                        value={product?.img2 || ''}
                                        className="form-control w-50"
                                        type="text"
                                        placeholder="Nhập vào ảnh 2 sản phẩm!!"
                                    />
                                </div>
                            </div>
                            <div style={{ margin: '0 1.5rem 1.5rem' }}>
                                <h5 className="card-title">Ảnh 3</h5>
                                <div className='d-flex justify-content-between'>
                                    <input
                                        onChange={(e) => setProduct({ ...product, ['img3']: e.target.value })}
                                        value={product?.img3 || ''}
                                        className="form-control w-50"
                                        type="text"
                                        placeholder="Nhập vào ảnh 3 sản phẩm!!"
                                    />
                                </div>
                            </div>
                            <div style={{ margin: '0 1.5rem 1.5rem' }}>
                                <h5 className="card-title">Ảnh 4</h5>
                                <div className='d-flex justify-content-between'>
                                    <input
                                        onChange={(e) => setProduct({ ...product, ['img4']: e.target.value })}
                                        value={product?.img4 || ''}
                                        className="form-control w-50"
                                        type="text"
                                        placeholder="Nhập vào ảnh 4 sản phẩm!"
                                    />
                                </div>
                            </div>
                            <div style={{ margin: '0 1.5rem 1.5rem' }}>
                                <h5 className="card-title">Loại</h5>
                                <div className='d-flex justify-content-between'>
                                    <select value={product?.category || ''} onChange={(e) => setProduct({ ...product, ['category']: e.target.value })}>
                                        <option value="">Phân loại danh mục</option>
                                        {
                                            categoires?.length && categoires.map(item => 
                                                <option value={item._id}>{item?.category}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex" style={{ margin: '0 1.5rem 1.5rem' }}>
                                <button
                                    disabled={
                                        !product?.name || !product?.price || !product?.img1 ||
                                        !product?.img2 || !product?.img3 || !product?.img4 || !product?.category
                                    }
                                    onClick={handleCreateProduct}
                                    style={{ cursor: 'pointer', color: 'white' }}
                                    className='btn btn-success'>
                                    {productId ? 'Cập nhật sản phẩm' : 'Tạo sản phẩm'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer text-center text-muted">
                All Rights Reserved by Admin Dashboard. Designed and Developed by <a
                    href="#/">Duy Phan</a>.
            </footer>
        </div>
    )
}

export default ViewEdit;