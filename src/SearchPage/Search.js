import React, {useState} from 'react'
import data from './data.js'
import 'bootstrap/dist/css/bootstrap.min.css';


const Search = () => {
    const [filter, setFilter] = useState("");
    const searchText = (event) => {
        setFilter(event.target.value);
    }
    let dataSearch = data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })
    return (
        <section className='py-4 container'>
            <div className=' justify-content-center'>


                <div className='col- mb-5'>
                    <div className='mb-2 col-4 mx-auto text-center'>
                        <label className='form-lable h4'>Search</label>
                        <input className='form-control' type='text'
                         placeholder='Search for works'
                         value={filter} 
                         onChange={searchText.bind(this)}
                            />
                    </div>

        
                </div>
                </div>
                <div className='row'>
                {dataSearch.map((item, index) => {
                    return (
                <div className='col col-md-6 col-lg-3 mx-0 mb-4' >
                    <div className="card p-0 overflow-hidden h-100 shadow">
                        <img src={item.img} className='card-img-top'/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.desc}</p>
                        </div>
                    </div>
                </div>
            )})}
            </div>
        </section>
    )
    }
export default Search