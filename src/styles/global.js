import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    body{
        
        width: 100%;
        height: 100vh;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    :root{
        font-size: 62.5%;
    }
    body, input, button, textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }

    a{
        text-decoration: none
    }

    button, a{
        cursor: pointer;
        transition: filter  0.2s;
    }
    button:hover, a:hover{
        filter: brightness(0.9)
    }

    ul,ol{
        list-style: none;
    }
    input{
        border: 2px solid transparent;
    }
    input:hover{
        border: 2px solid transparent;
    }
    input:focus{
        border: 2px solid transparent;
    }
    textarea{
        resize: none;
    }


`;
