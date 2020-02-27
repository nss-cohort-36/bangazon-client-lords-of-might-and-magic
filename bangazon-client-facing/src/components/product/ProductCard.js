import React from "react";

export default props => {
  const { image_path, name, id, price, description } = props.product;

  return (
    <>
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l center">
        <img 
          src={image_path}
          className="db w-100 br2 br--top" 
          alt={name} />
        <div className="pa2 ph3-ns pb3-ns">
          <div className="dt w-100 mt1">
            <div className="dtc">
              <a className='link blue f5 f4-ns mv0' href={`/product/${id}`}>
                {name}
              </a>
            </div>
            <div className="dtc tr">
              <h2 className="f5 mv0">${price}</h2>
            </div>
          </div>
          <p className="f6 lh-copy measure mt2 mid-gray">{description}</p>
          <button className='dib f6 link br-pill ba ph2 pv1 mb2 black bg-animate hover-bg-light-yellow'>
            Add to Cart
          </button>
        </div>
      </article>
    </>
  )
};
