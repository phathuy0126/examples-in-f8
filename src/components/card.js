import './card.css';
function CardItem({src,name,price,info}) {
    return (
        <div className="CardItem">
            <img src={src} alt="" />
            <div className="CardBody">
                <p className="Name">{name}</p>
                <p className="ifo">{info}</p>
                <p className="price">{price}</p>
            </div>
            <div className="CardFooter">
                <button className="buynow">Buy now</button>
            </div>
        </div>
    )
}  
export default CardItem;