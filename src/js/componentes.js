import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpacklogo.png';

export const saludar = ( nombre ) => {
    console.log( 'Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }!!! n_n`;

    document.body.append( h1 );


    //IMAGEN
    // console.log(webpacklogo);
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);
};