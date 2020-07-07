import React, { useState, useEffect } from 'react';
import apiCovid from '../../services/apiCovid';
export default function Testes(){

    const [titless, setTitless] = useState([]);

    const emailUs = localStorage.getItem('email');

       


        useEffect(()=>{
            apiCovid.get('api/report/v1')
            .then(res=>{
                setTitless(res.data.data);
            });


        },[emailUs])

        
        
    


    return(
        <div className="test">
            
            
                
                    <div className="inps">

                        <h1 className="vmsready">Lista de casos Covid-19 </h1><br/><br/>
                        
                        <div className="dashAlign">

                        <table>
                            <tr>
                                <th>Estado</th>
                                <th>Casos</th>
                                <th>Suspeitos</th>
                                <th>Mortes</th>
                                <th>Recusados</th>
                            </tr>
                        


                            {titless.map(desc=>(

                                <tr>
                                    <td>{desc.state} </td>
                                    <td>{desc.cases}</td>
                                    <td>{desc.suspects}</td>
                                    <td>{desc.deaths}</td>
                                    <td>{desc.refuses}</td>     
                                    </tr>

                                 
                            ))} 
                            
                            
                    </table>   
                        
                    </div>
          </div>
        </div>

    );

}