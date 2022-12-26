import React, { useState } from 'react';
import './css/trazo_form.css';
import { addToBlockchain } from '../contract/functions';

const TranzoForm = () => {

    const [data, setdata] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        addToBlockchain(data);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setdata(values => ({ ...values, [name]: value }))
    }

    return (

        <div className='tranzo-contents'>
            <div className="tranzo-texts">
                <div className="tranzo-heading">
                    <div className='tranzo_title'>Tranzo</div>
                    <div className='tranzo_subtitle'>Fast and secure Transaction!</div>
                    <div className='tranzo_'>Developed by : Bappa Banerjee</div>
                    <br></br>
                </div>
            </div>
            <div className="tranzo-form">


                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="receiver:">
                            Receiver:
                        </label>
                        <input type="text" name="receiver" id="receiver" value={data.receiver || ""} className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label for="amount">
                            amount:
                        </label>
                        <input type="number" name="amount" id="amount" value={data.amount || ""} className="form-control" onChange={handleChange} required />

                    </div>
                    <div className="form-group">
                        <label for="message">
                            message:
                        </label>
                        <input type="text" name="message" id="message" value={data.message || ""} className="form-control" onChange={handleChange} required />

                    </div>
                    <div className="form-group">
                        <label for="timestamp">
                            timestamp:
                        </label>
                        <input type="number" name="timestamp" id="timestamp" value={data.timestamp || ""} className="form-control" onChange={handleChange} required />

                    </div>

                    <div className="form-group">
                        <label for="keyword">
                            keyword:
                        </label>
                        <input type="text" id="keyword" name="keyword" value={data.keyword || ""} className="form-control" onChange={handleChange} required />

                    </div>
                    <div className="form-group" id='submit_btn' >
                        <button type="submit" value="Submit">Transact</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default TranzoForm;