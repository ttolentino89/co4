import React from 'react'

const ItemForm = ({
    item,
    handleSubmit,
    handleChange,
    cancelPath,
    history
}) => (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input
                    placeholder='A vetted item'
                    value={item.name}
                    name='name'
                    required
                    onChange={handleChange}
                /><br></br>
                <label>Description: </label>
                <input
                    placeholder='The most swappable thing ever'
                    value={item.description}
                    name='description'
                    required
                    onChange={handleChange}
                /><br></br>
                <label>Photo: </label>
                <input
                    placeholder='http://acoolitem.com'
                    value={item.img_link}
                    name='link'
                    onChange={handleChange}
                /><br></br>

                <button type='submit'>Submit</button> <br></br>
                <button className='danger' onClick={() => history.push(cancelPath)}>
                    Cancel
			</button>
            </form>
        </div>
    )

export default ItemForm
