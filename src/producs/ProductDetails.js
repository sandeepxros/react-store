import LeafButton from "../helper/LeafButton";
export default function ProductDetails(props) {
  const { title, rating, price, description } = props;

  return (
    <>
      <div className=" ">
        <div className="container-fluid ">
          <h5 className="display-5 fw-bold">{title}</h5>
          <p>
            {rating.rate} , Rates: {rating.count}
          </p>
          <p>${price}</p>
          <LeafButton type="button" css="btn btn-success" text="Buy Now" />
          <LeafButton
            type="button"
            css="btn btn-outline-success"
            text="Add to Cart"
          />
          <p className="col-md-8 fs-5">{description}</p>
        </div>
      </div>
    </>
  );
}
