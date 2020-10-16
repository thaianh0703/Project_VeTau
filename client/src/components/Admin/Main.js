import React from 'react';


export default function Menu() {
    return (
        <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <form className='form-horizol form-control' style={{height:'200px',width:'400px',margin:'auto',marginTop:'100px'}}>
                    <div>
                        <div className="form-group">
                            <label className="control-label col-sm-2">User:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder="User"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2">Password:</label>
                            <div className="col-sm-10">          
                                <input type="password" className="form-control" placeholder="Enter password" name="pwd" />
                            </div>
                        </div>
                        <div className="form-group">        
        <div className="col-sm-offset-2 col-sm-10">
        <div className="checkbox">
            <label><input type="checkbox" name="remember" /> Remember me</label>
        </div>
        </div>
    </div>
                        <div className="form-group">        
        <div className="col-sm-offset-2 col-sm-10">
        <button type="submit" className="btn btn-default">Submit</button>
        </div>
    </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
