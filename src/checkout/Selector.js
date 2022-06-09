export default function Selector({data}){
    return(
        <div className="col-md-2">
        <label htmlFor="country" className="form-label">Country</label>
        <select className="form-select" id="country" required>
          <option value="">Choose...</option>
          {
              data.map((data, index)=> <option keyt={index}>{data}</option>)
          }
        </select>
      </div>
    )
}