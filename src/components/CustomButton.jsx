import React from 'react';

const CustomButton = ({type, title, customStyles, handleClick}) => {

    const generateStyle = (type) => {
        if(type === 'all'){
            return{
                backgroundColor: "#fff",
                color: "#000",
                borderWidth : '1px',
                borderColor: "#000",
            }
        }else if(type === "react") {
            return{
                backgroundColor: "#fff",
                color: "#000",
                borderWidth : '1px',
                borderColor: "#000",
            }
        }else if(type === "html") {
            return{
                backgroundColor: "#fff",
                color: "#000",
                borderWidth : '1px',
                borderColor: "#000",
            }
        }else if(type === "vue") {
            return{
                backgroundColor: "#fff",
                color: "#000",
                borderWidth : '1px',
                borderColor: "#000",
            }
        }else if(type === "hide") {
            return{
                backgroundColor: "#fff",
                color: "#000",
                borderWidth : '1px',
                borderColor: "#000",
            }
        }
    }

    return (
        <button className={`px-2 py-1.5 rounded-md ${customStyles}`} style={generateStyle(type)} onClick={handleClick}>
            {title}
        </button>
    )
}

export default CustomButton