export default function Selector({countries}){
    return(
        <div className="col-md-5">
        <label htmlFor="country" className="form-label">Country</label>
        <select className="form-select" id="country" required>
          <option value="">Choose...</option>
          {
              countries && countries.map(country=><option key={country.iso2}>{country.name}</option>)
          }
        </select>
      </div>
    )
}