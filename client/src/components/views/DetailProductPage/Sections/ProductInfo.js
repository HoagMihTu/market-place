import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <Descriptions title="Thông tin sản phẩm">
                <Descriptions.Item label="Giá tiền"> {Product.price}.000VNĐ</Descriptions.Item>
                <Descriptions.Item label="Đã mua">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="Đã xem"> {Product.views}</Descriptions.Item>
                <Descriptions.Item label="Mô tả"> {Product.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToCarthandler}
                >
                    Thêm vào giỏ
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo
