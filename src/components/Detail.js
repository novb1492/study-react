import {  useParams } from 'react-router-dom';
function Detail() {
    let{id,secondId}=useParams();
    return(
        <div>
            Detail{id}{secondId}
        </div>
    )
}

export default Detail;