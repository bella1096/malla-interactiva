body {
    background-color: pink;
    color: #19171B;
    font-family: Serif;
    text-align: center;
}

h1, h2, h3 {
    margin-top: 20px;
}

#malla {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ramo {
    background-color: #75020F;
    color: white;
    padding: 10px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    width: 300px;
    cursor: pointer;
}

.ramo.bloqueado {
    background-color: #9E4D57;
    cursor: not-allowed;
    opacity: 0.6;
}

.ramo.aprobado {
    background-color: green;
}
