export default function TextCarousel(){
    return (
        <div
          id="carouselExampleSlidesOnly"
          data-bs-ride="carousel"
          class="carousel slide carousel-fade"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="h-100 p-5 text-white bg-dark rounded-3">
                  <h1>We Care</h1>
                  <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                  <button className="btn btn-outline-light" type="button">Signup</button>
            </div>
            </div>
            <div class="carousel-item ">
            <div className="h-100 p-5 text-dark bg-light rounded-3">
                  <h1>We Care</h1>
                  <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                  <button className="btn btn-outline-light" type="button">Signup</button>
            </div>
              
            </div>
            <div class="carousel-item">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
                  <h1>We Care</h1>
                  <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                  <button className="btn btn-outline-light" type="button">Signup</button>
            </div>
            </div>
          </div>
        </div>
      );

}