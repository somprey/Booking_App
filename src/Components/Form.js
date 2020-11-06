import React from "react"

const Form = (props) => {
    console.log(props)
    const type= props.type;
    return (
        <form>
     { (type === "hotel") ? 
     <>
     <span className='display-2 text-white shadow '>Book Hotel</span><br/><br/>
    <div className="form-row align-items-center">
                

        <div className="col-sm-3 my-1">
        <label className="sr-only" for="inlineFormInputGroupUsername"></label>
        <div className="input-group">
            <div className="input-group-prepend">
            <div className="input-group-text">Going to</div>
            </div>
            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Location" />
        </div>
        </div>
        <div className="col-sm-3 my-1">
        <label className="sr-only" for="inlineFormInputGroupUsername"></label>
        <div className="input-group">
            <div className="input-group-prepend">
            <div className="input-group-text">checkin</div>
            </div>
            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Nov 20" />
        </div>
        </div>
        <div className="col-sm-3 my-1">
        <label className="sr-only" for="inlineFormInputGroupUsername"></label>
        <div className="input-group">
            <div className="input-group-prepend">
            <div className="input-group-text">Checkout</div>
            </div>
            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Nov 21" />
        </div>
        </div>
        <div className="col-sm-3 my-1">
        <label className="sr-only" for="inlineFormInputGroupUsername"></label>
        <div className="input-group">
            <div className="input-group-prepend">
            <div className="input-group-text">Travellers</div>
            </div>
            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="1 or 2" />
        </div>
        </div>
            <div className="col-lg-12 my-1">
            <button type="submit" className="btn btn-primary">Search</button>
            </div>
  </div>
  </>
  :
  <> </>}
   
    {(type === "flight") ?
    <>
     <span className='display-2 text-white shadow '>Book Flight</span><br/><br/>
    <div className="form-row align-items-center">
            
        <div className="col-sm-3 my-1">
        <label className="sr-only" for="inlineFormInputGroupUsername"></label>
        <div className="input-group">
            <div className="input-group-prepend">
            <div className="input-group-text">Leaving from</div>
            </div>
            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Location" />
        </div>
        </div>
        <div className="col-sm-3 my-1">
        <label className="sr-only" for="inlineFormInputGroupUsername"></label>
        <div className="input-group">
            <div className="input-group-prepend">
            <div className="input-group-text">Goint to</div>
            </div>
            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Location" />
        </div>
        </div>
        <div className="col-sm-3 my-1">
        <label className="sr-only" for="inlineFormInputGroupUsername"></label>
        <div className="input-group">
            <div className="input-group-prepend">
            <div className="input-group-text">Departure</div>
            </div>
            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Nov 20" />
        </div>
        </div>
        <div className="col-sm-3 my-1">
        <label className="sr-only" for="inlineFormInputGroupUsername"></label>
        <div className="input-group">
            <div className="input-group-prepend">
            <div className="input-group-text">Return</div>
            </div>
            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Nov 21" />
        </div>
        </div>
            <div className="col-lg-12 my-1">
            <button type="submit" className="btn btn-primary">Search</button>
            </div>
  </div>
   
</>: <> </>
} 
</form>

    )
}
export default Form;