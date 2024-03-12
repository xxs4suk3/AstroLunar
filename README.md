<div align="center">
    <h1 align="center"> AstroLunar - Discord Assistant </h1>
    <p align='center'><img src=".github\AstroLunarBanner.gif" width=500 /></p>
    <h3 align="center"><strong> FAQ </strong></h3>
    AstroLunar is a bot under development with 45 commands available. Currently, it only works on one server, but we are working to make it usable on several servers with only 3 clicks. See our  <a href="#install"> installation guide</a> !
</div>

<a id="install"></a> 

<br>

<details>
    <summary align="center">English Installation</summary>

## Characteristics
- **Ad System:** Send ads to users directly to their direct messages.
- **Moderation Commands:** Tools to moderate the server, such as banning, expelling and warning users.
- **Emoji/emote system:** Allows you to add up to 25 emojis in a single command or user message.
- **Custom Auto Responses:** Set up automatic responses for specific words or phrases.
- **Ban words:** Delete messages that contain banned words.
- **Personalized Welcome Messages:** Greet new members with personalized messages.
- **Logging System:** Records important server events for future reference.
- **Anti Links System:** Detects and prevents the publication of unwanted links.
- **Back Up System:** Makes automatic server backups.
- **Invite Count:** Tracks and displays the count of user invitations.
- **Sweepstakes System:** Organize and manage giveaways within the server.

## Setting

