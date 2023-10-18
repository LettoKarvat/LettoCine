
import './Starter.css'
import './Copy.css'
import { useRenewUser } from '../hooks/useRenewUser';

import { useState, useEffect } from 'react';
import Loader from './Loader';


const Starter = ({ Valor, Meses, Descricao, plano, userRenew, setOutro, outro }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [copied, setCopied] = useState(false);
    const {
        monthsToRenew,
        setMonthsToRenew,
        qrData,
        setQrData,
        handleRenew
    } = useRenewUser();


    useEffect(() => {
        if (qrData === null) {
            // Aqui, você pode colocar o código que você quer executar quando qrData for null.
            // No entanto, pelo que vejo no seu código, parece que você está condicionalmente renderizando o QR Code com base no valor de qrData.
            // Portanto, não há necessidade de fazer algo específico aqui. 
            // A renderização condicional já cuida disso.
        }
    }, [qrData]);


    const handleOkClick = async (user, plano) => {
        setIsProcessing(true);
        // Limpa o qrData ao clicar
        setOutro('Processando')

        console.log(user)
        try {
            await handleRenew(user, plano);
            console.log('este', qrData)
            setOutro(qrData)
        } catch (error) {
            console.error("Ocorreu um erro ao renovar:", error);
        } finally {
            setIsProcessing(false); // garante que 'isProcessing' seja definido como false após a conclusão.
        }

    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div class="pack-container">
            <div class="header">

                <div class="price-container">
                    <span>R$</span>{Valor}
                    <span>/{Meses}</span>
                </div>

            </div>
            <ul class="lists">

                <li class="list">
                    <span>
                        <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </span>
                    <p>
                        {Descricao}
                    </p>
                </li>
            </ul>

            <br />
            <div class="button-container">
                <button type="button" onClick={() => handleOkClick(userRenew, plano)} disabled={isProcessing || outro === 'Processando'}>
                    Renovar
                </button>
                {isProcessing && <Loader />}
            </div>
            {qrData && String(outro?.total) === Valor && (
                <div>
                    <div>
                        <h2 className="custom-h2">Seu QR Code:</h2>
                        <img className='imge' src={qrData.qrCodeImage} alt="QR Code" />

                        <div className="btn-container">
                            <button className={`Btn ${copied ? 'flash' : ''}`} onClick={() => copyToClipboard(qrData.copiaecola)}>
                                <span className="text">{copied ? 'Copiado' : 'Copiar'}</span>
                                <span className="svgIcon">
                                    {copied ? (
                                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" fill-rule="nonzero" /></svg>
                                    ) : (
                                        <svg fill="white" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>
                                        </svg>
                                    )}
                                </span>
                            </button>



                        </div>

                    </div>
                </div>

            )}
        </div>

    )
}

export default Starter