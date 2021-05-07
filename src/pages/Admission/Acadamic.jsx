import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  
    input:{
        marginRight:"1rem",
    }
  }));
  


const Acadamic = () => {
    const history = useHistory();
    const classes = useStyles();

    const [acadamic, SetAcadamic] =useState(false);
    const [formData, setFormData] = useState({
      
    })

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const {
        name, 
        gender, 
        nationality, 
        religion,
        community,
        aadhaar,
    } = formData;

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked", formData)
        history.push('/admission/add-contact')
    }

    return (
        <>
           <form action="submit" onSubmit={onSubmit}>
            <div className="admission__form--personal">

                <span className="admission__form--personal-heading">
                    <h3>2. Acadamic Details</h3>
                    <i className="fas fa-chevron-down"></i>
                </span>
                
                <div className="admission__form-content">

                <div className="admission__form--group row">

                      <p className="col-12"> 12th Mark </p>

                    <div className="col-12">
                    <TextField id="outlined-basic" 
                    label="Subject Name"
                     variant="outlined"
                    className={`${classes.input} col-3`} 
                   
                    onChange={e => onChange(e)}
                    
                    />
                        <TextField id="outlined-basic" label="Total Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Your Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Percentage" variant="outlined" className={`${classes.input} col-2`} />
                    </div>

                    <div className="col-12">
                    <TextField id="outlined-basic" label="Subject Name" variant="outlined" className={`${classes.input} col-3`} />
                        <TextField id="outlined-basic" label="Total Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Your Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Percentage" variant="outlined" className={`${classes.input} col-2`} />
                    </div>

                    <div className="col-12">
                    <TextField id="outlined-basic" label="Subject Name" variant="outlined" className={`${classes.input} col-3`} />
                        <TextField id="outlined-basic" label="Total Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Your Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Percentage" variant="outlined" className={`${classes.input} col-2`} />
                    </div>

                    <div className="col-12">
                    <TextField id="outlined-basic" label="Subject Name" variant="outlined" className={`${classes.input} col-3`} />
                        <TextField id="outlined-basic" label="Total Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Your Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Percentage" variant="outlined" className={`${classes.input} col-2`} />
                    </div>     

                </div>
                <div className="admission__form--group row">

                      <p className="col-12"> 10th Mark </p>

                    <div className="col-12">
                    <TextField id="outlined-basic" label="Subject Name" variant="outlined" className={`${classes.input} col-3`} />
                        <TextField id="outlined-basic" label="Total Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Your Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Percentage" variant="outlined" className={`${classes.input} col-2`} />
                    </div>

                    <div className="col-12">
                    <TextField id="outlined-basic" label="Subject Name" variant="outlined" className={`${classes.input} col-3`} />
                        <TextField id="outlined-basic" label="Total Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Your Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Percentage" variant="outlined" className={`${classes.input} col-2`} />
                    </div>

                    <div className="col-12">
                    <TextField id="outlined-basic" label="Subject Name" variant="outlined" className={`${classes.input} col-3`} />
                        <TextField id="outlined-basic" label="Total Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Your Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Percentage" variant="outlined" className={`${classes.input} col-2`} />
                    </div>

                    <div className="col-12">
                    <TextField id="outlined-basic" label="Subject Name" variant="outlined" className={`${classes.input} col-3`} />
                        <TextField id="outlined-basic" label="Total Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Your Mark" variant="outlined" className={`${classes.input} col-2`} />
                        <TextField id="outlined-basic" label="Percentage" variant="outlined" className={`${classes.input} col-2`} />
                    </div>     

                </div>

                </div>
            </div>

            <button type="submit" className=" btn btn-success col-2">Submit</button>
            </form>
            
        </>
    );
};

export default Acadamic;