- **Installation prerequisites.** You will need these in order to run the Discord bot.
    - [Node.JS](https://nodejs.org/en) 
    
    ![node.js-badge](https://img.shields.io/badge/v16.9.1-green?style=for-the-badge&logo=Node.js&label=Node.JS)

    - [Git](https://git-scm.com/downloads)

    ![git-badge](https://img.shields.io/badge/v%202.42.0-orange?style=for-the-badge&logo=Git&label=Git)

    - [VSCode](https://code.visualstudio.com/download)

    ![Static Badge](https://img.shields.io/badge/last%20version-blue?style=for-the-badge&logo=visualstudiocode&label=VSCode)
- **Clone the Repository and Install Dependencies**
     - `git clone xxs4suk3/AstroLunar.git`
     - `npm install`

- **Create a new Discord Bot**
     - Create an application in ***[Discord Portal Developer](https://discord.com/developers/applications)***
     - Go to the ***Bot*** section, save the token in a notepad or wherever suits you best.
     - Activate all ***Privileged Gateway Intents*** the three ***Intents*** that are not activated, specifically:
         - [x] Presence Intent
         - [x] Server Members Intent
         - [x] Message Content Intent
     - Customize your bot description in ***General Information***

- **Set up the Bot code**
     - Put the previously saved token in `config.json`, then create or log in to [MongoDB](https://account.mongodb.com/account/login).
         - Create a new project
         - Then select ***+ Create***
         - Select the free version. *"If you have the premium, much better"* Select which region your server will be in.
         - Copy the password that appears on the next screen, also save it in a safe place, slide the screen and press: ***Finish and Close***
         - Now go to the ***Database*** section and press ***Connect***, now press ***Drivers*** and copy what you put in section 3, remember to put it in a safe place, Now close it by pressing: ***Close***.
         - Now that you have the password and the link, you will only have to change the password in the link. Search for ***`<password>`*** and enter the password you saved previously.
     - Since now the *Database* functions are already configured, you can go to the `config.json` file and put in **mongourl** the link that you saved before.
     - Configure the prefix and let's go to the next configuration.
    
     - **Now let's configure the guildconfig.json**

         - Put the ID to all the vc of the voice channels that you are going to use on your server.
         - Where you put **`Guild ID`** put the ID of your server, then put the channel where the welcome message will be placed
         - Now we have to continue in the **`Log`** section, put the channels where the logs will be.
         - Set the roles so that they are not expelled and also the channels where it is allowed to send links.
         - In the next section put the role that will not be automatically expelled-
         - If you want to activate antilinks or autokicks, then put **true**, otherwise put **false**

- **Extra Configuration**
     - **Text color in the terminal**
         - If you want to change the color you will have to go to `.\utils\slashsync.js` and then for greater ease of searching you can press **ctrl + f** and right now you can search for words. Now put **`colors`** in the search.
         - The color after **`.`** is the one you have to change. You can see all the available colors in [npm js colors](https://www.npmjs.com/package/colors).

- **Start the bot**
     - Put the command `npm start` in the terminal and the **Discord Assistant Bot** will start

</details>

<br>

<details>
    <summary align="center">Spanish Installation</summary>

## Características
- **Sistema de Anuncios:** Envía anuncios a los usuarios directamente a sus mensajes directos.
- **Comandos de moderación:** Herramientas para moderar el servidor, como banear, expulsar y advertir usuarios.
- **Sistema de emojis/emotes:** Permite agregar hasta 25 emojis en un solo comando o mensaje de usuario.
- **Auto Respuestas personalizadas:** Configura respuestas automáticas para palabras o frases específicas.
- **Banear palabras:** Elimina mensajes que contienen palabras prohibidas.
- **Mensajes de bienvenida personalizados:** Saluda a los nuevos miembros con mensajes personalizados.
- **Sistema de logs:** Registra eventos importantes del servidor para referencia futura.
- **Sistema Anti Links:** Detecta y previene la publicación de enlaces no deseados.
- **Sistema de Back Ups:** Realiza copias de seguridad automáticas del servidor.
- **Conteo de invites:** Rastrea y muestra el recuento de invitaciones de usuarios.
- **Sistema de Sorteos:** Organiza y administra sorteos dentro del servidor.

## Configuración

- **Requisitos previos de instalación.** Los necesitará para poder ejecutar el bot de Discord.
    - [Node.JS](https://nodejs.org/en) 
    
    ![node.js-badge](https://img.shields.io/badge/v16.9.1-green?style=for-the-badge&logo=Node.js&label=Node.JS)

    - [Git](https://git-scm.com/downloads)

    ![git-badge](https://img.shields.io/badge/v%202.42.0-orange?style=for-the-badge&logo=Git&label=Git)

    - [VSCode](https://code.visualstudio.com/download)

    ![Static Badge](https://img.shields.io/badge/last%20version-blue?style=for-the-badge&logo=visualstudiocode&label=VSCode)
- **Clonar el Repositorio e Instalar Dependencias**
    - `git clone xxs4suk3/AstroLunar.git`
    - `npm install`

- **Crear un nuevo Bot de Discord**
    - Crear una aplicación en ***[Discord Portal Developer](https://discord.com/developers/applications)***
    - Vaya a la sección de ***Bot***, guarda el token en un bloc de notas o en donde te vaya mejor.
    - Activa todos ***Privileged Gateway Intents*** los tres ***Intents*** que no estan activados, especificamente:
        - [x] Presence Intent
        - [x] Server Members Intent
        - [x] Message Content Intent
    - Personaliza tu la descripción de tu bot en ***General Information***

- **Configura el código del Bot**
    - Ponga el token guardado anteriormente en `config.json`, después crea o inicia sesión en [MongoDB](https://account.mongodb.com/account/login).
        - Crea un nuevo proyecto
        - Después seleccione ***+ Create***
        - Seleccion la version gratuita. *"Si tiene la premium mucho mejor"* Seleccione en que región estara su servidor.
        - Copia la contraseña y que te aparece en la siguiente pantalla también guardalo en un sitio seguro, desliza la pantalla y pulse: ***Finish and Close***
        - Ahora ve a la sección de ***Database*** y pulse ***Connect***, ahora pulse ***Drivers*** y copie lo que ponga en la sección 3, recuerda ponerlo en un lugar seguro, ahora cierra pulsando: ***Close***.
        - Ahora ya que tienes la contraseña y el enlace, solo tendras que cambiar en el enlace la contraseña. Busca ***`<password>`*** y pon la contraseña que guardastes anteriormente.
    - Ya que ahora las funciones del *Database* ya esta configurado, puedes ir al arhivo `config.json` y ponga en **mongourl** el enlace que guardastes antes.
    - Configura el prefix y vamos a por la siguiente configuración.
    
    - **Ahora vamos a configurar el guildconfig.json**

        - Ponga el ID a todos los vc de los canales de voz que vayas a usar en tu servidor.
        - Donde ponga **`Guild ID`** ponga el ID de su servidor, luego ponga el canal donde se pondra el mensaje de bienvenida
        - Ahora tenemos que seguir en la sección de **`Log`** pon los canales que va a estar los registros.
        - Ponga los roles para que no se expulse y tambien los canales donde se permite enviar links.
        - En la siguiente sección ponga el rol que no se le expulsara automaticamente-
        - Si quieres activar los antilinks o los autokicks pues ponga **true** si es lo contrario ponga **false**

- **Configuración Extra**
    - **Color del texto en la terminal**
        - Si Quieres cambiar el color tendras que ir a `.\utils\slashsync.js` y luego para mayor facilidad de busqueda puede pulsar **ctrl + f** y ahora mismo podras buscar palabras. Ahora pon **`colors`** en la busqueda.
        - El color que haya después del **`.`** es el que tienes que cambiar. Puedes ver todos los colores disponibles en [npm js colors](https://www.npmjs.com/package/colors).

- **Iniciar el bot**
    - Ponga el comando `npm start` en la terminal y asi se iniciara el **Discord Assistant Bot**
</details>

<br>

<div align="center">
    <h2 align="center"><strong> Discord Bot Payment Assistant </strong></h3>

<h3 align="center"><strong> Disclaimer </strong></h3>
This bot is an independent creation and is not affiliated in any way with Discord or its teams. It has been designed for educational and entertainment purposes. Users are encouraged to use it responsibly and ethically. Any misuse of the bot is strictly prohibited and may result in disciplinary actions. The developer assumes no responsibility for misuse or issues arising from the use of the bot.

<br>

<h2 align="center"><strong> Used Libraries </strong></h2>

| Libraries | Badge | Libraries | Badge | 
| :-------- | :------- | :-------- | :------- | 
| discord.js | ![badge](https://img.shields.io/badge/v13.5.0-0D7FC0?label=npm) | @androz2091/discord-invites-tracker | ![badge](https://img.shields.io/badge/v1.1.1-0D7FC0?label=npm) | 
| @discordjs/rest | ![badge](https://img.shields.io/badge/v1.4.0-0D7FC0?label=npm) | await | ![badge](https://img.shields.io/badge/v0.2.6-0D7FC0?label=npm) |
| canvacord | ![badge](https://img.shields.io/badge/v5.4.8-0D7FC0?label=npm) | colors | ![badge](https://img.shields.io/badge/v1.4.0-0D7FC0?label=npm) |
 | discord-api-types | ![badge](https://img.shields.io/badge/v0.37.11-0D7FC0?label=npm) | discord-backup | ![badge](https://img.shields.io/badge/v3.3.2-0D7FC0?label=npm) |
| discord-fetch-all | ![badge](https://img.shields.io/badge/v3.0.2-0D7FC0?label=npm) | discord-giveaways | ![badge](https://img.shields.io/badge/v5.0.1-0D7FC0?label=npm) |
| moment | ![badge](https://img.shields.io/badge/v2.29.4-0D7FC0?label=npm) | mongoose | ![badge](https://img.shields.io/badge/v6.6.2-0D7FC0?label=npm) |
| ms | ![badge](https://img.shields.io/badge/v3.0.0-canary.1-0D7FC0?label=npm) | parsec | ![badge](https://img.shields.io/badge/v2.0.2-0D7FC0?label=npm) | 
| quick.db | ![badge](https://img.shields.io/badge/v7.1.1-0D7FC0?label=npm) |

<br>

<h2 align="center"><strong> Copyrighted </strong></h2>
This content is protected by copyright and cannot be claimed by any unauthorized individual as their own. If you wish to collaborate, please create a branch or open an issue. Contributions are welcome, but the distribution or sale of this content is strictly prohibited. Proper credits go to the original creators.
<br>
<br>
- If you need help, contact <a href="https://discord.gg/SCAseyr6Jf">AstroLunar Support</a> in Discord -
</div>
