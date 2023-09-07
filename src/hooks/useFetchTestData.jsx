import { useState } from 'react';

const useFetchTestData = (authToken) => {
    const [loadingTest, setLoadingTest] = useState(false);
    const [testData, setTestData] = useState(null);

    const fetchTestData = async () => {
        setLoadingTest(true);
        try {
            const response = await fetch(import.meta.env.VITE_INFO, {
                method: "POST",
                headers: {
                    'X-Parse-Application-Id': import.meta.env.VITE_REACT_APP_PARSE_APP_ID,
                    'X-Parse-REST-API-Key': import.meta.env.VITE_REACT_APP_PARSE_API_KEY,
                    
                }
            })
            if (!response.ok) {
                throw new Error(`Erro ao buscar dados do usuário: ${response.statusText}`);
            }
            const data = await response.json();
            const resultData = data.result;  // Acessar o campo "result"
    
            setTestData(resultData);
    
            const userDetails = resultData["DADOS DO USUÁRIO"];
            if (userDetails) {
                const username = userDetails["Usuario"];
                const password = userDetails["Senha"];
                const expiry = userDetails["Vencimento"];
    
                if (username && password && expiry) {
                    const payload = {
                        name: username,
                        m3u: resultData["LISTA M3U"],
                        ssiptv: resultData["LISTA SSIPTV"],
                        senha: password,
                        vencimento: expiry
                    };
    

    
                    if (!authToken) {
                        throw new Error("Token de autenticação não fornecido.");
                    }
                    const back4AppResponse = await fetch(import.meta.env.VITE_CREAT, {
                        method: 'POST',
                        headers: {
                            'X-Parse-Application-Id': import.meta.env.VITE_REACT_APP_PARSE_APP_ID,
                            'X-Parse-REST-API-Key': import.meta.env.VITE_REACT_APP_PARSE_API_KEY,
                            'X-Parse-Session-Token': authToken,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    });

                    if (!back4AppResponse.ok) {
                        throw new Error(`Erro na função Back4App: ${back4AppResponse.statusText}`);
                    }

                    const back4AppData = await back4AppResponse.json();
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingTest(false);
            window.location.reload();

        }
    };

    return { loadingTest, testData, fetchTestData };
};

export default useFetchTestData;
