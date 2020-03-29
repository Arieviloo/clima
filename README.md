### :sunny: :cloud: Projeto
O APP vai solicitar ao usuário a permissão para saber a localização dele pelo browser, depois com essas coordenadas vai ser chamada a API do **Open Wheater Map** para pegar a previsão do clima para aquele local e por fim exibir essas informações na tela para o usuário.

### :heavy_check_mark: Criando as credenciais do Open Wheater
Visite o site [https://openweathermap.org](https://openweathermap.org) e crie sua conta, depois acesse sua API Key ([nessa URL](https://home.openweathermap.org/api_keys)), ela será necessária para nos conectarmos ao Open Wheather Map.
Após criar a API Key você deve esperar alguns minutos para que ela seja ativada (para mim demorou 15 minutos), após isso você já pode utiliza-la 😁

Crie na raiz do seu projeto um arquivo chamado .env e coloque nele:
REACT_APP_OPEN_WHEATHER_KEY=sua credencial do open wheater map