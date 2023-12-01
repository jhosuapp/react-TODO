const TodoBg = ({src, alt})=>{
    return (
        <picture className="bg" >
            <img src={src} alt={alt}/>
        </picture>
    );
}

export { TodoBg }