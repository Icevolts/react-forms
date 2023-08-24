import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

function NewBoxForm({createBox}){
    const [formData, setFormData] = useState({
        width: '',
        height: '',
        backgroundColor: ''
    });

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const gatherInput = evt => {
        evt.preventDefault();
        createBox({...formData, id: uuidv4()});
        setFormData({width: '', height: '', backgroundColor: ''});
    }

    return (
        <div>
            <form onSubmit={gatherInput}>
                <div>
                    <label htmlFor="width">Width</label>
                    <input onChange={handleChange} type="text" name='width' value={formData.width} id="width"/>
                </div>
                <div>
                    <label htmlFor="height">Height</label>
                    <input onChange={handleChange} type="text" name='height' value={formData.height} id="height"/>
                </div>
                <div>
                    <label htmlFor="backgroundColor">Background Color</label>
                    <input onChange={handleChange} type="text" name='backgroundColor' value={formData.backgroundColor} id="backgroundColor"/>
                </div>
                <button id="newBoxButton">Add a box</button>
            </form>
        </div>
    )
}

export default NewBoxForm;